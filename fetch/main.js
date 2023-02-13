fetch('https://pokeapi.co/api/v2/pokemon/69')
  .then((data) => {
    return data.json();
  })
  .then((pokedata) => {
    console.log(pokedata.name, pokedata);
  })
  .catch(console.error);
