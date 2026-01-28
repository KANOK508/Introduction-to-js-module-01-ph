const friends = ['balam', 'kalam', 'salam', 'gelam', 'pailam'];

// check  array_name.includes('value') ---- check if a value inside it or not.... 
console.log(friends.includes('gelam'))
console.log(friends.includes('khailam'))

if(friends.includes('salam')){
    console.log('party')
}
else {
    console.log('no food. we are fasting')
}