# desktop
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

```bash
yarn # Using yarn, or
npm install # Using npm, or
pnpm install # Using pnpm, very recomanded one
```

4. Complete the interactive setup launched by installation

5. Start the app
```bash
yarn start # Using yarn, or
npm run start # Using npm, or
pnpm start # Using pnpm, very recomanded one
```

This will compile the webapp and launch the desktop app.
