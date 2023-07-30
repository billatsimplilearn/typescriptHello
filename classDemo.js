var Person = /** @class */ (function () {
    function Person(nameParam) {
        this.name = nameParam;
    }
    Person.prototype.say = function (statement) {
        console.log("".concat(this.name, " says, \"").concat(statement, "\""));
    };
    return Person;
}());
var c = new Person("Charlie");
var d = new Person("Daniel");
var e = new Person("Earvin");
c.say("Hi There, Hello!");
d.say("Nice to meet you");
e.say("Call me Magic");
var alice = new Person("Alice");
alice.phone = "1-800-528-1234";
// Just regular object notation
//console.log(`Alice's Name is ${alice.name} and phone is ${alice.phone}`) ;
