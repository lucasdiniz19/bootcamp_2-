
import { buscarCotacao } from '../src/api.js';

describe('Testes de Integração VansMind', () => {
  test('Deve buscar a cotação do dólar na API externa', async () => {
    const valor = await buscarCotacao();
    
    expect(valor).not.toBeNull();
    expect(typeof valor).toBe('number');
  });
});