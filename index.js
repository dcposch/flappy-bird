
const game = document.querySelector('#game')
const bird = document.querySelector('#bird')
const pipeT = document.querySelector('#pipe-top')
const pipeB = document.querySelector('#pipe-bottom')

const width = game.scrollWidth
const height = game.scrollHeight

let y = 50
let vy = 0

const pipew = 50
let pipex = 500
let pipey1 = 100
let pipey2 = 300
let vpipex = -3

function frame () {

    // move the bird
    bird.style.position = 'absolute'
    bird.style.top = y + 'px'

    y += vy
    vy += 0.2

    const birdyt = y + 34
    const birdyb = y + 50
    if (birdyt < 0 || birdyb > height) {
        return
    }

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

    pipex += vpipex

    // if the pipex is less than -pipew
    // then reset the pipe
    if (pipex < -pipew) {
        pipex = width
        pipey1 = Math.random() * (height - 200)
        pipey2 = Math.random() * (height - pipey1 - 100) + pipey1 + 100
        vpipex *= 1.1
    }

    // if the bird ran into the pipe
    // return (do not call reqAF)

    if (pipex < 30 && (birdyt < pipey1 || birdyb > pipey2)) {
        return
    }

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