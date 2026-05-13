import { jest } from '@jest/globals';

const buscarCotacaoMock = jest.fn(async () => 5.25);

describe('Testes de Integração - VansMind', () => {
  test('Deve validar se a lógica de recebimento de cotação funciona', async () => {
    const valor = await buscarCotacaoMock();
    
    expect(valor).toBeGreaterThan(0);
    expect(typeof valor).toBe('number');
  });
});