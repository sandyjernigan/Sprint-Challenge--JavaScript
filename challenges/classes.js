// 1. Copy and paste your prototype in here and refactor into class syntax.

// Base Constructor
class newCuboidMaker {
    constructor(attributes) {
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
    }
    volume() { // Volume Method
        return (this.length * this.width * this.height);
    }
    surfaceArea() {  // Surface Area Method
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}
  
  // Create a new object that uses CuboidMaker
  
  const new_cuboid = new newCuboidMaker({
    length: 4, 
    width: 5, 
    height: 5
  });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(new_cuboid.volume()); // 100
console.log(new_cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
// Test your work by logging out your volume and surface area.