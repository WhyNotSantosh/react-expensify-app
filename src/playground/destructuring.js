
//Object destructuring
const person = {
    name: 'Santosh',
    location: {
        city: 'Hyderabad'
    }
};

const { name, location } = person;
const { city, country: cn = 'IN' } = person.location;
console.log(`${name} ${city} ${cn}`);


//Array destructuring

const address = ['Meerpet', 'Hyderabad', 'Telangana', '500079'];

const [colony, , state, zip, country = 'IN'] = address;
console.log(`${colony} ${city} ${state} ${zip} ${country}`);