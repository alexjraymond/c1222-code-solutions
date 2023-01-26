const read = require('./read');
const create = require('./create');
const update = require('./update');
const remove = require('./delete');

const noteId = process.argv[3];
const newNote = process.argv[3];
const updateNote = process.argv[4];
const operand = process.argv[2];

switch (operand) {
  case 'read':
    read();
    break;
  case 'create':
    create(newNote);
    break;
  case 'update':
    update(noteId, updateNote);
    break;
  case 'delete':
    remove(noteId);
    break;
  default:
    console.log('input error, please try again');
}
