const data = require('../data/zoo_data');

const { species } = data;

const { hours } = data;
// Criei uma constante para criar um objeto que recebe como chave todos os dias da semana. E dentro deles recebe outro objeto com as chaves 'officeHour' (horário de funcionamento daquele dia) e 'exhibition' (que filtra as espécies através do seu availability, se ele inclui o dia correspondente da chave, depois monta um array com cada specie.name encontrado pelo filter)
const daysOfWeek = {
  Tuesday: {
    officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
    exhibition: species.filter((specie) => specie.availability.includes('Tuesday'))
      .map((specie) => specie.name),
  },
  Wednesday: {
    officeHour: `Open from ${hours.Wednesday.open}am until ${hours.Wednesday.close}pm`,
    exhibition: species.filter((specie) => specie.availability.includes('Wednesday'))
      .map((specie) => specie.name),
  },
  Thursday: {
    officeHour: `Open from ${hours.Thursday.open}am until ${hours.Thursday.close}pm`,
    exhibition: species.filter((specie) => specie.availability.includes('Thursday'))
      .map((specie) => specie.name),
  },
  Friday: {
    officeHour: `Open from ${hours.Friday.open}am until ${hours.Friday.close}pm`,
    exhibition: species.filter((specie) => specie.availability.includes('Friday'))
      .map((specie) => specie.name),
  },
  Saturday: {
    officeHour: `Open from ${hours.Saturday.open}am until ${hours.Saturday.close}pm`,
    exhibition: species.filter((specie) => specie.availability.includes('Saturday'))
      .map((specie) => specie.name),
  },
  Sunday: {
    officeHour: `Open from ${hours.Sunday.open}am until ${hours.Sunday.close}pm`,
    exhibition: species.filter((specie) => specie.availability.includes('Sunday'))
      .map((specie) => specie.name),
  },
  // No caso de monday a officeHour é 'CLOSED' pois não há horário de abertura e nem de fechamento. Portanto também não há nenhum animal sendo exibido
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};
function getSchedule(scheduleTarget) {
  // Crio a condição de que se o parâmetro 'scheduleTarget' for indefinido ou vazio, ele irá retornar a constante criada acima 'daysOfWeek'
  if (scheduleTarget === undefined) { return daysOfWeek; }
  // Agora crio uma constante para verificar se algum nome das espécies é igual ao parâmetro 'scheduleTarget'
  const verification = species.some((specie) => specie.name === scheduleTarget);
  // Se a verificação for falsa e se as chaves do objeto 'hours' NÃO incluirem o parâmetro, também irá retornar a constante 'daysOfWeek'
  if (verification === false && !Object.keys(hours).includes(scheduleTarget)) { return daysOfWeek; }
  // E se a verificação seja verdadeira, ele irá encontrar a primeira espécie e retornar se for igual ao parâmetro e acessar sua disponibilidade 'availability'.
  if (verification === true) {
    return species.find((specie) => specie.name === scheduleTarget).availability;
  }
  // Caso contrário, se não passar por nenhuma das condições acima, eu crio uma constante para criar um objeto, que recebe como chave a string do dia consultado pelo parâmetro. Dentro dessa chave, o valor recebido será o objeto correspondente dentro da minha constante 'daysOfWeek'
  const thisDay = {
    [scheduleTarget]: daysOfWeek[scheduleTarget],
  };
  // Por fim, retorno esse objeto
  return thisDay;
}

// console.log(getSchedule());
// console.log(getSchedule('Friday'));
// console.log(getSchedule('lions'));
// console.log(getSchedule('oitudobem'));

module.exports = getSchedule;
