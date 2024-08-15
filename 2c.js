// Grandparent constructor function
function Human(species) {
  this.species = species;
}

// Parent constructor function
function Person(name, species) {
  Human.call(this, species); // Call the Human constructor
  this.name = name;
}

// Inherit from Human
Person.prototype = Object.create(Human.prototype);
Person.prototype.constructor = Person;

// Add greet method to Person prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

// Child constructor function
function Employee(name, jobTitle, species) {
  Person.call(this, name, species); // Call the Person constructor
  this.jobTitle = jobTitle;
}

// Inherit from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

const employee = new Employee("John", "Software Developer", "Homo sapiens");

employee.greet(); // Output: Hello, my name is John
console.log(employee.jobTitle); // Output: Software Developer
console.log(employee.species); // Output: Homo sapiens
