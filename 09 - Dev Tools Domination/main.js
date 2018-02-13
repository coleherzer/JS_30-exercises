console.log('js loaded')

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// in the inspector, can right click on the element and selecting break on, and then selecting attribute
// modification to bring up a debugger to see exactly what's happening

// Regular
console.log('hello')

// Interpolated
// after the comma is what will be input in the %s position
console.log('hello, this is a %s string', 'YOOOOOO')
// ES6 back ticks used more often now

// Styled
console.log('%c I am some large text', 'font-size: 50px; background: blue')

// warning!
console.warn('OH NO, warning!!')
// displays the text as a console warning

// Error :|
console.error('THERES AN ERROR')
//shows text as a red error in console

// Info
console.info('Leopards can carry 2x their body weight into a tree')
// just displays the text with a blue I icon next to it
// didnt work?

// Testing
const p = document.querySelector('p')

console.assert(p.classList.contains('ouch'), 'Incorrect class')
// console.assert(1 === 2, 'Incorrect')

// clearing
console.clear()
//clears the console

// Viewing DOM Elements
console.log(p)
// gives you the element

console.dir(p)
// gives you the element as a dropdown so you can see all the attributes and all that

// Grouping together
dogs.forEach((dog) => {
    console.group(`${dog.name}`)
    // can use groupCollapsed above so they display as a drop down on one line to start
    console.log(`this is ${dog.name}`)
    console.log(`this dog is ${dog.age} years old`)
    console.log(`this dog is ${dog.age * 7} years old in dog years`)
    console.groupEnd(`${dog.name}`)
})
// groups each loop of console logs together to see easily

// counting
// counts however many times you use a specific word, var, object, DOM node, etc
console.count('Cole')
console.count(`${dogs}`)

// timing
// to see how long something takes

console.time('fetching data...')

fetch('https://api.github.com/users/coleherzer')
    .then((data) => {
        data.json()
    }).then((data) => {
        console.timeEnd('fetching data...')
        console.log(data)
    })


console.table(dogs)