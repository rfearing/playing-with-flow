// @flow

// VARIABLES
let name: string = 'John Doe';
let age: number = 40;
let something: any = [1,2,3];
let users: string[] = ['Joe', 'John', 'Jane'];


// INTERFACES
let person: Person;
let person2: Person;

person = {
  name: 'Richard',
  age: 30,
}

person = {
  name: 'Clark',
  age: 22,
  hasKids: true,
}

interface Person {
  name: string;
  age: number;
  hasKids?: boolean;
}

// FUNCTIONS
function greeting(name: string): string {
  return `Hello, ${name}`;
}

function funcWithOptions(value: string | number): string {
  return `Hello, ${value}`;
}

console.log(greeting('Brad'));
console.log(funcWithOptions('Joe'));
console.log(funcWithOptions(5));

// UTILITY TYPES
type Suite = 'Diamonds' | 'Clubs' | 'Spades';

const clubs: Suite = 'Clubs';
