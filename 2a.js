// Grandparent object
const human = {
  species: "Homo sapiens"
};

// Parent object
const person = Object.create(human);
person.name = "John";
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

// Child object
const employee = Object.create(person);
employee.jobTitle = "Software Developer";

console.log(employee.species); // Output: Homo sapiens
employee.greet(); // Output: Hello, my name is John
console.log(employee.jobTitle); // Output: Software Developer
