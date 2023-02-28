const pi = 3.14;
let radius = Number(prompt("Enter the radius of the circle:"));

while (isNaN(radius) || radius < 0) {
  if (isNaN(radius)) {
    alert("Invalid input. Please enter a number.");
  } else {
    alert("Radius cannot be negative. Please enter a positive number.");
  }
  radius = Number(prompt("Enter the radius of the circle:"));
}

let area = pi * radius * radius;

console.log(`The area of the circle is ${area}.`);
