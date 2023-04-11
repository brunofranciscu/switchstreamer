const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    minWidth: 1280,
    minHeight: 720,
    fullscreenable: true,
    icon: "switch.ico",
    autoHideMenuBar: true,
    titleBarStyle: 'hidden',
    titleBarOverlay: true,
  });
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  app.quit()
})
