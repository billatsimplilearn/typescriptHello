var actualRetailPrice = 865;
var contestantNumber1Guess = 600;
var contestantNumber2Guess = 700;
var contestantNumber3Guess = 865;
var contestantNumber4Guess = 1000;
if (contestantNumber1Guess > actualRetailPrice) {
    console.log("Contestant Number 1 is OVER!");
    console.log("Sorry, you lose.");
}
else if (contestantNumber1Guess < actualRetailPrice) {
    console.log("Contestant Number 1 is under");
}
else {
    console.log("Contestant Number 1 got a PERFECT MATCH!");
    console.log("You win an extra $100");
}
if (contestantNumber2Guess > actualRetailPrice) {
    console.log("Contestant Number 2 is OVER!");
    console.log("Sorry, you lose.");
}
else if (contestantNumber1Guess < actualRetailPrice) {
    console.log("Contestant number 2 is under");
}
else {
    console.log("Contestant number 2 got a PERFECT MATCH!");
    console.log("You win an extra $100");
}
if (contestantNumber3Guess > actualRetailPrice) {
    console.log("Contestant Number 3 is OVER!");
    console.log("Sorry, you lose.");
}
else if (contestantNumber3Guess < actualRetailPrice) {
    console.log("Contestant number 3 is under");
}
else {
    console.log("Contestant number 3 got a PERFECT MATCH!");
    console.log("You win an extra $100");
}
if (contestantNumber4Guess > actualRetailPrice) {
    console.log("Contestant Number 4 is OVER!");
    console.log("Sorry, you lose.");
}
else if (contestantNumber1Guess < actualRetailPrice) {
    console.log("Contestant number 4 is under");
}
else {
    console.log("Contestant number 4 got a PERFECT MATCH!");
    console.log("You win an extra $100");
}
