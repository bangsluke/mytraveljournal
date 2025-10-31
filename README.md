# MyTravelJournal

[![Netlify Status](https://api.netlify.com/api/v1/badges/267ef8c1-6dae-4fae-bc37-680c3f02ebfd/deploy-status)](https://app.netlify.com/sites/bangsluke-mytraveljournal/deploys)

> Also see the backend server repo <https://github.com/bangsluke/bangsluke-backend-server> for more details and instructions

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Introduction](#introduction)
- [Quick start](#quick-start)
  - [Development Start](#development-start)
  - [Production Start](#production-start)
- [Set Up](#set-up)
  - [Installations](#installations)
  - [Re-set Up The .env Files](#re-set-up-the-env-files)
  - [Notes Set Up](#notes-set-up)
    - [Markdown Set Up](#markdown-set-up)
      - [Note Set Up](#note-set-up)
        - [Example of required "Front Matter" Structure](#example-of-required-front-matter-structure)
      - [Cover Photo Set Up](#cover-photo-set-up)
  - [Next.js Initiation](#nextjs-initiation)
  - [Authentication Set Up](#authentication-set-up)
    - [Adding Email Addresses](#adding-email-addresses)
    - [Email Access Request Feature](#email-access-request-feature)
      - [How It Works](#how-it-works)
      - [Testing](#testing)
      - [Required Environment Variables](#required-environment-variables)
      - [Manual vs Automatic Approval](#manual-vs-automatic-approval)
  - [Netlify Hosting](#netlify-hosting)
    - [Netlify Environment Variables](#netlify-environment-variables)
      - [GraphQL Endpoint](#graphql-endpoint)
      - [NextAuth](#nextauth)
  - [GraphQL Set Up](#graphql-set-up)
    - [Schema and Updates](#schema-and-updates)
    - [How to extend the Schema and queries](#how-to-extend-the-schema-and-queries)
  - [Node.js Apollo Server Implementation](#nodejs-apollo-server-implementation)
  - [Neo4j Aura Set Up](#neo4j-aura-set-up)
    - [Keeping the Neo4j Aura database running](#keeping-the-neo4j-aura-database-running)
- [Debugging Steps](#debugging-steps)

## Introduction

The front end Next.js repository for MyTravelJournal

## Quick start

### Development Start

To quickly get started in development mode, do the following steps:

1. Start up Neo4j desktop
2. Start the Neo4j graph database (on Neo4j desktop) and use the command `MATCH (n)-[r]->(m) RETURN n, r, m;` to see all nodes and edges
3. Start the backend, the `bangsluke-backend-server` repo <https://github.com/bangsluke/bangsluke-backend-server> by running: `npm run dev` in a terminal - Note: This will generate types from the GraphQL schema in the backend
4. Start the frontend, the `mytraveljournal` repo <https://github.com/bangsluke/mytraveljournal> by running: `yarn dev` - Note: This will generate types from the GraphQL schema in the frontend
5. Open [http://localhost:3000](http://localhost:3000) and the frontend should be up and running with a data connection to the backend

### Production Start

To quickly get started in production mode, do the following steps:

> NOTE: Cannot locally run in production mode as the auth callback is to the main site. Don't know how to fix this.
<!-- TODO: Find a solution -->

1. Check that the backend server <https://github.com/bangsluke/bangsluke-backend-server> is running correctly in Heroku - at <https://dashboard.heroku.com/apps/bangsluke-backend-server> (use `heroku login` and then `heroku logs --tail` in the command line to check the status or visit the Heroku dashboard)
2. Open [Neo4j Aura](https://console-preview.neo4j.io/projects/7a5b41a0-6373-5c3c-9fcf-48b80d5d38f2/instances) and use the command `MATCH (n)-[r]->(m) RETURN n, r, m;` to see all nodes and edges (or `Match (n) return n` just to see nodes)
  - If there are no nodes or edges - run the Python script to load the data in
3. Start the frontend by running: `yarn start` - this will build and start the frontend
4. Open [http://localhost:3000](http://localhost:3000)

> [Back to Table of Contents](#table-of-contents)

## Set Up

### Installations

On a new machine, ensure you run all installations;

- Install python, node, npm and yarn if not already installed
- In this repo, run the command `yarn`
- Run the command `npm install` in the `bangsluke-backend-server` repo <https://github.com/bangsluke/bangsluke-backend-server>
- Install all of the required Python libraries in the `bangsluke-backend-server` repo <https://github.com/bangsluke/bangsluke-backend-server>
- Also see the Python installations in the `bangsluke-backend-server` repo <https://github.com/bangsluke/bangsluke-backend-server>

### Re-set Up The .env Files

- There is an example .env file saved in the repo - see `.env.example`
- Create a `.env.development` file and a `.env.production` file (note that most production .env values are saved in Heroku)
- The .env files should contain;
  - `NEO4J_PASSWORD` - The password used in the Neo4j database when it was created
  - `NEO4J_URI` - The connection to the Neo4j database (for development this is `bolt://localhost:7687`). For production - navigate the the running Neo4j Aura DB and find the "Connection URI"
  - `NEO4J_USER` - This is the database name (usually `neo4j` unless renamed)
  - Several other values, defined in the [Netlify Environment Variables](#netlify-environment-variables) section

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

- Using Next-Auth for all authentication - <https://next-auth.js.org/getting-started/example>

#### Adding Email Addresses

In order to add a new address to the list of allowed email addresses, add it to the `allowedEmails.json` file in the `mytraveljournal/constants` folder.

#### Email Access Request Feature

The site includes an automated email access request system that allows users to request access and be approved via email.

##### How It Works

1. **Request Access**: When a user tries to sign in with an email that is not in `allowedEmails.json`, they are redirected to the request access page (`/auth/request-access`).
2. **Submit Request**: The user enters their email and submits a request, which triggers:
   - Rate limiting checks (by IP and email) to prevent spam
   - Creation of a secure, time-limited approval token (valid for 24 hours)
   - An email sent to the developer with an "Approve Access" button
   - An acknowledgement email sent to the requester
3. **Approve Access**: When the developer clicks the "Approve Access" button in the email:
   - A GitHub Pull Request is automatically created to add the email to `allowedEmails.json`
   - If `GITHUB_AUTO_MERGE` is set to `"true"`, the PR is automatically merged (squash merge)
   - A confirmation page is displayed showing all currently allowed emails
   - Success emails are sent to both the developer and the requester
   - If auto-merge is enabled and Netlify monitoring is configured, build failures are reported via email

##### Testing

You can test the request access page by visiting:
```
https://bangsluke-mytraveljournal.netlify.app/auth/request-access?email=test@example.com
```

Replace `test@example.com` with any test email address. Note that submitting a request will send emails to the configured developer email address.

##### Required Environment Variables

The following environment variables must be configured in Netlify for this feature to work:

- **SMTP Configuration** (for sending emails):
  - `SMTP_HOST` - SMTP server hostname
  - `SMTP_PORT` - SMTP server port (typically 465 or 587)
  - `SMTP_USER` - SMTP username
  - `SMTP_PASS` - SMTP password
  - `SMTP_REJECT_UNAUTHORIZED` - Set to `"false"` for self-signed certificates (optional)
  - `FROM_EMAIL` - The email address used as the sender

- **GitHub Integration** (for creating PRs):
  - `GITHUB_TOKEN` - Personal access token with repo permissions
  - `GITHUB_REPOSITORY` - Repository in format `owner/repo` (e.g., `bangsluke/mytraveljournal`)
  - `GITHUB_AUTO_MERGE` - Set to `"true"` to automatically merge approval PRs (optional)

- **Netlify Integration** (optional, for deploy monitoring):
  - `NETLIFY_TOKEN` - Netlify API token
  - `NETLIFY_SITE_ID` - Netlify site ID

- **Existing NextAuth Variables**:
  - `NEXTAUTH_SECRET` - Used for signing approval tokens (already required for NextAuth)

##### Manual vs Automatic Approval

- **Manual Approval** (`GITHUB_AUTO_MERGE` not set or set to `"false"`): The PR is created but remains open for manual review and merge via GitHub.
- **Automatic Approval** (`GITHUB_AUTO_MERGE="true"`): The PR is automatically merged using squash merge, making the email immediately available after the next deployment.

> [Back to Table of Contents](#table-of-contents)

### Netlify Hosting

The front end code is deployed to [Netlify](https://app.netlify.com/sites/bangsluke-mytraveljournal/overview)

#### Netlify Environment Variables

##### GraphQL Endpoint

- `NEXT_PUBLIC_APP_BACKEND_URL`
  - Purpose: Specifies the URL of your GraphQL backend
  - For development, this is `http://localhost:4000/graphql`

##### NextAuth

- `NEXTAUTH_URL`
  - Purpose: Specifies the base URL for authentication callbacks. It should be set to the Netlify URL
- `NEXTAUTH_SECRET`
  - Purpose: A secret key used by NextAuth.js for session encryption
- `GITHUB_ID`, `GITHUB_SECRET`
  - Purpose: OAuth credentials for GitHub authentication
- `GOOGLE_ID`, `GOOGLE_SECRET`
  - Purpose: OAuth credentials for Google authentication

> [Back to Table of Contents](#table-of-contents)

### GraphQL Set Up

#### Schema and Updates

The GraphQL schema can be found in the `bangsluke-backend-server` repo <https://github.com/bangsluke/bangsluke-backend-server>, located at `bangsluke-backend-server/graphql_utils/schema.graphql`.

On starting up the server in development mode, the back end types and resolvers are generated from the `schema.graphql` file, using the `npm run generate` command. This produces a file in the `bangsluke-backend-server` repo <https://github.com/bangsluke/bangsluke-backend-server>, located at `bangsluke-backend-server/graphql_utils/__generated__/backend-resolvers-types.ts` which is used to start the server. See the site <https://www.apollographql.com/docs/apollo-server/workflow/generate-types/> for more information.

On starting up the front end in development mode, the front end types are generated from the graphql server `localhost:4000/graphql`, using the `npm run generate` command. This produces several files in the `mytraveljournal` repo <https://github.com/bangsluke/mytraveljournal>, located at `mytraveljournal/graphql/__generated__/` which can then be used within the front end development.

Further to this, there are some additional front end queries that are stored in the `mytraveljournal` repo <https://github.com/bangsluke/mytraveljournal>, located at `mytraveljournal/graphql/queries.graphql`. These are manually updated as needed and used to make queries in the front end on front end start up.

This keeps the front end up to date with the back end and fully typed.

#### How to extend the Schema and queries

- To extend the schema, update the file `schema.graphql` in the `bangsluke-backend-server` repo, found at `bangsluke-backend-server/graphql_utils/schema.graphql`. 
- To extend the queries, test out making queries by running the server in development mode and going to `http://localhost:5000/graphql` (or your deployed backend URL) to use the built-in GraphQL playground. Then manually update the file `queries.graphql` in the `mytraveljournal` repo, found at `mytraveljournal/graphql/queries.graphql`.
- The frontend and backend type generation process remains the same: run the codegen scripts to update TypeScript types after changing the schema or queries.

### Node.js Apollo Server Implementation

- The backend was a Node.js server using Apollo Server and the `@neo4j/graphql` library, which allowed you to define the schema with Neo4j-specific directives (like `@relationship`) and auto-generated resolvers for most relationships.
- CORS and authentication were handled in Node.js, and the server was started via `server.js`.
- The schema and resolvers were tightly coupled to the Neo4j GraphQL library, and extending the schema often required only updating the GraphQL schema file.

### Neo4j Aura Set Up

#### Keeping the Neo4j Aura database running

See the `neo4j-aura-db-cloud-functions` folder in the <https://github.com/bangsluke/bangsluke-backend-server> repo which holds a `README` and the Python file for the Google Cloud Function set up. 

> [Back to Table of Contents](#table-of-contents)

## Debugging Steps

If the production site is not running correctly at `https://bangsluke-mytraveljournal.netlify.app/`, follow the steps below;

- Check that the production Neo4j Aura Database is running at `https://console-preview.neo4j.io/projects/7a5b41a0-6373-5c3c-9fcf-48b80d5d38f2/instances`
- Check that the production Neo4j Aura Database is populated with data at `https://console-preview.neo4j.io/tools/query`, using the command `MATCH (n)-[r]->(m) RETURN n, r, m;`
- Ensure that the following .env values are all correct and aligned:
  - `.env.production` in the frontend repo <https://github.com/bangsluke/mytraveljournal>
  - `.env.production` in the backend repo <https://github.com/bangsluke/bangsluke-backend-server>
  - The Environment variables in Netlify at `https://app.netlify.com/projects/bangsluke-mytraveljournal/configuration/env#content`
  - The Config Vars in the Heroku app at `https://dashboard.heroku.com/apps/bangsluke-backend-server/settings`
- Run the production site `https://bangsluke-mytraveljournal.netlify.app/` and view the developer console for warnings
- Check that the CORS allowed URLs in the `.env` file in the backend includes the frontend and backend URLs 
- Login to Heroku CLI from the backend folder (`heroku login`) and check the logs using `heroku logs --tail`
  - Run the output through AI if required to clarify the problem
- If running the app in production mode is working locally (`npm run start` in the backend and `yarn start` in the frontend), try pushing a new update to the main branch via the Heroku commands
- Otherwise, continue to try and identify the issue and add more details to this note as you go

> [Back to Table of Contents](#table-of-contents)