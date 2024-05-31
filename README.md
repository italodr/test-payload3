# Payload 3.0 Beta Demo

This repo has been created using the [payload-3.0-demo](https://github.com/payloadcms/payload-3.0-demo?tab=readme-ov-file#using-this-repo)


### Using this repo

To try out this repo yourself, follow the steps below:

1. Clone the repo to your computer (`git clone git@github.com:italodr/test-payload3.git`)
2. `cd` into the new folder by running `cd ./test-payload3`
3. Install dependencies with whatever package manager you use (`yarn`, `npm install`, `pnpm i`, etc.)
4. Start your database. For local postgresql use `.\start-database.sh` to start it in docker container.
5. Fire it up (`yarn dev`, `npm run dev`, `pnpm dev`, etc.)
6. Visit https://localhost:3000/admin and log in with the user created within the config's `onInit` method
