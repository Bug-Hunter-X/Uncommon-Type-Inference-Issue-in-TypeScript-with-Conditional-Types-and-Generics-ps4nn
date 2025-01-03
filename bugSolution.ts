function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(10, 4); // result2 is 6

// Solution: Use type assertion to fix type inference issue
function processValue<T>(value: T): T {
  return value; 
}

interface User {
  id: number;
  name: string;
}

function processUser(user: User | number): User | number {
  return user;
}

let num = processValue(5); // num is correctly inferred as number
let str = processValue('hello'); // str is correctly inferred as string

let user = processUser({id: 1, name: 'John'}); // user is correctly inferred as User
let userId = processUser(1); // userId is correctly inferred as number

// Solution: Explicitly assert the type
let mixed = processUser(processValue({id: 1, name: 'Jane'} as User)); // mixed is now correctly inferred as User
