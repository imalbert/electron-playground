const electron = require('electron')
const {
  app,
  BrowserWindow
  // crashReporter
} = electron

// crashReporter.start({
//   productName: 'electron-gws',
//   companyName: 'GWS',
//   submitURL: 'put url here',
//   autoSubmit: true
// })

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit()
  }
})

app.on('ready', () => {
  let win = new BrowserWindow({ width: 750, height: 600 })

  win.loadURL(`file://${__dirname}/index.html`)

  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
})

