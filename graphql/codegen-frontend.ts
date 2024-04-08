import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true, // Set to true to allow overwriting existing generated files
	schema: "http://localhost:4000/graphql", // Specify the path to your GraphQL schema - which is the running server
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
