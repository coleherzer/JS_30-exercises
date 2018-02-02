console.log('hi, js is connected')

const canvas = document.querySelector('#draw')

const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.strokeStyle = '#BADA55'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'

let isDrawing = false

let lastX = 0
let lastY = 0

function draw (evt) {
    if (!isDrawing) {
        return 
        // will stop the function when they are not clicking down
    } else {
        console.log(evt)
        ctx.beginPath()
        ctx.moveTo(lastX, lastY)
        ctx.lineTo(evt.offsetX, evt.offsetY)
        ctx.stroke()
    }
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', () => {
    isDrawing = true
})
canvas.addEventListener('mouseup', () => {
    isDrawing = false
})
canvas.addEventListener('mouseout', () => {
    isDrawing = false
})



