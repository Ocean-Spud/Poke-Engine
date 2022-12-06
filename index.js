const { app, BrowserWindow } = require('electron')
const fs = require("fs");
const path = require("path");

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      frame: false,
      backgroundColor: '#1e2030',
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: true,
        devTools: true,
        preload: path.join(__dirname, 'preload.js')
      }
    })
  
    win.loadFile('index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

