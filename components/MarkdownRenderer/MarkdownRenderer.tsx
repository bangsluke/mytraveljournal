import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Constants from "../../constants/constants";

interface MyRendererProps {
	possibleHyperlinks: any;
	children: string;
}

// Custom renderer with custom replace rules
const MarkdownRenderer: React.FC<MyRendererProps> = ({ possibleHyperlinks, children }) => {
	// Create a function to test if a string is a possible link
	function searchForText(data: any, search_text: string) {
		const results = []; // Create an empty array
		const categories = ["holidays", "continents", "countries", "cities", "towns", "islands", "people"]; // Define the categories that could contain links
		for (const category of categories) {
			for (const item of data[category] || []) {
				if (category === "holidays") {
					// If the item has a nodeId containing the search_text (but without spaces), add it to the results - needed for links to holidays
					if (item.nodeId.toLowerCase().includes(search_text.toLowerCase().replace(/\s+/g, ""))) {
						results.push({
							__typename: item.__typename,
							nodeId: item.nodeId,
						});
					}
				} else if (item.name.toLowerCase() === search_text.toLowerCase()) {
					results.push({
						__typename: item.__typename,
						nodeId: item.nodeId,
					});
				}
			}
		}

		return results;
	}

	const processedContent = children
		.replace(/> \[!bigback\] Link back to \[\[Personal Home\|Home\]\]/g, "") // Remove "> [!bigback] Link back to [[Personal Home|Home]]"
		.replace(/> \[!back\] Link back to \[\[Travel Notes\]\]/g, "") // Remove "> [!back] Link back to [[Travel Notes]]"
		.replace(/\!\[\[(.*?)\]\]/g, "") // Remove "![[" pattern
		.replace(/\[\[(.*?)\]\]/g, (_: string, label: string) => {
			// Find items of text wrapped in "[[" and "]]" and check if it exists as a value against any "name" property
			let LabelLongName: string = ""; // Initially set up a LabelLongName that will be returned
			let LabelShortName: string | null = null; // Initially set up a LabelShortName that will be returned
			if (label.includes("|")) {
				// Check if the label contains a "|"
				const [fullName, shortName] = label.split("|").map((item) => item.trim());
				LabelLongName = fullName;
				LabelShortName = shortName;
			} else {
				LabelLongName = label;
				LabelShortName = null;
			}

			const results = searchForText(possibleHyperlinks, LabelLongName); // Search for the possible hyperlinks
			if (results.length === 0) {
				return LabelLongName; // Return the original label with no link if no results
			} else if (results.length >= 0) {
				// Define the a hyperlink path that should be followed when clicked
				// @ts-ignore
				let routeName = Constants.NodeToPath[results[0].__typename.toLowerCase()]; // Get the route name based on the mapped node type from constants
				const pageName = results[0].nodeId.replace(/\s+/g, "-");
				// Return the link in Markdown format so that it can correctly be rendered by react-markdown
				return `[${LabelShortName ? LabelShortName : LabelLongName}](/${routeName + "/" + pageName})`;
			} else {
				console.log("label: ", LabelLongName + " not found");
				return LabelLongName;
			}
		});

	return (
		<ReactMarkdown remarkPlugins={[remarkGfm]}>
			{processedContent}
		</ReactMarkdown>
	);
};

export default MarkdownRenderer;
