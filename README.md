# MyTravelJournal

## Table of Contents

- [Set Up](#set-up)
  - [Markdown Set Up](#markdown-set-up)
  - [Python Set Up](#python-set-up)
  - [Properties Set Up](#properties-set-up)
  - [Netlify Set Up](#netlify-set-up)
  - [Next.js Start Up](#nextjs-start-up)
- [Getting Started](#getting-started)
  - [Quick Start](#quick-start)
    - [Development Start](#development-start)
    - [Production Start](#production-start)

## Set Up

### Markdown Set Up

The page is built off of data from markdown files created in Obsidian. Obsidian is not needed, as any markdown editor/creator will work, however it is the one I use and recommend.

#### Note Set Up

At the start of each note, I have some "front matter" - the name used in Obsidian, added via the properties functionality. This allows me to add tags and linked notes in the data at the start of the page that keeps links within Obsidian and also allows me to read the data into Python in a structured way.

##### Example of required "Front Matter" Structure

```JS
- tags: #holiday
- attendees: [[Luke]], [[Bryony]]
- coverPhoto: TBC
- photoAlbum: 2023 06 - Dublin
- whatsAppGroup: TBC
- locations: [[Dublin]], [[Howth]]
- departingAirport: TBC
```

> Note: If more than one location is added, the script will use the first location.

#### Cover Photo Set Up

To add a cover photo to any holiday note, the field accepts a url link to the image.

The easiest way to do this is to use Imgur (<https://imgur.com>) and upload the images you wish to use and then right click on the image and select "Copy image URL". If you paste this copied url into the field, you can use Obsidian to view the image as well as making it available for use on the Travel Site.

### Python Set Up

To install all of the required dependencies, run:

```bash
pip install json os markdown2 obsidiantools neomodel geopy
```

### Properties Set Up

To set up the properties, navigate to the `python` directory and open the `properties.properties` file. Set the values to work with your project using the examples below;

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

### Netlify Set Up

- Added Heroku backend URL as an environment variable on Netlify.

### Next.js Start Up

Created using: `npx create-next-app@latest --ts mytraveljournal`

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Quick start

<!-- TODO: Update when known -->

#### Development Start

To quickly get started in development mode, do the following steps:

1. Start up Neo4j desktop
2. Start the Neo4j graph database (on Neo4j desktop)
3. If not already in the correct directory, navigate to the backend directory, the `server-mytraveljournal` repo <https://github.com/bangsluke/server-mytraveljournal> using `cd server-mytraveljournal`
4. Start the backend by running: `npm run dev` in a terminal
5. Navigate to the `mytraveljournal` repo <https://github.com/bangsluke/mytraveljournal> using `cd ../mytraveljournal`
6. In a second terminal, start the frontend by running: `yarn dev`
7. Open [http://localhost:3000](http://localhost:3000) and the frontend should be up and running with a data connection to the backend

#### Production Start

To quickly get started in production mode, do the following steps:

1. Check that the backend Apollo Server <https://github.com/bangsluke/server-mytraveljournal> is running correctly
2. Alternatively navigate to the backend directory, the `server-mytraveljournal` repo <https://github.com/bangsluke/server-mytraveljournal> using `cd server-mytraveljournal` and start the backend by running: `npm run start` in a terminal
3. In a terminal, start the frontend by running: `yarn start`
4. Open [http://localhost:3000](http://localhost:3000)
