# This is a sample Python script.
import configparser

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


if __name__ == '__main__':
    config_file = configparser.ConfigParser()
    config_file.read('../../properties.properties')
    config.DATABASE_URL = f'{config_file.get("NEO4J", "N4J.ConnType")}{config_file.get("NEO4J", "N4J.USER")}:{config_file.get("NEO4J", "N4J.PW")}@{config_file.get("NEO4J", "N4J.URL")}/{config_file.get("NEO4J", "N4J.DB")}'

    db.cypher_query("MATCH(n) DETACH DELETE n")  # Only for debugging

    # C:\Users\lbangs\iCloudDrive\iCloud~md~obsidian\Personal Notes\Notes\02 Areas\Travel
    vault = otools.Vault("../testdata").connect().gather()
    for node in vault.graph.nodes:
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
