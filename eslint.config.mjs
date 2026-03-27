import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

export default [
	...nextCoreWebVitals,
	{
		files: ["**/*.{ts,tsx,js,jsx}"],
		rules: {
			"array-bracket-spacing": ["error", "never"],
			"brace-style": ["error", "1tbs"],
			indent: [1, "tab", { SwitchCase: 1 }],
			"no-trailing-spaces": ["error"],
			"object-shorthand": ["error", "always"],
			semi: ["error", "always"],
			strict: ["error", "global"],
		},
	},
];
