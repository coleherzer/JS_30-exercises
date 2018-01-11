// ## Array Cardio Day 2
console.log('js loaded')

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// .some checks if at least one thing in your array meets the criteria

// Array.prototype.some() // is at least one person 19 or older?
const isAdult = people.some((person) => {
    const currentYear = (new Date()).getFullYear()
    if (currentYear - person.year >= 19) {
        return true
    }
})

// another, simplier way to write it
// const isAdult = people.some((person) => {
//     const currentYear = (new Date()).getFullYear()
//     return currentYear - person.year >= 19
// })

console.log({isAdult})
// by surrounding it with curly brackets, it shows up as an object with a key that has a value of true, not just "true"
// returns true because the condition is met

// Array.prototype.every() // is everyone 19 or older?
const allAdults = people.every((person) => {
    const currentYear = (new Date()).getFullYear()
    return currentYear - person.year >= 19
})

console.log({allAdults})
// returns false because not all adults are over 19

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const matchedId = comments.find((comment) => {
    const searchId = 823423
    return comment.id === searchId
})

console.log({matchedId})

// Array.prototype.findIndex()
// Find the comment with this ID

const index = comments.findIndex((comment) => {
    const specialId = 2039842
    return comment.id === specialId
})

console.log({index})

// delete the comment with the ID of 823423

// one way
// comments.splice(index, 1)
// // start at the index from above and splice out just one
      
// console.table(comments)

// another way (popular in the redux world)
const newComments = [
    ...comments.slice(0, index),
    ...comments.slice(index +1)
]
// have to use the spread operator so it doesnt come up as an array of objects
// revisit the slice method (builds a new array)

console.table(newComments)