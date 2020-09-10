const path = require('path');
module.exports = {
    make_targets: {
        win32: [
            "squirrel"
        ],
        darwin: [
            "zip"
        ],
        linux: [
            "deb",
            "zip"
        ]
    },
    electronPackagerConfig: {
        icon: path.join(__dirname, "design/logo/app-icon.png"),
        packageManager: "yarn",
        asar: true,
        ignore: [
            ".git(ignore|modules)",
            "(webapp)\/(?!dist)\\S+",
            "license",
            "nodemon.config.json", 
            "README.md", 
            "setup.js"
        ]
    },
    electronWinstallerConfig: {
        name: "schoolsyst-desktop",
        iconUrl: "https://raw.githubusercontent.com/schoolsyst/design/master/logo/app-icon.ico",
        setupIcon: path.join(__dirname, "design/logo/app-icon.ico"),
        loadingGif: path.join(__dirname, "design/logo-animations/loading-overlay.gif")
    },
    electronInstallerDebian: {},
    electronInstallerRedhat: {},
    github_repository: {
        owner: "schoolsyst",
        name: "desktop"
    },
    windowsStoreConfig: {
        packageName: "com.schoolsyst.desktop",
        name: "schoolsyst-desktop"
    },
    publishers: [
        {
          name: '@electron-forge/publisher-github',
          platforms: ['win32', 'linux'],
          config: {
            owner: 'schoolsyst',
            name: 'desktop'
          }
        }
    ]
}
