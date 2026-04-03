export function calcularLucro(combustivelPreco, distanciaKm, qtdAlunos, valorMensalidade) {
    if (combustivelPreco <= 0 || distanciaKm <= 0 || qtdAlunos < 0) {
      throw new Error("Valores inválidos inseridos.");
    }
    // Média de 8km/l. Multiplicamos a distância por 2 (ida e volta).
    const custoCombustivel = (distanciaKm * 2) * (combustivelPreco / 8);
    const faturamento = qtdAlunos * valorMensalidade;
    return faturamento - custoCombustivel;
  }