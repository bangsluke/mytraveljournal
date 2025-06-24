import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true, // Set to true to allow overwriting existing generated files
	schema: "../server-mytraveljournal/graphql/schema.graphql", // Use the local schema file
	// documents: "./graphql/!(*.d).{ts,tsx}",
	documents: "./graphql/**/*.graphql",

	// Specify the output paths and plugins for code generation
	generates: {
		"graphql/__generated__/": {
			// Generate types and operations for frontend
			preset: "client",
		},
	},
};

export default config;
