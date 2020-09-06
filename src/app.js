const { app, BrowserWindow } = require('electron');
const { createMainWindow } = require('./electron/window')
const { createTray } = require("./electron/tray");
const server = require('./express/server');
const path = require('path');

if(require('electron-squirrel-startup')) app.quit(); // if we need of squirel

server.start(path.normalize(`${__dirname}/../webapp/dist`), process.env.PORT ? process.env.PORT : 8080);
const _URL_ = `http://localhost:${process.env.PORT ? process.env.PORT : 8080}`;
const icon = path.join(__dirname, '../build/logo_schoolsyst.ico')

/*************
** Electron **
**************/
var top = {};

app.whenReady().then(() => {
	top.window = createMainWindow(icon, _URL_);
	top.tray = createTray(icon, top.window);
});

app.on('activate', () => {
	BrowserWindow.getAllWindows().length === 0 ? createMainWindow() : null;
});

app.on("before-quit", ev => {
	// BrowserWindow "close" event spawn after quit operation,
	// it requires to clean up listeners for "close" event
	top.window.removeAllListeners("close");
	// release windows
	top = null;
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		server.stop();
		app.quit();
	}
});
