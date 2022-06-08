// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (animal === undefined) {
    const totalOfSpecies = species.reduce((acc, specie) => {
      acc[specie.name] = specie.residents.length;
      return acc;
    }, {});
    return totalOfSpecies;
  }
  if (animal.sex === undefined) {
    const specieParameter = species.filter((specie) => specie.name === animal.specie);
    const count = specieParameter.reduce((acc, specie) => acc + specie.residents.length, 0);
    return count;
  }
  const specieParameter = species.find((specie) => specie.name === animal.specie);
  const sexParameter = specieParameter.residents.filter(({ sex }) => sex === animal.sex);
  return sexParameter.length;
}
module.exports = countAnimals;

// Linha 7 Começando com a condição de que se o parâmetro animal não possuir nenhum valor, ele retornará todas as espécies junto com a quantidade de animais de cada espécie

// Linha 9 dada a condição de que se não tivesse nenhum parâmetro, reduzo o array para acessar cada um, resgatando seus nomes e junto deles adicionando a quantidade do tamanho do seu array que é o número de animais daquela espécie. Isso tudo será retornado em um objeto criado através do reduce pelo 'acc'.

// Linha 13 dentro das definições do reduce coloco {} para identificar que o resultado final será um objeto que começa vazio, e a cada return do acc vai se modificando.

// linha 15 No fim, retornei a constante que tinha minha função reduce que retorna justamente o objeto final criado. Exemplo:
//  console.log(countAnimals());
//  {
//   lions: 4,
//   tigers: 2,
//   bears: 3,
//   penguins: 4,
//   otters: 4,
//   frogs: 2,
//   snakes: 2,
//   elephants: 4,
//   giraffes: 6
// }

// linha 18 Crio uma condição para caso somente a chave sex for indefinida, nela eu criarei uma constante para executar um filter que filtrará o nome da espécie que for igual ao animal.specie que é dado no parâmetro.

// linha 19 Crio uma constante para através do array filtrado, fazer um reduce que contabiliza quantos itens tem nesse array, o resultado irei retornar pois será o número da população daquela espécie passada no parâmetro.
// Exemplo:
//  console.log(countAnimals({ specie: 'lions' }));
//  4

// Linha 22 Por último, se não passar nas primeiras condições, executo esse escopo final. Onde crio uma constante que recebe um find para encontrar a espécie que tem o specie.name igual ao animal.specie passado no parâmetro. Após isso crio uma constante para receber o que encontrei acessando seus residents e filtrando pelo 'sex', onde 'sex' tem que ser igual ao animal.sex passado no parâmetro. Por fim, retorno o tamanho dessa filtragem, que corresponde ao número de animais que aquele 'sex' contém de tal espécie.
// Exemplo:
//  console.log(countAnimals({ specie: 'lions', sex: 'female' }));
//  2
