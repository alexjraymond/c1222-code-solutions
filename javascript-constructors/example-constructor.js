function ExampleConstructor() {
}

console.log(Object.getPrototypeOf(ExampleConstructor));
console.log(typeof Object.getPrototypeOf(ExampleConstructor));

var first = new ExampleConstructor();
console.log(first);

var instanceOfFunction = first instanceof ExampleConstructor;

console.log('is my variable an instance of the constructor function? ', instanceOfFunction);
