// Parent object
const person = {
  name: "John",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  }
};

// Child object
const employee = Object.create(person); // employee inherits from person
employee.jobTitle = "Software Developer";

employee.greet(); // Output: Hello, my name is John
console.log(employee.jobTitle); // Output: Software Developer
