from neomodel import (  # https://neomodel.readthedocs.io/en/latest/index.html
    RelationshipTo, StringProperty, StructuredNode, UniqueIdProperty,
    ZeroOrOne)


class Location(StructuredNode):
    """
    Class to represent a general location node.
    """
    node_id = StringProperty()
    name = StringProperty(unique_index=True, required=True)
    level = StringProperty()
    located_in = RelationshipTo("Location", "LOCATED_IN")


class Continent(Location):
    # Create the Continent class as a subclass of Location - https://stackoverflow.com/a/56778266
    """
    Class to represent a continent location node.
    """
    # name = StringProperty(unique_index=True, required=True)
    # level = StringProperty()
    area = StringProperty()  # TODO: Add a API to add the area


class Country(Location):
    # Create the Country class as a subclass of Location - https://stackoverflow.com/a/56778266
    """
    Class to represent a country location node.
    """
    # name = StringProperty(unique_index=True, required=True)
    # level = StringProperty()
    located_in = RelationshipTo("Location", "LOCATED_IN")


class County(Location):
    # Create the County class as a subclass of Location - https://stackoverflow.com/a/56778266
    """
    Class to represent a county location node.
    """
    # name = StringProperty(unique_index=True, required=True)
    # level = StringProperty()
    located_in = RelationshipTo("Location", "LOCATED_IN")


class City(Location):
    # Create the City class as a subclass of Location - https://stackoverflow.com/a/56778266
    """
    Class to represent a city location node.
    """
    # name = StringProperty(unique_index=True, required=True)
    # level = StringProperty()
    capital = StringProperty()
    located_in = RelationshipTo("Country", "LOCATED_IN")
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
    attendees = StringProperty()
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
    Class to represent a person node.
    """
    node_id = StringProperty()
    name = StringProperty(unique_index=True, required=True)
    text_body_text = StringProperty()  # All of the Obsidian note text
    aliases = StringProperty()
    attended = RelationshipTo(Holiday, "ATTENDED")
