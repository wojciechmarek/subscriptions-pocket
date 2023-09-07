# Subscriptions Pocket

A simple web application for managing the user's subscriptions.

## Purpose

To practice the Next.js framework and learn the newest features of the latest version - 13.4.

## Demo

The live demo is available at [https://subscriptions-pocket.vercel.app](https://subscriptions-pocket.vercel.app).

## Screenshot

Soon...

## Used technologies

- 🎁 **Repository:** standard Git repository
- 🌈 **Framework:** next.js 13.4
- 🛠️ **Tools:** prisma orm, svix
- 🎨 **Styling:** tailwind, tailwind class sorter
- 💎 **Others:** docker and docker-compose, clerk, vercel pipeline

## Database

This project uses a PostgreSQL database and Prisma ORM. The database schema is in the `prisma/schema.prisma` file. The directory `prisma/migrations` contains the database migrations.

The suggested way to run the database is to use Docker. The `docker-compose.yml` file contains the configuration for the database and the adminer tool. To run and init the database, type, and run:

1. `docker-compose up -d` in the root directory to start the database and adminer.
2. `npx prisma migrate dev --name init` in the root directory to init the database.
3. `npx prisma studio` in the root directory to see the database in the browser-based GUI tool.

If you run the PostgreSQL locally in the Docker - replace the database name (listed in the `How to run` section) `POSTGRES_DB` as well `POSTGRES_USER` and `POSTGRES_PASSWORD` with the database default ones from the `docker-compose.yml` file (line no. 1)

## Clerk

This project uses the [Clerk](https://clerk.com/) as an authentication provider. To set up the project locally, you must create your Clerk account, create a new project, and generate your secrets listed below in the `How to run` paragraph. Notice the Clear also has to invoke a webhook `/api/webhook/user` to notify the application about the user's events, so the webhook secret is also needed (lines no. 2 - 4)

## How to run

1. Install [Node.js](https://nodejs.org/en/download/).
2. Clone the repository.
3. Create a `.env` file in the root directory and add the following variables:

```bash
DATABASE_URL="postgresql://POSTGRES_USER:POSTGRES_PASSWORD@localhost:5432/POSTGRES_DB?schema=public"

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_YOUR_KEY
CLERK_SECRET_KEY=sk_test_YOUR_KEY
WEBHOOK_SECRET=whsec_YOUR_KEY

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

4. Type and run: `npm i` in the root directory.
5. Type and run: `npm run dev` in the root directory.
6. Open `http://localhost:3300` in your browser to see the app.
