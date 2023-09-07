# Subscriptions Pocket

A simple web application for managing the user's subscriptions.

## Purpose

To practice the Next.js framework and and learn the newest features of the latest version 13.

## Features

Soon...

## Demo

The live demo is available at [https://subscriptions-pocket.vercel.app](https://subscriptions-pocket.vercel.app).

## Screenshot

Soon...

## Used technologies

- 🎁 **Repository:** standard Git repository
- 🌈 **Framework:** next.js 13.4
- 🛠️ **Tools:** prisma orm, docker and docker-compose,
- 🎨 **Styling:** tailwind, tailwind class sorter,
- 💎 **Others:** soon...

## Database

This project uses a PostgreSQL database and Prisma ORM. The database schema is available in the `prisma/schema.prisma` file. The directory `prisma/migrations` contains the database migrations.

The suggested way to run the database is to use Docker. The `docker-compose.yml` file contains the configuration for the database and the adminer tool. To run and init the database, type and run:

1. `docker-compose up -d` in the root directory to start the database and adminer.
2. `npx prisma migrate dev --name init` in the root directory to init the database.
3. `npx prisma studio` in the root directory to see the database in the browser-based GUI tool.

## How to run

1. Install [Node.js](https://nodejs.org/en/download/).
2. Clone the repository.
3. Create a `.env` file in the root directory and add the following variables:

```bash
DATABASE_URL="postgresql://POSTGRES_USER:POSTGRES_PASSWORD@localhost:5432/POSTGRES_DB?schema=public"
```

Replace the database name `POSTGRES_DB` as well `POSTGRES_USER` and `POSTGRES_PASSWORD` with your database credentials or use the default ones from the `docker-compose.yml` file.

4. Type and run: `npm i` in the root directory.
5. Type and run: `npm run dev` in the root directory.
6. Open `http://localhost:3300` in your browser to see the app.
