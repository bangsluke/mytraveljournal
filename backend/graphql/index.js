import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Neo4jGraphQL } from "@neo4j/graphql";
import "dotenv/config.js"; // https://stackoverflow.com/a/65292523
import neo4j from "neo4j-driver";
// import customResolvers from "./customResolvers";

// Define custom resolvers
const customResolvers = {
	Query: {
		personHolidayCount: async (_, { nodeId }, context) => {
			// Inspect the context in your custom resolver
			console.log("Context in resolver:", context); // Check what's inside the context
			if (!context.driver) {
				throw new Error("Driver not found in context");
			}

			// Implement the custom logic using the Neo4j driver
			const session = context.driver.session();
			try {
				const result = await session.run(
					`MATCH (p:Person {nodeId: $nodeId})-[:ATTENDED]->(h:Holiday)
           RETURN p.nodeId AS nodeId, COUNT(h) AS holidayCount`,
					{ nodeId },
				);
				const record = result.records[0];
				return {
					nodeId: record.get("nodeId"),
					holidayCount: record.get("holidayCount").toInt(),
				};
			} catch (error) {
				throw new Error("Error querying the Neo4j database", { cause: error });
			} finally {
				await session.close();
			}
		},
	},
};

const typeDefs = `#graphql
    type Movie {
        title: String
        actors: [Actor!]! @relationship(type: "ACTED_IN", direction: IN)
    }

    type Actor {
        name: String
        movies: [Movie!]! @relationship(type: "ACTED_IN", direction: OUT)
    }

	type Continent {
		name: String!
		nodeId: String!
	}

    type Country {
		name: String!
		nodeId: String!
	}

	type City {
		name: String!
		nodeId: String!
		capital: Boolean!
		level: String
	}

	type Island {
		name: String!
		nodeId: String!
	}

	type Person {
		name: String!
		nodeId: String
		aliases: String
		textBodyText: String
	}

	type Holiday {
		dateYear: String!
		dateMonth: String!
		name: String!
		holidayTitle: String!
		nodeId: String!
		locations: [String!]
		coverPhoto: String
		textHtmlContent: String!
		attendees: [String!]
	}

	type Query {
		personHolidayCount(nodeId: String!): PersonHolidayCount!
	}

	type PersonHolidayCount {
		nodeId: String!
		holidayCount: Int!
	}
`;

// Display the typeDefs nicely formatted in the console
//console.log("typeDefs from backend/graphql/index.js", typeDefs);

// Display the NEO4J_CREDENTIALS nicely formatted in the console
const NEO4J_CREDENTIALS = `{
	uri: ${process.env.NEO4J_URI},
	user: ${process.env.NEO4J_USER},
	password: ${process.env.NEO4J_PW},
}`;
console.log("NEO4J_CREDENTIALS", NEO4J_CREDENTIALS);

// Add a check to make sure the environment variables are indeed being loaded
if (!process.env.NEO4J_URI || !process.env.NEO4J_USER || !process.env.NEO4J_PW) {
	throw new Error("Neo4j environment variables not set");
}

// Connect to Neo4j
const driver = neo4j.driver(
	process.env.NEO4J_URI, // Use 127.0.0.1 instead of localhost - https://stackoverflow.com/a/73777897
	neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PW),
);

// Generate the initial schema
const neoSchema = new Neo4jGraphQL({
	typeDefs,
	driver,
	resolvers: customResolvers,
});

// Build the schema
const schema = await neoSchema.getSchema(); // This now includes custom resolvers

// Check the driver before creating the Apollo server
if (!driver) {
	throw new Error("Neo4j driver not initialized");
}

// Now neoSchema includes both the generated resolvers from your typeDefs as well as any custom resolvers you have defined.
const server = new ApolloServer({
	schema,
	context: ({ req }) => {
		console.log("Driver in context:", driver); // This should not be undefined
		return {
			req,
			driver,
		};
	},
});

const { url } = await startStandaloneServer(server, {
	context: async ({ req }) => ({ req }), // Remove the context from here if it's causing the override
	listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);
