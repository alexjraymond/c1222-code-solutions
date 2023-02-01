const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 },
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' },
];

// const initialValue = 0;
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);

const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue);
console.log(product);

const balance = account.reduce((bal, transaction) => {
  if (transaction.type === 'deposit') {
    bal += transaction.amount;
  } else { bal -= transaction.amount; }
  return bal;
}, 0);
console.log(balance);

const composite = traits.reduce((obj, trait) => {
  return { ...obj, ...trait };
}, {});
console.log(composite);
