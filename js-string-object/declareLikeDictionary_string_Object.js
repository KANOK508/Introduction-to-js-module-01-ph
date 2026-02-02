//  we can create an Object in 3 way

// WAys 1 --- general way--- like Dictionary or key value pair... 
const pen = { brand: "econo", price: 10, color: "black" };

// Ways 2 ----- using new keyword --- 
//  const objectName= new Object ( give the key:value pair here -- if we not give anything that create an empty object.... )
// create an empty object name pencil 
const pencil = new Object();  
console.log(pencil);
//  Create an object book with some -- initialized key: value pairs
const book = new Object ({name: "English Theraphy",Price : 400})
console.log(book)

// Ways 3 ----------using create ()    ---function .... 
//  const objectOrClassName = Object.create({  give the key: value pairs...    })
const rubber = Object.create({});
// when we use create --at we have to give { } ---for initialize with a  empty key: value pairs.......
console.log(rubber);

// using new

/* 
Each key value -pair called -----------Property */