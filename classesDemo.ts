class AddressablePerson {
    name : String ;
    address ?: Address ;
}

class Address {
    street1 : String ;
    street2 ?: String ;
    city : String ;
    state : State ;
    zip : number ;
}

enum State {
    AL, AK, AR, AZ, CA, CO, CT, DE, DC, FL, GA, HI, ID, IN, IL, IA, KS, KY, LA,
    ME, MO, MS, MI, MN, MA, MT, MD, NE, NV, NJ, NY, NM, ND, NC, OH, OK, OR, PA,
    RI, SC, SD, TN, TX, UT, VT, VA, WA, WV, WI, WY
}

let s : State = State.HI ;

console.log(s);

let daniel : AddressablePerson = new AddressablePerson();
daniel.name = "Daniel" ;
daniel.address = {
    "street1" : "123 Main St.",
    "city" : "Schenectady",
    "state" : State.NY,
    "zip" : 90210
} ;

console.log(`Person ${daniel.name} has a zip code of ${daniel.address.zip}`) ;

let edwig : AddressablePerson = {
    "name" : "Edwig",
    "address": {
        "street1" : "123 E 146 St.",
        "city" : "Cleveland",
        "state" : State.OH,
        "zip" : 44110
        }
}
