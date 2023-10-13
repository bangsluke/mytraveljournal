from functools import partial

from geopy.geocoders import Nominatim

geocode = partial(
    Nominatim(user_agent="Tester/0.0").geocode, language="en")
location = geocode("Paris")
print(location.latitude, location.longitude)
