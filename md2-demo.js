let hamburgerBackpack =[]

hamburgerBackpack.push("Bagel Sandwich")
hamburgerBackpack.push("Row Boat")
hamburgerBackpack.push("Mr. Gassy")

hamburgerBackpack.splice(1, 1)

let coat = "Pink Bomberjacket"
hamburgerBackpack.push(coat)

hamburgerBackpack.pop()

hamburgerBackpack.push("Extra shoes", "Juice Boxes", "First Aid Kit", "Camera", "Garnet's cat")

//console.log("hamburgerBackpack befor splice", hamburgerBackpack)
let hotdogDufflebag = hamburgerBackpack.splice(2 ,3)


let itemCount = hamburgerBackpack.length
console.log(itemCount)
// console.log("hamburgerBackpack after splice", hamburgerBackpack)

// console.log(hamburgerBackpack[0])

// for(let i = 0; i < hamburgerBackpack.length; i++) {
//     console.log(hamburgerBackpack[i])
// }

// for(let i = 0; i < hotdogDufflebag.length; i++) {
//     console.log(hotdogDufflebag[i])
// }

if(hamburgerBackpack.length >= 3) {
    for(let i = 0; i < 3; i++) {
        console.log(hamburgerBackpack[i])
    }

} else {
    for(let i = 0; i < hamburgerBackpack.length; i++) {
        console.log(hamburgerBackpack[i])
    }
}




console.log("hamburgerBackpack", hamburgerBackpack)
// console.log("hotdogDufflebag", hotdogDufflebag)