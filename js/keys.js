function checkKeys() {
    //37 - a
    //65 - flecha izquierda
    //39 - d
    //68 - flecha derecha
    //82 - r
    if (keys[37] || keys[65]) {
        doodle.moveLeft()
    }
    if (keys[39] || keys[68]) {
        doodle.moveRight()
    }
    if (keys[82]) {
        restart()
    }
}

document.addEventListener("keydown", event => {
    keys[event.keyCode] = true

})

document.addEventListener("keyup", event => {
    keys[event.keyCode] = false
})