function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(10, 4); // result2 is 6

// Uncommon bug: Type inference issue with conditional types
function processValue<T>(value: T): T {
  return value; // Incorrect type inference in some cases
}

let num = processValue(5); // num is correctly inferred as number
let str = processValue('hello'); // str is correctly inferred as string

interface User {
  id: number;
  name: string;
}

function processUser(user: User | number): User | number {
  return user;
}

let user = processUser({id: 1, name: 'John'}); // user is correctly inferred as User
let userId = processUser(1); // userId is correctly inferred as number

// The following line demonstrates the uncommon type inference issue:
let mixed = processUser(processValue({id: 1, name: 'Jane'})); // mixed is inferred as User | number, which is less precise than User.
// The correct type should be User, because processValue<User>(...) returns a User, and processUser expects a User | number.  The compiler fails to narrow this correctly.
