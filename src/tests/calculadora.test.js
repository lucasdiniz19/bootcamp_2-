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
