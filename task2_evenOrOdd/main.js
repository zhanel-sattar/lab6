let number = prompt("Enter a number: ");

while (isNaN(number)) {
  number = prompt("Please enter a valid number: ");
}

if (number % 2 == 0) {
  console.log(`${number} is even.`);
} else {
  console.log(`${number} is odd.`);
}
