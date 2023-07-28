var dog = 42;
var elephant = "rooorar";
// Length is 12
var fibonnacciSequence = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
console.log("Traditional For");
for (var i = 0; i < fibonnacciSequence.length; i++) {
    var k = "Thing at " + i;
    console.log("Fibonnaci number at ".concat(i, " is ").concat(fibonnacciSequence[i], ", witih thing of ").concat(k));
}
console.log("For each");
for (var _i = 0, fibonnacciSequence_1 = fibonnacciSequence; _i < fibonnacciSequence_1.length; _i++) {
    var num = fibonnacciSequence_1[_i];
    console.log("Next fibonnacci number is " + num);
}
var twoDimensionalArray = [
    ["A", "B", "C", "D", "E", "F"],
    ["E", "F", "G", "H"],
    ["I", "J", "K", "L"],
    ["M", "N", "O", "P"],
    ["Q", "R", "S", "T"],
    ["U", "V", "W", "X"],
    ["Y", "Z"]
];
var people = [
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
];
// Zero-indexed (vs one-indexed)
// First element starts at ZERO, not one.
var person = people[0];
//console.log(`Person: ${person["name"]} in ${person["state"]}`) ;
//console.log("Secrets of the Universe") ;
var year = {
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
};
