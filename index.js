function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    return a / b;
  }
  function increment(n) {
    return n + 1;
}

function decrement(n) {
    return n - 1;
}

console.log(increment(5)); // Output: 6
console.log(decrement(8)); // Output: 7

function makeInt(n) {
    const parsedInt = parseInt(n, 10);
    return isNaN(parsedInt) ? NaN : parsedInt;
}
console.log(makeInt("42"));   // Output: 42
console.log(makeInt("42px")); // Output: 42
console.log(makeInt("hello")); // Output: NaN

function preserveDecimal(n) {
    const parsedFloat = parseFloat(n);
    return isNaN(parsedFloat) ? NaN : parsedFloat;
}

console.log(preserveDecimal("3.14"));   // Output: 3.14
console.log(preserveDecimal("0.123"));  // Output: 0.123
console.log(preserveDecimal("hello"));  // Output: NaN