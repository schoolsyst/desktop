const { app, protocol, BrowserWindow } = require('electron');
const path = require('path');
const server = require('./src/server');

server.start(path.normalize(`${__dirname}/webapp/dist`), process.env.PORT ? process.env.PORT : 8080);
const _URL_ = `http://localhost:${process.env.PORT ? process.env.PORT : 8080}`

/*
 ** Electron
 */
let win = null
const newWin = () => {
	win = new BrowserWindow({
		icon: path.join(__dirname, 'build/logo_schoolsyst.ico')
	})
	win.maximize()
	win.on('closed', () => win = null)
	return win.loadURL(_URL_)
}

app.on('window-all-closed', () => {
	server.stop(); app.quit(); 
});
app.on('activate', () => win === null && newWin())
app.on('ready', newWin)
