class Door {
    location : String ;
    isOpen : boolean ;
    color ?: String ;

    constructor(name : String, initialState : boolean) {
        this.location = name ;
        this.isOpen = initialState ;
    }

    open() {
        this.isOpen = true ;
    }

    shut() {
        this.isOpen = false ;
    }

    slam() {
        this.shut();
        console.log("BAM!");
    }
}

class DoorInspector {
    inspect(door : Door) {
        console.log(`Door at ${door.location} which has a color of ${door.color} is open ? ${door.isOpen}`) ;
    }

    paint(door : Door, color : String) {
        door.color = color ;
    }
}

let frontDoor : Door = new Door("Front", false);
let garageDoor : Door = new Door("Garage", true);
let inspector : DoorInspector = new DoorInspector();

inspector.inspect(frontDoor);
inspector.inspect(garageDoor);
frontDoor.open();
inspector.inspect(frontDoor);
frontDoor.slam();
inspector.inspect(frontDoor);
garageDoor.shut();
inspector.inspect(garageDoor);
inspector.paint(frontDoor, "greenish-pink");
frontDoor.shut();
inspector.inspect(frontDoor);
inspector.paint(garageDoor, "clear");
garageDoor.open();
inspector.inspect(garageDoor);
garageDoor.shut();
inspector.inspect(garageDoor);
frontDoor.open();
inspector.inspect(frontDoor);

class TalkingPerson {
    name : String ;
    phone ?: String ;

    constructor(name : String) {
        this.name = name ;
    }

    say(s : String) {
        console.log(`${this.name} sez, "${s}`) ;
    }
}

let t : TalkingPerson = new TalkingPerson ( "Tammy" ) ;
let v : TalkingPerson = new TalkingPerson ( "Vammy" ) ;
t.say ( "Hello there!!!" ) ;

