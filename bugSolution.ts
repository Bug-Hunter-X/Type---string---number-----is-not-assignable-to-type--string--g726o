function greeter(person: string): string {
  return `Hello, ${person}!`;
}

let user = "John Doe";
console.log(greeter(user)); //This will work as the argument is of type string

function greeterArray(people: string[]): string {
  return `Hello, ${people.join(', ')}!`;
}

let users = ["John Doe", "Jane Doe"];
console.log(greeterArray(users)); //This will work as the argument is of type string[] 