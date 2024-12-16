function greeter(person: string): string {
  return `Hello, ${person}!`;
}

let user = ["John Doe", 123];
console.log(greeter(user)); //This will throw an error because the argument is of type (string | number)[] instead of string.