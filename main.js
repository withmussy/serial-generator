const {app, BrowserWindow} = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 270,
    height: 200,
    transparent: true,
    frame:false,
    resizable:false
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
