//console.log('js connected')

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []

// like an axios call or http request (just built into the browser)
fetch(endpoint).then(blob => {
    //console.log(blob)
    blob.json().then(rawData => {
        //console.log(rawData)
        cities.push(...rawData)
    })
})

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // g is global and i is insensitive
        const regex = new Regexp(wordToMatch, 'gi')
        return place.city.match(regex) || place.state.match(regex)
    })
}





