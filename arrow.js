// 1. using function keyword
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);

console.log(result);

// 2. using function as a variable (anonymous function)
const sub = function (a, b) {
  return a - b;
};

result = sub(1, 2);

console.log(result);

// 3. using arrow function
// don't use arrow function with this keyword
const mul = (a, b) => a * b;

result = mul(2, 3);

console.log(result);

const greet = message => console.log(`Hello ${message}`);

greet('World');

const user = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.fullName());