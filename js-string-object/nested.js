const college = {
    name: 'vnc',
    class: ['11', '12'],
    events: ['science fair', 'bijoy dibos', '21 Feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    } 
}

console.log(college.unique.result.gpa)
console.log(college.unique.result[`gpa`])

console.log(college.unique.color)
console.log(`-------------------so we can use like --key or map or also can access using DOT.........--------------------------------`)
// we use dot---for go the our destinating key-----
college.unique.result.merit = 'top top top most'
console.log(college['unique'].result.merit)
console.log(college.unique.result.merit)
// the above 2 line are different 2 system for use Object and Properties........
console.log(`---------------------------`)

college.events[1] = '16 December'
// the eventes values are an array--- we can access those ---using indexing system also.---- we can update values......   so  [1] is index here....
console.log(college.events[1])
delete college.class;      // delete the class key with it's value 
console.log(college)
console.log(`----------------------`)
delete college.name
console.log(college)