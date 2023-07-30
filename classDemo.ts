class Person extends Object {
    name: String ;
    phone?: String ;
    constructor (nameParam : String) {
        super();
        this.name = nameParam ;
    }

    say(statement : String) {
        console.log(`${this.name} says, "${statement}"`);
    }
}

let c : Person = new Person("Charlie");
let d : Person = new Person("Daniel");
let e : Person = new Person("Earvin");
let f : Person = new Person("Fiona");
c.say ( "Hi There, Hello!" ) ;
d.say ( "Nice to meet you" ) ;
e.say ( "Call me Magic" ) ;
f.say ( "Trust me I am a real person" ) ;

let alice : Person = new Person("Alice");
alice.phone = "1-800-528-1234"

// Just regular object notation
//console.log(`Alice's Name is ${alice.name} and phone is ${alice.phone}`) ;


