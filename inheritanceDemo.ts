interface Drawable {
    draw() ;
    screamAndShout();
}

interface Colorable {
    /// having something to do with color
    color : String ;
}

abstract class GeometricShape implements Drawable, Colorable {
    lines : number ;
    angles : number ;
    color : String ;

    constructor() {
        console.log("Hi I'm a shape") ;
    }

    veryUsefulMethod() {
        // something
        // changes
    }

    abstract draw() ;

    screamAndShout() {
        console.log("YAHAHHHAA" ) ;
    }
}

/* Bad inheritance:
class Automobile extends GeometricShape {
*/
class Automobile implements Drawable, Colorable {
    color : String ;

    drive() {
//        super.veryUsefulMethod();
    }

    draw() {
        console.log("Draw a car");
    }

    screamAndShout() {
        console.log("BEEP BEEP" ) ;
    }
}

class Quadrilateral extends GeometricShape {

    constructor(s1 : number, s2 : number, s3 : number, s4 : number) {
        super();
        super.lines = 4 ;
        super.angles = 4 ;
    }

    draw() {
        console.log("Draw a quadrilateral") ;
    }
}

class Rectangle extends Quadrilateral {
    constructor(len : number, width : number) {
        super(len, width, len, width);
        // doing things with len and width
    }

    draw() {
        console.log("Draw a rectangle") ;
    }
}

class Square extends Rectangle {
    constructor(len : number) {
        super(len, len);
    }
}

class Circle extends GeometricShape {
    radius : number ;

    constructor(radius : number) {
        super();
        this.radius = radius ;
    }

    draw() {
        console.log("Draw a circle") ;
    }
}

let rect : Rectangle = new Rectangle(3, 4);
let goodObject : GeometricShape = new Rectangle(3, 4);
let shape : GeometricShape = new Quadrilateral(1, 2, 3, 4);
let shape2 : GeometricShape = new Circle (5) ;

shape.draw();
shape2.draw();

let thing1 : GeometricShape = new Circle(5);
let thing2 : Drawable = new Square(7);
let thing3 : Drawable = new Automobile();

thing1.draw();
thing2.draw();
thing3.draw();
