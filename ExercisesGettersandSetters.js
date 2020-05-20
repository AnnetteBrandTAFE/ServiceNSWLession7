//Getters and Setters

//Q1 Create a class called Square with a single property, sideLength and create a constructor 
//that assigns that value
 
// class Square {
//     constructor(sideLength) {
//         this.sideLength = sideLength;
//     }

//Q2 Create a getter that returns the area of the Square (hint, the area is sideLength * sideLength)

// class Square {
//     constructor(sideLength) {
//         this.sideLength = sideLength;
//     }
//     get area() {
//         return this.sideLength * this.sideLength;
//     }
// }
// let mySquare = new Square (10);
// console.log(mySquare.area); // Output 100

//Q3 Create a setter for area that sets the sideLength for the given area (hint, use the Math.sqrt 
//function to retrieve the square root of the area and assign it as the sideLength)

class Square {
    constructor(sideLength, area) {
        this.sideLength = sideLength;
    }
    get area() {
        return this.sideLength * this.sideLength;
    }
    set area(value) {
        this.sideLength = Math.sqrt(value);
    }
}
let mySquare = new Square(16, 256);
console.log(mySquare.area); // Output: 256
mySquare.area = 100;
console.log(mySquare.area); // Output: 100
console.log(mySquare.sideLength); // Output: 10