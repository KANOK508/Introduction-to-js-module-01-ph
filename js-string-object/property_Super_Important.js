const person = {
    name: 'sodor uddin', 
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban', 'saintmartin', 'kuakata'],                //  that key have a space so,, that is not work USING DOT NATATON....
    'favplayer' : [`akib`, `rakib`,`sobuz`],
    favplayer1 : [`ami` ,`sadin` ,`ratul`]
}
// When we Caeate keys all keys are ----like sting ---if the key have only 1 word-- No need to use ' ' , " " OR ` ` ..... 
// bUT IF have multiple word-- have to use [] for access or   update this keys value...

const newProfession = 'profession'       // newProfession is a temporary variable now........
person[newProfession]= 'DevOps'
console.log(person.newProfession)
console.log(person.profession)
// console.log(person[profession])         //  that is not work --- have to use '' or " " or ` ` ,, 
console.log(person[`profession`])

console.log(`------------------------------`)
person[`profession`]='ai engineer'
console.log(person.profession)
console.log (person[`profession`])
// console.log (person[profession])-------------------------  that is not work --- have to use '' or " " or ` ` ,, 
console.log(`------------------------------`)

// console.log(person)

// dot notation
// dot symbol diye object er property er value access kora
// console.log(person.profession)
const income = person.salary;
// console.log(income)

// bracket Notation 
// third bracket diye access kora
console.log(person['age'])
const boyos = person['age']
console.log(boyos)

// error
// console.log(person.'fav places')     //   ------------That not work or valid...
console.log(person['fav places'])
console.log(person.favplayer)
console.log(person.favplayer1)

const keyName = 'profession';
console.log(person[keyName])

//-----------------------------------------------
/* Asscess any class property---value --using [] is more safer...EVen Dot is not work always...

ex: if The KEY is a sting or the sting have - or space or anyting like, NOt a single word...  That time Dot not work ,, 
       
*/