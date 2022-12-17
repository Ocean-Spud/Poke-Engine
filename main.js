const { app, BrowserWindow } = require('electron')
const path = require('path')

let mainWindow;

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadURL(`file://${__dirname}/dist/angular-electron/index.html`)

  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', () => {
    mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('windows-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit
    }
})

