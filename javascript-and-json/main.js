var books = [
  {
    isbn: 123,
    title: 'how to be a css GOD',
    author: 'cody miller'
  },
  {
    isbn: 456,
    title: 'improv is actually cool okay guys?',
    author: 'alex raymond'
  },
  {
    isbn: 789,
    title: 'we should really talk about your dad',
    author: 'my therapist'
  }
];

console.log('array books: ', books);
console.log('array books typeof: ', typeof books);

console.log('books json stringified: ', JSON.stringify(books));

var jsonString = '{ "name": "nicole", "number-id": 29}';

console.log('typeof for json string: ', typeof jsonString);

console.log('json string parsed: ', JSON.parse(jsonString));
console.log('json string parse typeof: ', typeof JSON.parse(jsonString));
