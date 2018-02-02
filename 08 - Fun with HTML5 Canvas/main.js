console.log('hi, js is connected')

const canvas = document.querySelector('#draw')

const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.strokeStyle = '#BADA55'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 30

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
        // start from
        ctx.moveTo(lastX, lastY)
        // go to
        ctx.lineTo(evt.offsetX, evt.offsetY)
        ctx.stroke()
        lastX = evt.offsetX
        lastY = evt.offsetY
        // an ES6 trick to set both variables in one line (called array destructuring)
        // [lastX, lastY] = [evt.offsetX, evt.offsetY]
    }
}

canvas.addEventListener('mousemove', draw)

canvas.addEventListener('mousedown', (evt) => {
    isDrawing = true
    // update x and y before we do a mouse move
    lastX = evt.offsetX
    lastY = evt.offsetY
    //[lastX, lastY] = [evt.offsetX, evt.offsetY] ... interesting, wasnt working in browser
})

canvas.addEventListener('mouseup', () => {
    isDrawing = false
})

canvas.addEventListener('mouseout', () => {
    isDrawing = false
})



