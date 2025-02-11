function foo(a, b) {
  if (a === null || b === null) {
    throw new TypeError("Parameters cannot be null.");
  }
  return a + b;
}

console.log(foo(1, 2)); // 3

try {
  console.log(foo(null, 2));
} catch (error) {
  console.error(error.message); // "Parameters cannot be null." 
}

try {
  console.log(foo(1, null));
} catch (error) {
  console.error(error.message); // "Parameters cannot be null."
}
