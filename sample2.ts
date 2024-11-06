class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    // Method to get a greeting message
    getGreeting(): string {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  
    // Method to check if the person is an adult
    isAdult(): boolean {
      return this.age >= 18;
    }
  }
  
  // Function to display a person's details
  function displayPersonDetails(person: Person): void {
    console.log(person.getGreeting());
    console.log(`Is adult: ${person.isAdult()}`);
  }
  
  // Intentionally duplicated code for SonarQube to flag
  function duplicateFunction1(): void {
    const person = new Person("Alice", 25);
    console.log(person.getGreeting());
    console.log(`Is adult: ${person.isAdult()}`);
  }
  
  function duplicateFunction2(): void {
    const person = new Person("Bob", 17);
    console.log(person.getGreeting());
    console.log(`Is adult: ${person.isAdult()}`);
  }
  
  // Unused variable for SonarQube to detect
  const unusedVariable = "I am not used anywhere";
  
  const person = new Person("John Doe", 30);
  displayPersonDetails(person);
  