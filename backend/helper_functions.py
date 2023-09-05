import re


def remove_prefix(string, prefix):
    # Helper function to remove the prefix from a string
    # Called using: `remove_prefix(string, prefix)`
    if string.startswith(prefix):
        return string[len(prefix):]
    return string


def extract_year_month_name(string):
    # Helper function to extract year and month and name from a string
    # Called using: `extract_year_month_name(string)`
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


def remove_non_ascii(text):
    # Helper function to remove non-ASCII characters
    # Called using: `remove_non_ascii(text)`
    # Use a regular expression to match non-ASCII characters
    pattern = r'[^\x00-\x7F]+'
    cleaned_text = re.sub(pattern, '', text)
    return cleaned_text


def remove_start_and_end_double_brackets(string):
    # Helper function to remove start and end double brackets
    if string.startswith("[[") and string.endswith("]]"):
        return string[2:-2]
    else:
        return string
