class Rectangle {
    width: number;
    height: number;
  
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
  
    // Method to calculate area
    getArea(): number {
      return this.width * this.height;
    }
  
    // Method to calculate perimeter
    getPerimeter(): number {
      return 2 * (this.width + this.height);
    }
  }
  
  // A function that creates a rectangle and logs its area and perimeter
  function logRectangleProperties(width: number, height: number): void {
    const rectangle = new Rectangle(width, height);
    console.log(`Area: ${rectangle.getArea()}`);
    console.log(`Perimeter: ${rectangle.getPerimeter()}`);
  }
  
  // Intentional code smells for SonarQube to detect
  function unusedFunction(): void {
    console.log("This function is never used");
  }
  
  // Another function that could cause a potential issue
  function riskyOperation(): void {
    let width: any = "10"; // Assigning string instead of a number
    let height: any = 20;
    const rectangle = new Rectangle(width, height);
    console.log(`Area with potential issue: ${rectangle.getArea()}`);
  }
  
  logRectangleProperties(10, 5);
  