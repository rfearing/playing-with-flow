// VARIABLES
let name = 'John Doe';
let age = 40;
let something = [1, 2, 3];
let users = ['Joe', 'John', 'Jane']; // INTERFACES

let person;
let person2;
person = {
  name: 'Richard',
  age: 30
};
person = {
  name: 'Clark',
  age: 22,
  hasKids: true
};

// FUNCTIONS
function greeting(name) {
  return `Hello, ${name}`;
}

function funcWithOptions(value) {
  return `Hello, ${value}`;
}

console.log(greeting('Brad'));
console.log(funcWithOptions('Joe'));
console.log(funcWithOptions(5)); // UTILITY TYPES

const clubs = 'Clubs';