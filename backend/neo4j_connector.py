# This is a sample Python script.
import configparser
import os

import obsidiantools.api as otools
from neomodel import (RelationshipTo, StringProperty, StructuredNode,
                      ZeroOrOne, config, db)


class Location(StructuredNode):
    name = StringProperty(unique_index=True, required=True)
    level = StringProperty()
    located_in = RelationshipTo("Location", "LOCATED_IN")


class Holiday(StructuredNode):
    """
    Class to represent real Identity of an entity.
    """
    name = StringProperty(unique_index=True, required=True)
    text = StringProperty()
    location = RelationshipTo(Location, "TRAVELED_TO", ZeroOrOne)


class Person(StructuredNode):
    """
    Class to represent real Identity of an entity.
    """
    name = StringProperty(unique_index=True, required=True)
    attended = RelationshipTo(Holiday, "ATTENDED")


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
    vault = otools.Vault(data_folder_path).connect().gather()
    for node in vault.graph.nodes:
        print(node)  # List all found tags
        try:
            tags = vault.get_tags(node)
            if "holiday" in tags:
                text = vault.get_readable_text(node)
                holiday = Holiday(name=node, text=text[text.find(
                    "\n", text.find("location:") + 10):].strip())
                holiday.save()
                location = Location.get_or_create({"name": text[text.find(
                    "location:") + 10:text.find("\n", text.find("location:") + 10)].strip()})[0]
                location.save()
                holiday.location.connect(location)
                for attendee in [attendee.strip() for attendee in text[text.find("attendees:") + 10:text.find("photoAlbum:")].split(',')]:
                    person = Person.get_or_create({"name": attendee})[0]
                    person.save()
                    person.attended.connect(holiday)
            elif "location" in tags:
                if "city" in tags:
                    level = "city".capitalize()
                elif "country" in tags:
                    level = "country".capitalize()
                else:
                    level = "Unknown"
                location = Location.get_or_create({"name": node})[0]
                location.level = level
                location.save()
            elif "person" in tags:
                person = Person.get_or_create({"name": node})[0]
                person.save()
        except ValueError as e:
            print(e)

    for start_node, end_node in set((start_node, end_node) for start_node, end_node, _ in vault.graph.edges):
        try:
            start_tags = vault.get_tags(start_node)
            end_tags = vault.get_tags(end_node)
            # print(start_node, end_node)
            if "city" in start_tags and "country" in end_tags:
                city = Location.get_or_create({"name": start_node})[0]
                country = Location.get_or_create({"name": end_node})[0]
                city.located_in.connect(country)
        except ValueError as e:
            print(e)
