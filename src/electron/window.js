/*--------------------------------------------------------------*\
| createMainWindow function() -> create the principal app window
| Return the window, require the icon and the url
| TODO : SEE #3 add settings to do the action setuped in 
\*-----------------------------------------------------*/

const { BrowserWindow } = require("electron");

function createMainWindow(icon, url) {
    let win = new BrowserWindow({
        icon: icon,
        autoHideMenuBar: true,
        center: true,
        thickFrame: true,
    });

    win.loadURL(url).then(() => console.log("URL loaded."));
    win.maximize();

    win.on('restore', function (event) {
        win.show();
        win.setSkipTaskbar(false);
        // tray.destroy();
    });
    

    win.on('close', function(event){
        event.preventDefault();
        win.setSkipTaskbar(true);
        win.hide();
    })

    return win
}

module.exports = { createMainWindow };
