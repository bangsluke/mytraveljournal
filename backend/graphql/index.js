import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Neo4jGraphQL } from "@neo4j/graphql";
import "dotenv/config.js"; // https://stackoverflow.com/a/65292523
import neo4j from "neo4j-driver";

// require("dotenv").config();

const typeDefs = `#graphql
    type Movie {
        title: String
        actors: [Actor!]! @relationship(type: "ACTED_IN", direction: IN)
    }

    type Actor {
        name: String
        movies: [Movie!]! @relationship(type: "ACTED_IN", direction: OUT)
    }
`;

console.log(`Database password is ${process.env.N4J_PW}`);

const driver = neo4j.driver(
  //   "bolt://localhost:7687",
  "bolt://127.0.0.1:7687", // Use 127.0.0.1 instead of localhost - https://stackoverflow.com/a/73777897
  neo4j.auth.basic(process.env.N4J_USER, process.env.N4J_PW)
);

const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

const server = new ApolloServer({
  schema: await neoSchema.getSchema(),
});

const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => ({ req }),
  listen: { port: 4000 },
});

console.log(`🚀 Server ready at ${url}`);
