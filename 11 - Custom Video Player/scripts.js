// Get our elements
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')

const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')


// Build our functions
function togglePlay() {
    //video.paused is a built in property of the video element
    if(video.paused) {
        video.play()
    } else {
        video.pause()
    }
}

function updateButton() {
    console.log('updated the button')
}

// Hook up event listeners
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)

toggle.addEventListener('click', togglePlay)



