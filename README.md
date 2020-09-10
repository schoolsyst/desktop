<center><img alt="schoolsyst-desktop's logo" src="https://raw.githubusercontent.com/schoolsyst/design/master/logo/app-icon.png" width="25%"></center>

# schoolsyst-desktop
schoolsyst's desktop app

## How do I run this app locally ?

For now, schoolsyst runs on a tiny VPS, and the API is therefore limited to requests from `*.schoolsyst.com`. If you want to run this desktop app locally, you may want to also run the API, explained on [the repo's README](https://github.com/schoolsyst/backend/tree/master/README.md).

Here's how to install the desktop app:

1. Clone the repo and `cd` into it

```bash
git clone https://github.com/schoolsyst/desktop.git --recurse-submodules
cd desktop
```

2. Install NodeJS, version `13.5.0`.
_The installation procedure changes depending on your platform, head over to [NodeJS's website](https://nodejs.org/)_

3. Install the project's dependencies

⚠ pnpm didn't work, symlink are forbiden during compilation

```bash
yarn -D # Using yarn, or
npm install -D # Using npm
```

4. Complete the interactive setup for build the web app
```bash
yarn run setup # Using yarn, or
npm run setup # Using npm
```

5. Start the app
```bash
yarn start # Using yarn, or
npm run start # Using npm, or
```

6. Start the app in dev mode :
```bash
yarn start:watch # Using yarn, or
npm run start:watch # Using npm, or
```

7. Build the app :

The app will be builed for your currents OS :
```bash
yarn make # Using yarn, or
npm run make # Using npm, or
```
