// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const { setupTitlebar, attachTitlebarToWindow } = require('custom-electron-titlebar/main');

// setup the titlebar main process
setupTitlebar();

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 768,
    titleBarStyle: 'hidden',
    frame: true, // needed if process.versions.electron < 14
    webPreferences: {
  nodeIntegration: true,
  contextIsolation: false,
 
      preload: path.join(__dirname, 'preload.js')
    }
  });

  const menu = Menu.buildFromTemplate(exampleMenuTemplate());
  Menu.setApplicationMenu(menu);

  // and load the index.html of the app.
  mainWindow.loadFile('bin_bin/index.html');

  // Open the DevTools.
 //mainWindow.webContents.openDevTools()

  //attach fullscreen(f11 and not 'maximized') && focus listeners
  attachTitlebarToWindow(mainWindow);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
})

const exampleMenuTemplate = () => [
  {
    label: "Model O&ptions",
    submenu: [
      {
        label: "Quit",
        click: () => app.quit()
      },
      {
        label: "Normal mode",
        type: "radio",
        checked: true
      },
      {
        label: "Level speed mode",
        type: "radio",
      }
    
       
    ]
  },
  {
    label: "A&dvanced Options",
    submenu: [
    
      {
        label: "Auto saved",
        type: "radio",
        checked: true
      },
      {
        label: "manually",
        type: "radio",
      },
      {
        label: "Auto updates",
        type: "checkbox",
        checked: true,
        click: (item) => {
          console.log("item is checked? " + item.checked);
        }
      },
      { type: "separator" },
      {
        label: "offline",
        type: "checkbox",
        checked: false,
        click: (item) => {
          console.log("item is checked? " + item.checked);
        }
      },
    
      {
        label: "zoomIn",
        role: "zoomIn"
      },
      {
        label: "zoomOut",
        role: "zoomOut"
      }
    ]
  },
  {
    label: "&Other",
    submenu: [
      { role: "reload" },
 
      
    ],
  }
];
