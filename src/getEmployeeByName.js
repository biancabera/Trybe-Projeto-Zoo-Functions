const data = require('../data/zoo_data');
// seguindo mais uma vez a indicação dada por um dos instrutores a fazermos uma desestruturação do objeto agora employees para essa constante.
const { employees } = data;

function getEmployeeByName(employeeName) {
  // comecei executando a condição de que se não houver nada no parâmetro ele irá retornar um objeto vazio {}. A condição poderia ser usada com [] ou false que também funcionaria, mas preferi utilizar undefined para meu melhor entendimento.
  if (employeeName === undefined) {
    return {};
  }
  // após dada a condição, se não for verdadeiro, irá retornar a condição abaixo que procura no objeto 'employees' se algum firstName ou Lastname é igual ao parâmetro que eu verificar. E se for retorna o objeto com todas as informações desse funcionário, apenas por pesquisar o nome ou o sobrenome dele.
  const verifyEmployee = employees.find((employee) =>
    (employeeName === employee.firstName || employeeName === employee.lastName));
  // retornando minha função, pode-se checar nas linhas 17 e 21 para observar o retorno do parâmetro pesquisado.
  return verifyEmployee;
}

// Utilizando parâmetro como firstName
// console.log(getEmployeeByName('Burl'));

// Utilizando parâmetro como lastName
// console.log(getEmployeeByName('Orloff'));

module.exports = getEmployeeByName;
