var AddressablePerson = /** @class */ (function () {
    function AddressablePerson() {
    }
    return AddressablePerson;
}());
var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());
var State;
(function (State) {
    State[State["AL"] = 0] = "AL";
    State[State["AK"] = 1] = "AK";
    State[State["AR"] = 2] = "AR";
    State[State["AZ"] = 3] = "AZ";
    State[State["CA"] = 4] = "CA";
    State[State["CO"] = 5] = "CO";
    State[State["CT"] = 6] = "CT";
    State[State["DE"] = 7] = "DE";
    State[State["DC"] = 8] = "DC";
    State[State["FL"] = 9] = "FL";
    State[State["GA"] = 10] = "GA";
    State[State["HI"] = 11] = "HI";
    State[State["ID"] = 12] = "ID";
    State[State["IN"] = 13] = "IN";
    State[State["IL"] = 14] = "IL";
    State[State["IA"] = 15] = "IA";
    State[State["KS"] = 16] = "KS";
    State[State["KY"] = 17] = "KY";
    State[State["LA"] = 18] = "LA";
    State[State["ME"] = 19] = "ME";
    State[State["MO"] = 20] = "MO";
    State[State["MS"] = 21] = "MS";
    State[State["MI"] = 22] = "MI";
    State[State["MN"] = 23] = "MN";
    State[State["MA"] = 24] = "MA";
    State[State["MT"] = 25] = "MT";
    State[State["MD"] = 26] = "MD";
    State[State["NE"] = 27] = "NE";
    State[State["NV"] = 28] = "NV";
    State[State["NJ"] = 29] = "NJ";
    State[State["NY"] = 30] = "NY";
    State[State["NM"] = 31] = "NM";
    State[State["ND"] = 32] = "ND";
    State[State["NC"] = 33] = "NC";
    State[State["OH"] = 34] = "OH";
    State[State["OK"] = 35] = "OK";
    State[State["OR"] = 36] = "OR";
    State[State["PA"] = 37] = "PA";
    State[State["RI"] = 38] = "RI";
    State[State["SC"] = 39] = "SC";
    State[State["SD"] = 40] = "SD";
    State[State["TN"] = 41] = "TN";
    State[State["TX"] = 42] = "TX";
    State[State["UT"] = 43] = "UT";
    State[State["VT"] = 44] = "VT";
    State[State["VA"] = 45] = "VA";
    State[State["WA"] = 46] = "WA";
    State[State["WV"] = 47] = "WV";
    State[State["WI"] = 48] = "WI";
    State[State["WY"] = 49] = "WY";
})(State || (State = {}));
var s = State.HI;
console.log(s);
var daniel = new AddressablePerson();
daniel.name = "Daniel";
daniel.address = {
    "street1": "123 Main St.",
    "city": "Schenectady",
    "state": State.NY,
    "zip": 90210
};
console.log("Person ".concat(daniel.name, " has a zip code of ").concat(daniel.address.zip));
var edwig = {
    "name": "Edwig",
    "address": {
        "street1": "123 E 146 St.",
        "city": "Cleveland",
        "state": State.OH,
        "zip": 44110
    }
};
