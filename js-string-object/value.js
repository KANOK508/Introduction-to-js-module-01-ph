const person = {
    name: 'sodor uddin', 
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban', 'saintmartin', 'kuakata']
}

person.salary = 30000;
person['age'] = 26;
person['fav places'] = ['maldives', 'bali', 'pataya']

const propName = 'profession';
person[propName] = 'devops'     //  when we want to get Value ---using Temporary variable ---don't need to use ' ' , " " , ` ` 
console.log(person)