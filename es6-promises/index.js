const takeAChance = require('./take-a-chance');

const myPromise = takeAChance('alex');
myPromise.then((value) => {
  console.log(value);
});
myPromise.catch((err) => {
  console.log(err.message);
});
