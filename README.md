# README
This is a [Next.js](https://nextjs.org/) project bootstrapped with the following:
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
[`Typescript`](https://nextjs.org/docs/basic-features/typescript)
[`PWA`](https://github.com/shadowwalker/next-pwa)
[`Tailwind css`](https://github.com/tailwindlabs/tailwindcss)
[`Material UI`](https://mui.com)
[`create-strapi-app`](https://github.com/strapi/strapi)
[`google-analytics`](https://analytics.google.com/analytics/web/)

## Getting Started
First, change directory to front and run the development server:
### front
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
Follow the README inside the folder for further information.
Paths have been preset on `tsconfig.json` and `jsconfig.json` to make accessing folders easier. examples of usage can be seen in the prebuilt pages.

#### Troubleshooting
##### `ER_NOT_SUPPORTED_AUTH_MODE`

### api
Please note the database is set to use MySQL as this is the recommended database to use with Strapi.
Duplicate the provided env in the `.env.example` and rename to `.env`, set the env variables provided to suit your requirements and run the following command when ready:
```bash
npm run devevelop
# or
yarn develop
```
Open [http://localhost:1337](http://localhost:1337) with your browser to see the result.
Follow the README inside the folder for further information.

#### Troubleshooting
##### `ER_NOT_SUPPORTED_AUTH_MODE`
if you use MySql Version 8 you must reconfigure to authentication method to legacy, refere to the following link (https://github.com/strapi/community-content/issues/101)
##### `ER_BAD_DB_ERROR`
Ensure the schema defined in the `.env` is valid, else create a new schema
```bash 
CREATE SCHEMA `db_name`;
```
