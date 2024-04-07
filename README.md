# MyTravelJournal

[![Netlify Status](https://api.netlify.com/api/v1/badges/267ef8c1-6dae-4fae-bc37-680c3f02ebfd/deploy-status)](https://app.netlify.com/sites/bangsluke-mytraveljournal/deploys)

## Table of Contents

- [Getting Started](#getting-started)
  - [Quick Start](#quick-start)
    - [Development Start](#development-start)
    - [Production Start](#production-start)
- [Set Up](#set-up)
  - [Notes Set Up](#notes-set-up)
    - [Markdown Set Up](#markdown-set-up)
  - [Next.js Initiation](#nextjs-initiation)
  - [Authentication Set Up](#authentication-set-up)
  - [Netlify Hosting](#netlify-hosting)
    - [Netlify Environment Variables](#netlify-environment-variables)
      - [GraphQL Endpoint](#graphql-endpoint)
      - [NextAuth](#nextauth)
  - [GraphQL Set Up](#graphql-set-up)
    - [Schema and Updates](#schema-and-updates)
    - [How to extend the Schema and queries](#how-to-extend-the-schema-and-queries)

## Getting Started

### Quick start

#### Development Start

To quickly get started in development mode, do the following steps:

1. Start up Neo4j desktop
2. Start the Neo4j graph database (on Neo4j desktop)
3. If not already in the correct directory, navigate to the backend directory, the `server-mytraveljournal` repo <https://github.com/bangsluke/server-mytraveljournal> using `cd server-mytraveljournal`
4. Start the backend by running: `npm run dev` in a terminal - Note: This will generate TypeScript code from the GraphQL schema in the front end
5. In a second terminal, navigate to the `mytraveljournal` repo <https://github.com/bangsluke/mytraveljournal> using `cd ../mytraveljournal`
6. Start the frontend by running: `yarn dev`
7. Open [http://localhost:3000](http://localhost:3000) and the frontend should be up and running with a data connection to the backend

#### Production Start

To quickly get started in production mode, do the following steps:

1. Check that the backend Apollo Server <https://github.com/bangsluke/server-mytraveljournal> is running correctly
2. Alternatively navigate to the backend directory, the `server-mytraveljournal` repo <https://github.com/bangsluke/server-mytraveljournal> using `cd server-mytraveljournal` and start the backend by running: `npm run start` in a terminal - Note: This will generate TypeScript code from the GraphQL schema in the front end
3. Open [Neo4j Aura](https://console.neo4j.io/?product=aura-db&tenant=7a5b41a0-6373-5c3c-9fcf-48b80d5d38f2#databases) and use the command `MATCH (n)-[r]->(m) RETURN n, r, m;` to see all nodes and edges
4. In a terminal, build the frontend by running: `yarn build`
5. When done, start the frontend by running: `yarn start`
6. Open [http://localhost:3000](http://localhost:3000)

> [Back to Table of Contents](#table-of-contents)

## Set Up

### Notes Set Up

#### Markdown Set Up

The page is built off of data from markdown files created in Obsidian. Obsidian is not needed, as any markdown editor/creator will work, however it is the one I use and recommend.

##### Note Set Up

At the start of each note, I have some "front matter" - the name used in Obsidian, added via the properties functionality. This allows me to add tags and linked notes in the data at the start of the page that keeps links within Obsidian and also allows me to read the data into Python in a structured way.

###### Example of required "Front Matter" Structure

```JS
- tags: #holiday
- attendees: [[Luke]], [[Bryony]]
- coverPhoto: "https://i.imgur.com/QeribGQ.jpeg"
- photoAlbum: 2023 06 - Dublin
- locations: [[Dublin]], [[Howth]]
- departingAirport: [[Gatwick]]
```

> Note: If more than one location is added, the script will use the first location.

##### Cover Photo Set Up

To add a cover photo to any holiday note, the field accepts a url link to the image.

The easiest way to do this is to use Imgur (<https://imgur.com>) and upload the images you wish to use and then right click on the image and select "Copy image URL". If you paste this copied url into the field, you can use Obsidian to view the image as well as making it available for use on the Travel Site.

> [Back to Table of Contents](#table-of-contents)

### Next.js Initiation

Created using: `npx create-next-app@latest --ts mytraveljournal`

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

> [Back to Table of Contents](#table-of-contents)

### Authentication Set Up

- Using Next-Auth for all authentication - https://next-auth.js.org/getting-started/example

#### Adding Email Addresses

In order to add a new address to the list of allowed email addresses, add it to the `allowedEmails.json` file in the `mytraveljournal/constants` folder.

> [Back to Table of Contents](#table-of-contents)

### Netlify Hosting

The front end code is deployed to [Netlify](https://app.netlify.com/sites/bangsluke-mytraveljournal/overview)

#### Netlify Environment Variables

##### GraphQL Endpoint

- NEXT_PUBLIC_APP_BACKEND_URL
  - Purpose: Specifies the URL of your GraphQL backend

##### NextAuth

- NEXTAUTH_URL
  - Purpose: Specifies the base URL for authentication callbacks. It should be set to the Netlify URL
- NEXTAUTH_SECRET
  - Purpose: A secret key used by NextAuth.js for session encryption
- GITHUB_ID, GITHUB_SECRET
  - Purpose: OAuth credentials for GitHub authentication
- GOOGLE_ID, GOOGLE_SECRET
  - Purpose: OAuth credentials for Google authentication

> [Back to Table of Contents](#table-of-contents)

### GraphQL Set Up

### Schema and Updates

The GraphQL schema can be found in the `server-mytraveljournal` repo <https://github.com/bangsluke/server-mytraveljournal>, located at `server-mytraveljournal/graphql/schema.graphql`.

On starting up the server, the front end types are generated from the `schema.graphql` file, using the `npm run generate` command. This produces a file in the `mytraveljournal` repo <https://github.com/bangsluke/mytraveljournal>, located at `mytraveljournal/graphql/__generated__/resolvers-types.ts`. See the site https://www.apollographql.com/docs/apollo-server/workflow/generate-types/ for more information.

Further to this, there are some front end queries that are stored in the `mytraveljournal` repo <https://github.com/bangsluke/mytraveljournal>, located at `mytraveljournal/graphql/GraphQLQueries.ts`. These are manually updated as needed.

### How to extend the Schema and queries

- To extend the schema, update the file `schema.graphql` in the `server-mytraveljournal` repo, found at `server-mytraveljournal/graphql/schema.graphql`. Re-start the server and the front end types will be updated.
- To extend the queries, test out making queries by running the server in development mode and going to http://localhost:4000/ to use the sandbox. Then manually update the file `GraphQLQueries.ts` in the `mytraveljournal` repo, found at `mytraveljournal/graphql/GraphQLQueries.ts`.

> [Back to Table of Contents](#table-of-contents)
