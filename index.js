// Helper function to calculate factorial
function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }
  
  // Main code to use the helper function
  const number = 5; // You can change this number to calculate factorial for different values
  const result = factorial(number);
  console.log(`The factorial of ${number} is ${result}`);
  