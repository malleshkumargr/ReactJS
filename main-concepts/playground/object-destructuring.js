const person = {
    name: 'rakesh',
    city: 'bangalore',
    area: 'Market'
}

const {name: firstName, city, state, country = 'INDIA', area: location = 'basavanagudi'} = person
console.log(firstName, city, state, country, location)