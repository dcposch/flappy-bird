
const bird = document.querySelector('#bird')

let y = 50

function frame () {
    console.log('Hello world!')

    bird.style.position = 'absolute'
    bird.style.top = y + 'px'

    y += 2

    window.requestAnimationFrame(frame)
}

frame()