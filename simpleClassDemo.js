var Personage = /** @class */ (function () {
    function Personage(val) {
        this.name = val;
    }
    return Personage;
}());
var bob = { "name": "Bob" };
var anna = new Personage("Anna");
var size = 42;
anna.phone = "867-5309";
bob.phone = "1 800 528 1234";
console.log("Person ".concat(anna.name, " has a phone number of ").concat(anna.phone));
console.log("Person ".concat(bob.name, " has a phone number of ").concat(bob.phone));
