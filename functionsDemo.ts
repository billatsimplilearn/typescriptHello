
function celciusToFahrenheit(tempC : number) : number {
    let tempF : number = ( tempC * 9 ) / 5 + 32 ;
    return tempF ;
}

//{}
//[]
//<>
//()

let freezingFahrenheit : number = celciusToFahrenheit(0);
let boilingFahrenheit : number = celciusToFahrenheit(100);
let niceFahrenheit : number = celciusToFahrenheit(22);
let absoluteZero : number = celciusToFahrenheit(-273);

console.log(`freezingFahrenheit: ${freezingFahrenheit}`) ;
console.log(`boilingFahrenheit: ${boilingFahrenheit}`) ;
console.log(`niceFahrenheit: ${niceFahrenheit}`) ;
console.log(`absoluteZero: ${absoluteZero}`) ;

function parrot(pollySez: string) {
    console.log(`Polly sez ${pollySez}`) ;
}

parrot("This is a great class");

function parrotGreeting() {
    parrot("Hello!");
}

parrotGreeting();
