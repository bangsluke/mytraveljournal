from neomodel import (  # https://neomodel.readthedocs.io/en/latest/index.html
    ArrayProperty, OneOrMore, RelationshipTo, StringProperty, StructuredNode,
    UniqueIdProperty, ZeroOrOne)


class Location(StructuredNode):
    """
    Class to represent a general location node.
    """
    node_id = StringProperty()
    name = StringProperty(unique_index=True, required=True)
    level = StringProperty()
    # located_in = RelationshipTo("Location", "LOCATED_IN")


class Continent(Location):
    # Create the Continent class as a subclass of Location - https://stackoverflow.com/a/56778266
    """
    Class to represent a continent location node.
    """
    # name = StringProperty(unique_index=True, required=True)
    # level = StringProperty()
    area = StringProperty()  # TODO: Add a API to add the area


class Country(StructuredNode):
    # Create the Country class as a subclass of Location - https://stackoverflow.com/a/56778266
    """
    Class to represent a country location node.
    """
    node_id = StringProperty(unique_index=True, required=True)
    name = StringProperty(required=True)
    level = StringProperty()
    # name = StringProperty(unique_index=True, required=True)
    # level = StringProperty()
    # TODO: Add in "OneOrMore as a third variable below to force a one-to-many relationship"
    located_in = RelationshipTo("Location", "LOCATED_IN", OneOrMore)


class County(Location):
    # Create the County class as a subclass of Location - https://stackoverflow.com/a/56778266
    """
    Class to represent a county location node.
    """
    # name = StringProperty(unique_index=True, required=True)
    # level = StringProperty()
    # TODO: Add in "OneOrMore as a third variable below to force a one-to-many relationship"
    located_in = RelationshipTo("Location", "LOCATED_IN", OneOrMore)


class State(Location):
    # Create the State class as a subclass of Location - https://stackoverflow.com/a/56778266
    """
    Class to represent a state location node.
    """
    # name = StringProperty(unique_index=True, required=True)
    # level = StringProperty()
    # TODO: Add in "OneOrMore as a third variable below to force a one-to-many relationship"
    located_in = RelationshipTo(Country, "LOCATED_IN", OneOrMore)


class City(Location):
    # Create the City class as a subclass of Location - https://stackoverflow.com/a/56778266
    """
    Class to represent a city location node.
    """
    # name = StringProperty(unique_index=True, required=True)
    # level = StringProperty()
    capital = StringProperty()
    # TODO: Add in "OneOrMore as a third variable below to force a one-to-many relationship"
    located_in = RelationshipTo("Country", "LOCATED_IN")
    # coordinates = StringProperty()
    # population = StringProperty()


class Town(StructuredNode):
    # Create the Town class as a subclass of Location - https://stackoverflow.com/a/56778266
    """
    Class to represent a town location node.
    """
    node_id = StringProperty()
    name = StringProperty(unique_index=True, required=True)
    level = StringProperty()
    # TODO: Add in "OneOrMore as a third variable below to force a one-to-many relationship"
    located_in = RelationshipTo("Country", "LOCATED_IN", OneOrMore)
    # coordinates = StringProperty()
    # population = StringProperty()


class Island(Location):
    # Create the Island class as a subclass of Location - https://stackoverflow.com/a/56778266
    """
    Class to represent an island location node.
    """
    # name = StringProperty(unique_index=True, required=True)
    # level = StringProperty()
    located_in = RelationshipTo("Country", "LOCATED_IN")


class Holiday(StructuredNode):
    """
    Class to represent a holiday note node.
    """
    node_id = StringProperty(unique_index=True, required=True)
    name = StringProperty(unique_index=True, required=True)
    date_year = StringProperty(required=True)
    date_month = StringProperty(required=True)
    attendees = ArrayProperty()
    text = StringProperty()
    text_full_note_text = StringProperty()  # All of the Obsidian note text
    # All of the HTML body text below the fake front matter
    text_body_text = StringProperty()
    text_html_content = StringProperty()  # Hold the parsed HTML
    # Location details
    locations = ArrayProperty()
    travelled_to = RelationshipTo(Location, "TRAVELLED_TO", OneOrMore)
    # Photo details
    cover_photo = StringProperty()


class Person(StructuredNode):
    """
    Class to represent a person node.
    """
    node_id = StringProperty()
    name = StringProperty(unique_index=True, required=True)
    text_body_text = StringProperty()  # All of the Obsidian note text
    aliases = StringProperty()
    attended = RelationshipTo(Holiday, "ATTENDED")


# Function to create a relationship from a town to a country by name
def connect_town_to_country(town_name, country_properties):
    # Query for the town by name
    town = Town.nodes.get_or_none(name=town_name)

    # Check if the town exists
    if town:
        # Create a new Country node with the specified properties
        country = Country(**country_properties).save()

        # Create a relationship from the town to the country
        town.country.connect(country)

        # Save the changes
        town.save()

        return f"Connected {town_name} to country {country.name}"
    else:
        return f"Town with name {town_name} not found"
