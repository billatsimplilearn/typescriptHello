let dog : number = 42 ;
let elephant : string = "rooorar" ;

// Length is 12
let fibonnacciSequence : Array <Number> = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

console.log("Traditional For");
for(let i : number = 0 ; i < fibonnacciSequence.length ; i++) {

    let k = "Thing at " + i ;
    console.log(`Fibonnaci number at ${i} is ${fibonnacciSequence[i]}, witih thing of ${k}`) ;
}

console.log("For each");
for(let num of fibonnacciSequence) {
    console.log("Next fibonnacci number is " + num) ;
}

let twoDimensionalArray : Array <Array <String>> = [
    ["A", "B", "C", "D", "E", "F"],
    ["E", "F", "G", "H"],
    ["I", "J", "K", "L"],
    ["M", "N", "O", "P"],
    ["Q", "R", "S", "T"],
    ["U", "V", "W", "X"],
    ["Y", "Z"]
]

let people : Array <Object> = [
    {
        "name": "Alice",
        "state": "Utah"
    },
    {
        "name": "Bob",
        "state": "Idaho"
    },
    {
        "name": "Charlie",
        "state": "South Dakota"
    }
] ;

// Zero-indexed (vs one-indexed)
// First element starts at ZERO, not one.
let person = people[0] ;

//console.log(`Person: ${person["name"]} in ${person["state"]}`) ;

//console.log("Secrets of the Universe") ;

let year = {
    "months": [
        {
            "name": "January",
            "numberOfDays": 31,
            "days": [
                {
                    "dayNumber": 1,
                    "memo": "happy new year!"
                },
                {
                    "dayNumber": 2
                }
            ]
        },
        {
            "name": "February",
            "numberOfDays": 28,
            "days": [
                {
                    "dayNumber": 1
                },
                {
                    "dayNumber": 2,
                    "memo": "Happy Groundhog Day"
                }
            ]
        }
    ]
}



