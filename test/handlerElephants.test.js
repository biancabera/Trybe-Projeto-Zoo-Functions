const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  test('Retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  test('Retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  test('Retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  test('Retorna a popularidade dos elefantes', () => {
    // https://jestjs.io/pt-BR/docs/expect
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
  });

  test('Retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants('availability')).not.toContain(['Monday']);
  });

  test('Não passando argumentos a função deve retornar undefined;', () => {
    expect(handlerElephants()).toBe(undefined);
  });

  test('Passando por argumento um objeto vazio ({}) deve retornar a string Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });

  test('Passada uma string que não contempla uma funcionalidade deve retornar null', () => {
    expect(handlerElephants(' ')).toBe(null);
  });
});
