// let str = "Hello World"

// function myFunction(){
//     let res = str.slice(0,5).toUpperCase()
//     return res
// }

// function Farukh(){
//     let res = str.slice(0,5).toLowerCase()
//     return res
// }

// console.log(Farukh())
// console.log(myFunction())


// function myFunction(){
//     let a = 'Admin'
//     if (a.toLowerCase() === 'admin'){
//         return 'Welcome admin'
//     } else {
//         return 'Welcome user'
//     }
// }

// console.log(myFunction());

// function myFunction(){
//     let a = 'Farukh'
//     if (a.toLowerCase() === 'admin'){
//         return 'Welcome admin'
//     } else {
//         return `Welcome ${a}`
//     }
// }

// console.log(myFunction());

function myFunction(name){
    if (name.toLowerCase() === 'admin'){
        return 'Welcome admin'
    } else {
        return `Welcome ${name}`
    }
}

console.log(myFunction('Farukh'));