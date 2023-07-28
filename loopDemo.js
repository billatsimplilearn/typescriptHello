var cardSuits = ["Hearts", "Diamonds", "Clubs", "Spades"];
var luckyCharms = ["Green clover", "Purple diamonds", "Rainbow horseshoes"];
// we want to see one string that goes, "Hearts and Diamonds and Clubs and Spades"
function joinArray(joinables, joiner) {
    var retVal = joinables[0];
    for (var i = 1; i < joinables.length; i++) {
        retVal = retVal + joiner;
        var word = joinables[i];
        retVal = retVal + word;
    }
    return retVal;
}
/*

i = 4
retVal = Hearts and Diamonds and Clubs and Spades



*/
var result = joinArray(cardSuits, " and ");
console.log(result);
// We want "Hearts and Diamonds and Clubs and Spades"
