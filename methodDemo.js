var Door = /** @class */ (function () {
    function Door(name, initialState) {
        this.location = name;
        this.isOpen = initialState;
    }
    Door.prototype.open = function () {
        this.isOpen = true;
    };
    Door.prototype.shut = function () {
        this.isOpen = false;
    };
    Door.prototype.slam = function () {
        this.shut();
        console.log("BAM!");
    };
    return Door;
}());
var DoorInspector = /** @class */ (function () {
    function DoorInspector() {
    }
    DoorInspector.prototype.inspect = function (door) {
        console.log("Door at ".concat(door.location, " which has a color of ").concat(door.color, " is open ? ").concat(door.isOpen));
    };
    DoorInspector.prototype.paint = function (door, color) {
        door.color = color;
    };
    return DoorInspector;
}());
var frontDoor = new Door("Front", false);
var garageDoor = new Door("Garage", true);
var inspector = new DoorInspector();
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
var TalkingPerson = /** @class */ (function () {
    function TalkingPerson(name) {
        this.name = name;
    }
    TalkingPerson.prototype.say = function (s) {
        console.log("".concat(this.name, " sez, \"").concat(s));
    };
    return TalkingPerson;
}());
var t = new TalkingPerson("Tammy");
var v = new TalkingPerson("Vammy");
t.say("Hello there!!!");
