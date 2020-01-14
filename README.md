<p align="center">
  <b style="font-size: 32px;">T²CR Dashboard</b>
</p>

Frontend to view statistics on the [T²CR and Badges](tokens.kleros.io).

## Get Started

1.  Clone this repo.
2.  Duplicate `.env.example`, rename it to `.env` and fill in the environment variables.
3.  Run `npm install` to install dependencies and then `npm start` to run the service in development mode.

To run in production run `npm run build` and serve the build folder.

### Tip

You can use `serve` and `pm2` to run in production:
1- `npm install -g serve pm2`
2- `pm2 serve build --name t2cr-dashboard`

## Other Scripts

- `npm run format` - Lint, fix and prettify all the project.
- `npm run cz` - Run commitizen.
- `npm run build` - Create a production build.