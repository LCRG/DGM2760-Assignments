document.querySelector('header > h1').innerText = "Inspector Clouseau"
document.querySelector('header > h2').innerText = "'This IZ Chief Inspector Clouseau speaking on the pheaun'"

function reDisplay() {

    let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`
    let offset = `Window offset is ${window.screenX} from the left edge and ${window.screenY} pixels from the top of the display.`
    let url = `The URL for this page is ${window.location}`

    document.querySelector('#myWindow').innerText = `${windowSizes} \n ${offset} \n ${url}`

    let docTitle = `Document title is ${document.title}`
    let modified = `This document was last updated on ${document.lastModified}`

    document.querySelector('#myDocument').innerText = `${docTitle} \n ${modified}`
}
reDisplay()