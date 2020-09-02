/*-----------------------------------------------------*\
| Tray function() -> create the app tray
| Return the tray, require the icon and the mainWindow
| To listen event like close
| TODO : SEE #3 add settings to do the action setuped in 
\*-----------------------------------------------------*/

const { Tray, Menu, app, nativeImage } = require("electron");

function createTray(icon, win) {
    let tray = new Tray(icon);
    const contextMenu = Menu.buildFromTemplate([
        { 
            label: 'schoolsyst',
            icon: nativeImage.createFromPath(icon).resize({
                height: 16,
                width: 16
            }),
            enabled: false
        },
        { type: 'separator' },
        {
            label: 'Show', click: function () {
                win.show();
            }
        },
        { type: 'separator' },
        {
            label: `Exit ${app.getName()}`,
            role: "quit"
        }
    ]);
    
    tray.on('click', function (event) {
        win.show();
    });
    tray.setToolTip('schoolsyst - Desktop');
    tray.setContextMenu(contextMenu);
    return tray;
}

module.exports = { createTray }
