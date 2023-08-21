# Import all required packages
import json
import os

import markdown2

# Set your input and output paths
input_folder = 'C:\\Users\\lbangs\\iCloudDrive\\iCloud~md~obsidian\\Personal Notes\\Notes\\02 Areas\\Travel'
# Creates the output.json file in the same folder as this script
output_file = 'output.json'

data = []  # Create an empty list to store the data

for root, _, files in os.walk(input_folder):
    for filename in files:  # Loop through all the files and folders for adding the data
        if filename.endswith('.md'):  # Check if the file ends with .md
            with open(os.path.join(root, filename), 'r', encoding='utf-8') as file:  # Open the file
                content = file.read()  # Read the file
                html_content = markdown2.markdown(
                    content)  # Convert the markdown to html
                # Append the filename and content to the json data
                data.append({"filename": filename, "content": html_content})

with open(output_file, 'w') as json_file:
    # Write the data to the output.json file
    json.dump(data, json_file, indent=4)
