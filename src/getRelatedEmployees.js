const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
// Depois de pensar muito e testar outras hofs. resolvi utilizar .some para que retornasse um boolean true caso pelo menos um seja verdadeiro ou caso não, falso.
// Criando uma constante, dentro do objeto employees, checo se algum dos 'employees' possuiam o parâmetro id dentro do array managers, ou seja, se algum funcionário possuía algum gerente com esse 'id' e se fosse verdade para pelo menos um funcionário, ele retorna true. E caso contrário, se não tiver nenhum, é false, que é o que a hof por si só já faz. Por isso é a ideal nesse contexto para se utilizar.
  const verifyIsManager = employees.some((employee) => employee.managers.includes(id));
  // retornando o boolean logo abaixo.
  return verifyIsManager;
}

// console.log(isManager('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
// false;

// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
// true;

function getRelatedEmployees(managerId) {
// começo com a condição primeiro, que se o id que for inserido no parâmetro não for de um gerente, segundo a verificação da função 'isManager', ele irá retornar um erro. Utilizei como o indicado através do readme, o 'throw new error'.
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  //  criei uma constante (que recebe uma função) que me retorna um novo array com os funcionários que contenham o id do manager em seu array de managers.
  const employeesOfThisManager = employees.filter((employee) =>
    employee.managers.includes(managerId));
  // após filtrar, fiz uma nova constante que também recebe uma outra função, utilizando a hof map para criar um novo array a partir da minha filtragem, retornando o nome de cada funcionário que possui aquele gerente junto com seu sobrenome. Por isso utilizei template literals, para juntar dois objetos que são mostrados de maneira separada dentro do objeto. Ou seja, o map vai criar um array com cada funcionário que tiver a pessoa do parâmetro como gerente, com o nome e sobrenome conforme o template literals, segue o resultado nas linhas 32 e 33.
  const verifyRelatedEmployees = employeesOfThisManager.map((employee) =>
    `${employee.firstName} ${employee.lastName}`);
  // retorno o array criado pelo map
  return verifyRelatedEmployees;
}
// console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
// [ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ]

module.exports = { isManager, getRelatedEmployees };
