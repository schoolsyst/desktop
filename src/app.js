const { app, BrowserWindow, nativeImage, autoUpdater, dialog } = require('electron');
const { createMainWindow } = require('./electron/window')
const { createTray } = require("./electron/tray");
const server = require('./express/server');
const path = require('path');

if(require('electron-squirrel-startup')) app.quit(); // if we need of squirel

/***************
** AutoUpdate **
****************/
if (process.env.NODE_ENV != "dev") {
	const updateServer = 'http://desktop.schoolsyst.com';
	const url = `${updateServer}/update/${process.platform}/${app.getVersion()}`;

	autoUpdater.setFeedURL({ url });
	setInterval(() => {autoUpdater.checkForUpdates()}, 60000);

	autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
		const dialogOpts = {
		type: 'info',
		buttons: ['Restart', 'Later'],
		title: 'Application Update',
		message: process.platform === 'win32' ? releaseNotes : releaseName,
		detail: `A new version has been downloaded. Redémarrez l'application pour appliquer les mises à jour.`
		}
	
		dialog.showMessageBox(dialogOpts).then((returnValue) => {
		if (returnValue.response === 0) autoUpdater.quitAndInstall();
		});
	});

	autoUpdater.on('error', message => {
		console.error('There was a problem updating the application');
		console.error(message);
	});
}

/************
** Express **
*************/
server.start(path.normalize(`${__dirname}/../webapp/dist`), process.env.PORT ? process.env.PORT : 8080);
const _URL_ = `http://localhost:${process.env.PORT ? process.env.PORT : 8080}`;
const icon = nativeImage.createFromPath(path.join(__dirname, '../design/logo/app-icon.png')).resize({height: 500,width:500});

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
