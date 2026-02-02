const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    isNew: true
}

// for of : array
// for in : object

for(const prop in mobile){
    console.log(`object is :` , prop)
    console.log( `value is: ` , mobile[prop])
}
// for-in loop gives alll the Properties or Keys here...........
console.log(`--------------------------------------------another way------------`)

const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){
    console.log(key, ':', mobile[key]);

    // key = the first value of keys array
    //  mobile [ky]  -- is the second value o the that key.. 
    
    
}