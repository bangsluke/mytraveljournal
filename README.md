# MyTravelJournal

## TOC

- [Set Up](#set-up)
  - [Python Set Up](#python-set-up)
  - [Properties Set Up](#properties-set-up)
- [Getting Started](#getting-started)
  - [Next.js Start Up](#next-start-up)
  - [Node.js Start Up (Apollo Server)](#node-start-up)
  - [Python Start Up](#python-start-up)

## Set Up

### Python Set Up

To install all of the required dependencies, run:

```bash
pip install json os markdown2 obsidiantools neomodel
```

### Properties Set Up

To set up the properties, navigate to the `backend` directory and open the `properties.properties` file. Set the values to work with your project using the examples below;

```bash
[NEO4J]
N4J.ConnType = bolt:// # The connection type
N4J.URL = localhost:7687 # The URL
N4J.USER = neo4j # The username used to connect
N4J.PW = example # The password used to connect
N4J.DB = neo4j # The database name
[DATA]
DATA.RelativePath = testdata # A relative path to the .md data files
DATA.FullPath = C:\Users\lbangs\iCloudDrive\iCloud~md~obsidian\Personal Notes # The full path to the .md data files
```

> Note: If a full path is not specified, the relative path will be used.

## Getting Started

### Next Start Up

Created using: `npx create-next-app@latest --ts mytraveljournal`

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Node Start Up

Notes to start up the Apollo Server

Navigate to the `backend\graphql` directory and use the command:

`node index.js`

The apollo server will be running on `http://localhost:4000`. Go to `https://studio.apollographql.com/sandbox/` and connect to the 4000 port to test the apollo server.

### Python Start Up

#### Python API

To start up the flask server, run:

```bash
cd backend
python app.py
```

The `app.py` file is located in the `backend` directory. The server will be running on `http://localhost:5000/api/data`.
