const { app, BrowserWindow, Menu } = require('electron');

function crear() {
  const w = new BrowserWindow({
    width: 1280, height: 800, minWidth: 800, minHeight: 560,
    title: 'Espacio 3D', backgroundColor: '#0e1218',
    webPreferences: { contextIsolation: true, sandbox: true }
  });
  w.loadFile('index.html');
}

app.whenReady().then(() => {
  if (process.platform !== 'darwin') Menu.setApplicationMenu(null);
  crear();
  app.on('activate', () => { if (!BrowserWindow.getAllWindows().length) crear(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
