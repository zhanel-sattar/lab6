let num1, num2, num3;
let validNumber = false;

while (!validNumber) {
  num1 = parseInt(prompt("Enter the first number: "));
  num2 = parseInt(prompt("Enter the second number: "));
  num3 = parseInt(prompt("Enter the third number: "));

  if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    validNumber = true;
  } else {
    alert("Please enter valid numbers.");
  }
}

const product = num1 * num2 * num3;
console.log(`The answer is ${product}.`);
