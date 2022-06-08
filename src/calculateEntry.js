const data = require('../data/zoo_data');

const { prices } = data;

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function countEntrants(entrants) {
  // Primeiramente precisei pensar em filtrar condições para as respectivas faixas de idades, para retornar um array específico para cada grupo (Crianças,Adultos e Idosos).
  const childVisitors = entrants.filter((entrant) => entrant.age < 18);
  const adultVisitors = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const seniorVisitors = entrants.filter((entrant) => entrant.age >= 50);
  // após filtrar cada condição para cada idade, criei uma nova constante com um objeto dentro exibindo a quantidade segundo o constante 'entrants' de quantas pessoas de cada idade continham em cada condição. Como a filtragem retornou array, eu usei o length desses arrays para saber o tamanho de cada um deles.
  const allVisitors = {
    child: childVisitors.length,
    adult: adultVisitors.length,
    senior: seniorVisitors.length,
  };
  return allVisitors;
}
// Exemplo de como funcionará essa função:
// console.log(countEntrants(entrants));
// { child: 3, adult: 2, senior: 1 }

function calculateEntry(entrants) {
  // Referência para checar se o objeto é um objeto vazio: https://pt.stackoverflow.com/questions/83588/em-javascript-como-verificar-que-um-objeto-est%C3%A1-vazio-sem-jquery;
  // Criei uma condição que verifica se o parâmetro 'entrants' é undefined ou se as entradas tem um tamanho total de 0, ou seja, um objeto vazio {}. Se a condição for verdadeira vai retornar 0.
  if (entrants === undefined || Object.entries(entrants).length === 0) { return 0; }
  // após verificar as condições acima, criei uma nova constante que armazena o resultado da função acima 'countEntrants' junto de seu parâmetro, e com isso executei para cada chave do objeto (que possui a quantidade de pessoas por faixa) multiplicar pelo preço que condiz com sua idade.
  const visitors = countEntrants(entrants);
  const childPrices = visitors.child * prices.child;
  const adultPrices = visitors.adult * prices.adult;
  const seniorPrices = visitors.senior * prices.senior;
  // Conforme o que o requisito pede, criei de novo outra constante que armazena o valor total do preço somado para as 3 categorias de idade.
  const totalPrices = childPrices + adultPrices + seniorPrices;
  return totalPrices;
}

// Exemplo de como funcionará essa função:
// console.log(calculateEntry(entrants));
// Resultado 187.94

module.exports = { calculateEntry, countEntrants };
