let cardSuits : Array <string> = ["Hearts", "Diamonds", "Clubs", "Spades"] ;
let luckyCharms : Array <String> = ["Green clover", "Purple diamonds", "Rainbow horseshoes"];
// we want to see one string that goes, "Hearts and Diamonds and Clubs and Spades"

function joinArray( joinables : Array <string>, joiner : String ) : string {

    let retVal : string = joinables[0] ;
    for(let i : number = 1 ; i < joinables.length ; i++) {
        retVal = retVal + joiner;
        let word : string = joinables [ i ] ;
        retVal = retVal + word ;
    }

    return retVal ;
}

/*

i = 4
retVal = Hearts and Diamonds and Clubs and Spades



*/
let result = joinArray ( cardSuits, " and " ) ;

console.log(result);
// We want "Hearts and Diamonds and Clubs and Spades"
