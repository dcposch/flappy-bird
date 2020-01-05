
const bird = document.querySelector('#bird')
const pipeT = document.querySelector('#pipe-top')
const pipeB = document.querySelector('#pipe-bottom')

let y = 50
let vy = 0

const pipew = 50
let pipex = 500
let pipey1 = 100
let pipey2 = 300

function frame () {

    // move the bird
    bird.style.position = 'absolute'
    bird.style.top = y + 'px'

    y += vy
    vy += 0.2

    // move the pipes

    pipeT.style.position = 'absolute'
    pipeT.style.left = pipex + 'px'
    pipeT.style.width =  pipew + 'px'
    pipeT.style.top = '0'
    pipeT.style.height = pipey1 + 'px'
    pipeT.style.backgroundColor = 'green'

    pipeB.style.position = 'absolute'
    pipeB.style.left = pipex + 'px'
    pipeB.style.width =  pipew + 'px'
    pipeB.style.top = pipey2 + 'px'
    pipeB.style.bottom = '0'
    pipeB.style.backgroundColor = 'green'

    pipex -= 2

    // if the pipex is less than -pipew
    // then reset the pipe

    // if the bird ran into the pipe
    // return (do not call reqAF)

    window.requestAnimationFrame(frame)
}

function flap (e) {
    console.log('Key pressed: ' + e.key)
    if (e.key === ' ') {
        vy = -8
    }
}

document.addEventListener('keydown', flap)

frame()