const data = require('../data/zoo_data');

const { species } = data;

const { employees } = data;

function getOldestFromFirstSpecies(id) {
  // Crio um constante para encontrar um funcionário que tenha o mesmo id que será procurado através do parâmetro id. Ao checar se o id do parâmetro é correspondente aos ids do employees, ele ainda acessa o primeiro indice de quem ele é responsável 'responsibleFor', que é um array com o id dessas espécies que ele é responsável.
  const specieNumberOne = employees.find((employee) => id === employee.id).responsibleFor[0];
  // Ao possuir a constante acima, crio uma nova constante que irá encontrar através da constante 'specieNumberOne' que retornou um id, a espécie que corresponde a esse ID. Ou seja, agora eu encontro as informações do primeiro animal que esse funcionário é responsável,depois acesso o array de residents dessa espécie.
  const specieResidents = species.find((specie) => specieNumberOne === specie.id).residents;
  // Ao obter as informações desse animal, irei reduzir a constante acima para comparar resident por resident em qual é o mais velho deles. Para isso usei o 'acc' para armazenar o resultado final, e o 'resident' para acessar um por um, que serão testados pela condição do if.
  const oldestAnimalInfo = specieResidents.reduce((acc, resident) => {
    if (acc.age > resident.age) { return acc; }
    return resident;
  });
  // E por fim, como a constante acima irá me retornar um objeto com suas entradas e valores, que não é o que o requisito pede, por se tratar de um objeto, precisei acessar os valores desse objeto com a constante que possui o resultado final de tudo. Para isso usei o comando object.values para extrair somente os valores e inserir em um array.
  return Object.values(oldestAnimalInfo);
}
// Exemplo de como irá ser retornado:
// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
// [ 'Maxwell', 'male', 15 ]

module.exports = getOldestFromFirstSpecies;
