var bookshelf = [
  {
    isbn: '978-1491929483',
    title: 'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett'
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson'
  },
  {
    isbn: '978-0692232699',
    title: 'Build APIs You Won\'t Hate: Everyone and their dog wants an API, so you should probably learn how to build them',
    author: 'Phil Sturgeon & Laura Bohill'
  }
];

console.log('the second book author is ', bookshelf[1].author);
console.log('the isbn of the first book is ', bookshelf[0].isbn);
console.log('the title of the third book is ', bookshelf[2].title);

// make sure to open the html to see that it's loaded and there's no parsing errors, console log, etc
