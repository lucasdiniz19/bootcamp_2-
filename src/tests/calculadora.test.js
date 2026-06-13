import { calcularLucro } from '../calculadora.js';

describe('Testes de Viabilidade Vansmind', () => {
  test('Cenário Ideal: Deve calcular lucro positivo', () => {
    const res = calcularLucro(6.0, 10, 5, 200);
    expect(res).toBeGreaterThan(0);
  });

  test('Cenário de Erro: Deve barrar preços negativos', () => {
    expect(() => calcularLucro(-1, 10, 5, 200)).toThrow();
  });

  test('Cenário Limite: Deve indicar prejuízo com 0 alunos', () => {
    const res = calcularLucro(6.0, 10, 0, 200);
    expect(res).toBeLessThan(0);
  });
});

test('Deve rejeitar distância igual a zero', () => {
  expect(() =>
    calcularLucro(6.0, 0, 5, 200)
  ).toThrow();
});

test('Deve rejeitar quantidade negativa de alunos', () => {
  expect(() =>
    calcularLucro(6.0, 10, -1, 200)
  ).toThrow();
});

test('Deve calcular o lucro corretamente', () => {
  const lucro = calcularLucro(8, 20, 10, 200);

  const custoCombustivel = (20 * 2) * (8 / 8);
  const faturamento = 10 * 200;

  expect(lucro).toBe(
    faturamento - custoCombustivel
  );
});