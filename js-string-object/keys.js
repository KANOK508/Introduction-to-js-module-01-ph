const computer = {
    brand: 'lenovo',
    price: 35000,
    processor: 'intel',
    hdd: '512gb', 
    monitor: 'hp'
}

const keysNames = Object.keys(computer);   //    that function Return --all the keys--as an array......
//           Object.keys(ObjectName or className)
console.log(keysNames)     // print the all keys as a ARRAY
console.log(keysNames.length)

console.log(`--------------------------`)

const keysValue = Object.values(computer)  //    that function Return --all the values--as an array......
//            Object.values(className or Object Names)
console.log(keysValue)
