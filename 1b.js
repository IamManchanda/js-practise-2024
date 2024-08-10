// Parent class
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Child class
class Employee extends Person {
  constructor(name, jobTitle) {
    super(name); // Calls the parent class's constructor
    this.jobTitle = jobTitle;
  }
}

const employee = new Employee("John", "Software Developer");

employee.greet(); // Output: Hello, my name is John
console.log(employee.jobTitle); // Output: Software Developer
