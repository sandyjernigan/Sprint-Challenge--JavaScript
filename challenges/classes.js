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
console.log("Test your volume and surfaceArea methods for new_cuboid.");
console.log(new_cuboid.volume()); // 100
console.log(new_cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
// Test your work by logging out your volume and surface area.

class CubeMaker extends newCuboidMaker { // A cube is the same on all sides so you only have to have one side
    constructor(attributes) {
        super(attributes);
    }
    cube_volume() { // Volume of a cube --  Volume = side^3
        return Math.pow(this.length, 3);
    }
    cube_surfaceArea() {  // Surface Area Method -- Area = 6 * a^2
        return 6 * Math.pow(this.length, 2);
  }
}  

const cube = new CubeMaker({
  length: 5, 
  width: 5, 
  height: 5
});

// Test volume and surfaceArea methods for the cube
console.log("Test volume and surfaceArea methods for the cube.");
console.log(cube.volume()); // 100
console.log(cube.surfaceArea()); // 130

// Also see the this would work with cube functions if only had length
console.log("Also see the this would work with cube functions if only had length.");
const new_cube = new CubeMaker({
    length: 5
  });

console.log(cube.cube_volume()); // 100
console.log(cube.cube_surfaceArea()); // 130
