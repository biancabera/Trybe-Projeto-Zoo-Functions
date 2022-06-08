const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  // Criando constante para encontrar no objeto 'species' a espécie que tenha nome igual o parâmetro 'animal'
  const verifySpecies = species.find((specie) => animal === specie.name);
  // Criando uma nova constante que recebe a espécie que a função find encontrou na linha acima, e agora entra no objeto residents para checar se TODOS ali tem uma resident.age que é maior ou igual que o parâmetro age. Ou seja, cada resident é verificado dentro da função every.
  const verifyAge = verifySpecies.residents.every((resident) => resident.age >= age);
  // Retorno o boolean true ou false de acordo com o animal e a idade colocados no parâmetro.
  //  Segue exemplo abaixo de como funciona nas linhas 13 a 17.
  return verifyAge;
}

// console.log(getAnimalsOlderThan('lions', 8));
// false

// console.log(getAnimalsOlderThan('lions', 7));
// true

module.exports = getAnimalsOlderThan;
