interface Person {
    firstName: string;
    lastName: string;
}

/*
 In TypeScript, two types are compatible if their internal structure is compatible.
 This allows us to implement an interface just by having the shape the interface requires,
 without an explicit implements clause.
 */
function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = {
    firstName: "Jane",
    lastName: "User"
};

document.body.innerHTML = greeter(user);