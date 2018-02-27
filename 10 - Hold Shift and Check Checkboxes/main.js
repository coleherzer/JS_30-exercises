console.log('js loaded')

const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]')

console.log(checkBoxes)

let lastChecked;

function handleCheck (evt) {
    console.log(evt)
}

checkBoxes.forEach((box) => {
    box.addEventListener('click', handleCheck)
})

