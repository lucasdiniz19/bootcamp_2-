import { jest } from '@jest/globals';
import { buscarCotacao } from '../api.js';

describe('Testes da API', () => {

  test('Deve retornar a cotação quando a API responder corretamente', async () => {

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            USDBRL: {
              bid: '5.25'
            }
          })
      })
    );

    const resultado = await buscarCotacao();

    expect(resultado).toBe(5.25);
  });

  test('Deve retornar "Indisponível" quando ocorrer erro', async () => {

    global.fetch = jest.fn(() =>
      Promise.reject(new Error('Falha'))
    );

    const resultado = await buscarCotacao();

    expect(resultado).toBe('Indisponível');
  });

});