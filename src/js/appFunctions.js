const { ipcRenderer } = require ('electron');
const ipc = ipcRenderer;


closeBtn.addEventListener('click', () => {
    ipc.send('closeApp')
})

minimizeBtn.addEventListener('click', () => {
    ipc.send('minimizeApp')
})


maxResBtn.addEventListener('click', () => {
    ipc.send('maxResApp')
})

reloadBtn.addEventListener('click', () => {
    ipc.send('reloadBtn')
})

