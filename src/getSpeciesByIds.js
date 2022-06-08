const data = require('../data/zoo_data');
// seguindo a indicação dada por um dos instrutores a fazermos uma desestruturação do objeto species para essa constante.
const { species } = data;
// no parâmetro que antes era só ids, acrescentei ... para receber um array ids com o spread operator, permitindo assim que possam ser colocados como parâmetro um id ou vários.
function getSpeciesByIds(...ids) {
  // https://youtu.be/bdLkAm12pgI?t=976
  // criei uma constante para retorná-la depois, dentro dela eu filtrei o objeto species para retornar um array com as espécies que eu quero, no parâmetro do filter utilizei da técnica object destructuring para manipular o ID de cada objeto, renomeando como 'idSpecie' para não confundir com o parâmetro ids que será um array por conta do spreadOperator'(...ids)' Continuando o filter eu fiz uma checagem com o ids.includes para ver se dentro do array 'ids' estava incluido cada idSpecie do objeto species.
  const idsRetornados = species.filter(({ id: idSpecie }) => ids.includes(idSpecie));
  // e para finalizar como dito acima, retornei a constante para quando chamar a função através do console.log com um ou vários parâmetros a função retornar o array dos objetos adequados.
  return idsRetornados;
}
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'));
// ou
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
