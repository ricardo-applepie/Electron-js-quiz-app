const { app, BrowserWindow, Menu } = require('electron');
const path = require('path')

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
    const mainMenu = Menu.buildFromTemplate(mainMenutemplate);
    Menu.setApplicationMenu(mainMenu)
})
// handle creatAddWindow
const createAddWindow =()=>{
    const shoplistwin = new BrowserWindow({
        width: 200,
        height: 200
    })

    shoplistwin.loadFile('shoppingList.html')
}


// creat menu template 
const mainMenutemplate = [
    {
      label:'File',
      submenu:[
          {
              label:'Add Item',
              click(){
                  createAddWindow()
              }
          },
          {
              label: 'clear Items'
          },
          {
              label: 'Quit',
              click(){
                  app.quit()
              }
          }
      ]
    }
]


if(process.env.NODE_ENV !== 'production') {
    mainMenutemplate.push({
        label:'Developer tools',
        submenu:[
            {
                label:'Toggle  Devtools',
                click(item,focusedWindow){
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role:'reload'
            }
        ]
    })
}