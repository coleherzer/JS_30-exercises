console.log('js loaded')

const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]')

console.log(checkBoxes)

let lastChecked;

function handleCheck (evt) {
    console.log(evt)
    // need to check if they were holding down shift key
    // AND check if they are checking it (not unchecking the box)
    let inBetween = false
    if(evt.shiftKey && this.checked) {
        // loop over every single check box
        checkBoxes.forEach((box) => {
            console.log(box)
            if(box === this || box === lastChecked) {
                inBetween = !inBetween
            }
            if(inBetween) {
                box.checked = true
            }
        })

    }


    lastChecked = this
}

checkBoxes.forEach((box) => {
    box.addEventListener('click', handleCheck)
})

