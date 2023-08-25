# MyTravelJournal

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

### Next.js Start Up

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

### Python Start Up

#### Python API

To start up the flask server, run:

```bash
cd backend
python app.py
```

The `app.py` file is located in the `backend` directory. The server will be running on `http://localhost:5000/api/data`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
