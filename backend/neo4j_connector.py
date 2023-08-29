# This is a sample Python script.
import configparser
import os
import re

import markdown2
import obsidiantools.api as otools  # https://pypi.org/project/obsidiantools/
from neomodel import (  # https://neomodel.readthedocs.io/en/latest/index.html
    IntegerProperty, RelationshipTo, StringProperty, StructuredNode, ZeroOrOne,
    config, db)


class Location(StructuredNode):
    name = StringProperty(unique_index=True, required=True)
    level = StringProperty()
    located_in = RelationshipTo("Location", "LOCATED_IN")

# Create the Continent class as a subclass of Location - https://stackoverflow.com/a/56778266


class Continent(Location):
    # name = StringProperty(unique_index=True, required=True)
    # level = StringProperty()
    area = StringProperty()  # TODO: Add a API to add the area


# Create the Country class as a subclass of Location - https://stackoverflow.com/a/56778266
class Country(Location):
    # name = StringProperty(unique_index=True, required=True)
    # level = StringProperty()
    located_in = RelationshipTo("Location", "LOCATED_IN")


# Create the County class as a subclass of Location - https://stackoverflow.com/a/56778266
class County(Location):
    # name = StringProperty(unique_index=True, required=True)
    # level = StringProperty()
    located_in = RelationshipTo("Location", "LOCATED_IN")


# Create the City class as a subclass of Location - https://stackoverflow.com/a/56778266
class City(Location):
    # name = StringProperty(unique_index=True, required=True)
    # level = StringProperty()
    capital = StringProperty()
    located_in = RelationshipTo("Country", "LOCATED_IN")
    # coordinates = StringProperty()
    # population = StringProperty()


# Create the Island class as a subclass of Location - https://stackoverflow.com/a/56778266
class Island(Location):
    # name = StringProperty(unique_index=True, required=True)
    # level = StringProperty()
    located_in = RelationshipTo("Country", "LOCATED_IN")


class Holiday(StructuredNode):
    """
    Class to represent real Identity of an entity.
    """
    name = StringProperty(unique_index=True, required=True)
    date_year = IntegerProperty(required=True)
    date_month = IntegerProperty(required=True)
    holiday_id = StringProperty(unique_index=True, required=True)
    text = StringProperty()
    text_full_note_text = StringProperty()  # All of the Obsidian note text
    # All of the HTML body text below the fake front matter
    text_body_text = StringProperty()
    text_html_content = StringProperty()  # Hold the parsed HTML
    # Location details
    location = StringProperty()
    travelled_to = RelationshipTo(Location, "TRAVELLED_TO", ZeroOrOne)


class Person(StructuredNode):
    """
    Class to represent real Identity of an entity.
    """
    name = StringProperty(unique_index=True, required=True)
    text_body_text = StringProperty()  # All of the Obsidian note text
    attended = RelationshipTo(Holiday, "ATTENDED")

# Helper function to remove the prefix from a string
# Called using: `remove_prefix(string, prefix)`


def remove_prefix(string, prefix):
    if string.startswith(prefix):
        return string[len(prefix):]
    return string

# Helper function to extract year and month and name from a string
# Called using: `extract_year_month_name(string)`


def extract_year_month_name(string):
    # print("string: ", string)
    # print("string.rfind()", string.rfind("\\"))
    last_backslash_index = string.rfind("\\")  # Find the last backslash index
    if last_backslash_index != -1:
        # Get the text to the right of the backslash
        string = string[last_backslash_index + 1:]
    # print("string: ", string)
    pattern = r'^(\d{4}) (\d{2}) (.+)$'
    match = re.match(pattern, string)
    if match:
        year = int(match.group(1))
        month = int(match.group(2))
        name = match.group(3)
        # Extract the name from the result, removing the "- " prefix
        name = remove_prefix(name, "- ")
        # print("name: ", name)
        return {"year": year, "month": month, "name": name}
    else:
        return None


# Helper function to remove non-ASCII characters
# Called using: `remove_non_ascii(text)`
def remove_non_ascii(text):
    # Use a regular expression to match non-ASCII characters
    pattern = r'[^\x00-\x7F]+'
    cleaned_text = re.sub(pattern, '', text)
    return cleaned_text


# Define the relative file path of the config file
rel_config_file_path = 'properties.properties'

# Define the relative folder path of the .md data files
rel_data_folder_path = 'testdata'

if __name__ == '__main__':

    # Get the full path of the current script i.e. /path/to/dir/foobar.py
    current_script_path = os.path.abspath(__file__)
    # Get the directory of the current script i.e. /path/to/dir/
    current_script_dir = os.path.split(current_script_path)[0]
    # Create the full path of the config file
    config_file_path = os.path.join(current_script_dir, rel_config_file_path)
    print("config_file_path: ", config_file_path)

    # Create the full path of the data folder
    data_folder_path = os.path.join(current_script_dir, rel_data_folder_path)
    print("data_folder_path: ", data_folder_path)

with open(config_file_path, 'r') as file:
    content = file.read()
    print("content of config_file_path: \n", content)

    config_file = configparser.ConfigParser()
    config_file.read(config_file_path)
    # config_file.read('../properties.properties')
    # print(config_file.read())
    config.DATABASE_URL = f'{config_file.get("NEO4J", "N4J.ConnType")}{config_file.get("NEO4J", "N4J.USER")}:{config_file.get("NEO4J", "N4J.PW")}@{config_file.get("NEO4J", "N4J.URL")}/{config_file.get("NEO4J", "N4J.DB")}'
    # Check if the database URL is correct
    print("config.DATABASE_URL: ", config.DATABASE_URL)

    # Get the vault data folder path. If FullPath is not set, use RelativePath
    vault_folder_path = config_file.get("DATA", "DATA.FullPath") if config_file.get("DATA", "DATA.FullPath") \
        else os.path.join(current_script_dir, config_file.get("DATA", "DATA.RelativePath"))  # If FullPath is not set, use RelativePath and create a full path
    print("vault_folder_path: ", vault_folder_path)

    # Clear the database
    db.cypher_query("MATCH (n) DETACH DELETE n")  # Only for debugging
    print("'MATCH (n) DETACH DELETE n' sent to clear the database")

    # Connect to the vault of data and gather the tags
    vault = otools.Vault(vault_folder_path).connect().gather()
    print("Collecting tags from the vault and building nodes...")

    # Do the first loop through the nodes - creating the basic nodes such as Continent, Country, City, People etc
    for node in vault.graph.nodes:
        print(node)  # List all found tags
        try:
            tags = vault.get_tags(node)
            if "location" in tags:
                if "continent" in tags:  # Create the continent nodes
                    continent = Continent.create_or_update(
                        {"name": node, "level": "Continent"})[0]
                    continent.save()
                elif "country" in tags:
                    # TODO: Connect the country node to the continent
                    country = Country.create_or_update(
                        {"name": node, "level": "Country"})[0]
                    country.save()
                elif "county" in tags:
                    # TODO: Connect the county node to the country
                    county = County.create_or_update(
                        {"name": node, "level": "County"})[0]
                    county.save()
                elif "city" in tags:
                    # TODO: Connect the city node to the country
                    if "capital" in tags:  # Check if the current node is a capital
                        capital = "true"
                    else:
                        capital = "false"
                    city = City.create_or_update(
                        {"name": node, "level": "City", "capital": capital})[0]
                    city.save()
                elif "island" in tags:
                    # TODO: Connect the island node to the country
                    # TODO: Connect the island node to the located in node
                    island = Island.create_or_update(
                        {"name": node, "level": "Island"})[0]
                    island.save()
                else:
                    # TODO: Create the location node
                    # TODO: Connect the location node to the country
                    level = "Unknown"
                # location = Location.get_or_create({"name": node})[0]
                # location.level = level
                # location.save()
            elif "person" in tags:

                # Get the body text using a strip
                text = vault.get_readable_text(node)
                text_body_text = text

                # Create or update and existing person node and add all data to it
                person = Person.create_or_update(
                    {"name": node, "text_body_text": text_body_text})[0]
                person.save()
        except ValueError as e:
            print(e)

    for start_node, end_node in set((start_node, end_node) for start_node, end_node, _ in vault.graph.edges):
        try:
            start_tags = vault.get_tags(start_node)
            # print(start_tags)
            end_tags = vault.get_tags(end_node)
            # print(start_node, end_node)
            if "city" in start_tags and "country" in end_tags:
                city = City.get_or_create({"name": start_node})[0]
                country = Country.get_or_create({"name": end_node})[0]
                city.located_in.connect(country)
            # if "country" in start_tags and "continent" in end_tags:
            #     country = Country.get_or_create({"name": start_node})[0]
            #     continent = Continent.get_or_create({"name": end_node})[0]
            #     country.located_in.connect(continent)
        except ValueError as e:
            print(e)

    # Do the second loop through the nodes - creating the holidays
    for node in vault.graph.nodes:
        try:
            tags = vault.get_tags(node)
            if "holiday" in tags:
                print("   " + node)  # List all found holidays
                # Get the name, year and month from the holiday note name
                extract_result = extract_year_month_name(node)
                # print(node)
                if node[:3] == "TBC":  # Check if the first three characters are TBC of the node name
                    continue  # Skip this item
                # print(extract_result)
                # print("Year:", extract_result["year"])
                # Extract the year from the result
                date_year = extract_result["year"]
                # Extract the month from the result
                date_month = extract_result["month"]
                # Extract the name from the result
                name = extract_result["name"]
                # Clean the name of non-ASCII characters and replace any comma spaces with dashes, and remove any spaces
                cleanedName = remove_non_ascii(
                    name.replace(", ", "-")).strip().replace(" ", "-").strip()

                # Create the holiday id - the :02 formats the month to two digits
                holiday_id = f"{date_year}-{date_month:02}-{cleanedName}"

                # Get the various forms of the text to add to the node
                full_node_path = f"{vault_folder_path}\{node}.md"
                # print(full_node_path)
                # TODO: Fix the fact that the node path is being lost
                # text_full_note_text = frontmatter.load(full_node_path)
                # print(text_full_note_text)

                # Get the body text using a strip
                text = vault.get_readable_text(node)
                text_body_text = text[text.find(
                    "\n", text.find("location:") + 9):].strip()

                # Convert the markdown body text to html
                text_html_content = markdown2.markdown(
                    text_body_text)  # Convert the markdown to html

                # Generate other properties on the node
                location = text[text.find(
                    "location:") + 9:text.find("departingAirport:")].strip()
                print("Note: ", node, ", location: ", location)
                # print(location)

                # Create the holiday node and add all data to it
                holiday = Holiday(name=name, date_year=date_year, date_month=date_month,
                                  holiday_id=holiday_id,
                                  #   text_full_note_text=text_full_note_text,
                                  text_body_text=text_body_text,
                                  text_html_content=text_html_content,
                                  location=location)
                holiday.save()

                # Get the location and connect it to the holiday
                # Split out the location text
                location = text[text.find(
                    "location:") + 9:text.find("departingAirport:")].strip()
                # print("Location: ", location)
                location = Location.create_or_update({"name": location})[0]
                location.save()
                holiday.travelled_to.connect(location)

                # Get the attendees and connect them to the holiday
                for attendee in [attendee.strip() for attendee in text[text.find("attendees:") + 10:text.find("coverPhoto:")].split(',')]:
                    person = Person.create_or_update({"name": attendee})[0]
                    person.save()
                    person.attended.connect(holiday)
        except ValueError as e:
            print(e)

    for start_node, end_node in set((start_node, end_node) for start_node, end_node, _ in vault.graph.edges):
        try:
            start_tags = vault.get_tags(start_node)
            # print(start_tags)
            end_tags = vault.get_tags(end_node)
            # print(start_node, end_node)
            if "city" in start_tags and "country" in end_tags:
                city = City.get_or_create({"name": start_node})[0]
                country = Country.get_or_create({"name": end_node})[0]
                city.located_in.connect(country)
            # if "country" in start_tags and "continent" in end_tags:
            #     country = Country.get_or_create({"name": start_node})[0]
            #     continent = Continent.get_or_create({"name": end_node})[0]
            #     country.located_in.connect(continent)
        except ValueError as e:
            print(e)

    # Count the number of nodes
    print("Done.")
    node_labels_to_count = ["Continent", "Country",
                            "City", "Holiday", "Person"]  # Define the node labels to count

    # Function to print the node count for each passed node label
    def print_node_count(strings):
        for string in strings:
            # print(string)
            print("   " + string + " Count: ", db.cypher_query(
                "MATCH (c:" + string + ") RETURN count(c) AS count")[0])

    print_node_count(node_labels_to_count)  # Call the function

    print("   Capital Count: ", db.cypher_query(
        "MATCH (n) WHERE n.capital = 'true' RETURN count(n) AS capitalCount")[0])
