function celciusToFahrenheit(tempC) {
    var tempF = (tempC * 9) / 5 + 32;
    return tempF;
}
//{}
//[]
//<>
//()
var freezingFahrenheit = celciusToFahrenheit(0);
var boilingFahrenheit = celciusToFahrenheit(100);
var niceFahrenheit = celciusToFahrenheit(22);
var absoluteZero = celciusToFahrenheit(-273);
console.log("freezingFahrenheit: ".concat(freezingFahrenheit));
console.log("boilingFahrenheit: ".concat(boilingFahrenheit));
console.log("niceFahrenheit: ".concat(niceFahrenheit));
console.log("absoluteZero: ".concat(absoluteZero));
function parrot(pollySez) {
    console.log("Polly sez ".concat(pollySez));
}
parrot("This is a great class");
function parrotGreeting() {
    parrot("Hello!");
}
parrotGreeting();
