import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Neo4jGraphQL } from "@neo4j/graphql";
import "dotenv/config.js"; // https://stackoverflow.com/a/65292523
import neo4j from "neo4j-driver";

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
		name: String!
		dateYear: String!
		dateMonth: String!
		nodeId: String!
		textHtmlContent: String
		attendees: [String!]
	}
`;

// Display the typeDefs nicely formatted in the console
console.log("typeDefs from backend/graphql/index.js", typeDefs);

// Display the NEO4J_CREDENTIALS nicely formatted in the console
const NEO4J_CREDENTIALS = `{
	uri: ${process.env.NEO4J_URI},
	user: ${process.env.NEO4J_USER},
	password: ${process.env.NEO4J_PW},
}`;
console.log("NEO4J_CREDENTIALS", NEO4J_CREDENTIALS);

// Connect to Neo4j
const driver = neo4j.driver(
	process.env.NEO4J_URI, // Use 127.0.0.1 instead of localhost - https://stackoverflow.com/a/73777897
	neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PW),
);

const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

const server = new ApolloServer({
	schema: await neoSchema.getSchema(),
});

const { url } = await startStandaloneServer(server, {
	context: async ({ req }) => ({ req }),
	listen: { port: 4000 },
});

// Display the url
console.log(`Backend server started up. 🚀 Server ready at ${url}`);
