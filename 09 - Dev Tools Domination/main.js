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
console.assert(1 === 2, 'Incorrect')

// clearing

// Viewing DOM Elements

// Grouping together

// counting

// timing
