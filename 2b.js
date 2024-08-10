// Grandparent class
class Human {
  constructor(species) {
    this.species = species;
  }
}

// Parent class
class Person extends Human {
  constructor(name, species) {
    super(species);
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Child class
class Employee extends Person {
  constructor(name, jobTitle, species) {
    super(name, species);
    this.jobTitle = jobTitle;
  }
}

const employee = new Employee("John", "Software Developer", "Homo sapiens");

employee.greet(); // Output: Hello, my name is John
console.log(employee.jobTitle); // Output: Software Developer
console.log(employee.species); // Output: Homo sapiens
