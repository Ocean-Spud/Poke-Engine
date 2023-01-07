const { app, BrowserWindow } = require('electron')
const path = require('path');
const { delay } = require('rxjs');

let mainWindow;
let splash;

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

app.on('ready', () => {
  // Create the browser window.
    mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      frame: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      },
      show: false,
    }),

    splash = new BrowserWindow({width: 810, height: 610, transparent: true, frame: false, alwaysOnTop: true}),
    splash.loadURL(`file://${__dirname}/splash.html`),
    mainWindow.loadURL(`file://${__dirname}/dist/angular-electron/index.html`),

    mainWindow.webContents.openDevTools(),

    mainWindow.on('closed', () => {
      mainWindow = null
      }),

      mainWindow.once('ready-to-show', () => {
        sleep(2000)
        splash.destroy(),
        mainWindow.show()
      })
    },

  app.on('windows-all-closed', () => {
      if (process.platform !== 'darwin') {
          app.quit
      }
}))
