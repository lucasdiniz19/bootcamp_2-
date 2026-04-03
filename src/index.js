import readline from 'readline';
import { calcularLucro } from './calculadora.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("\n=== 🚐 VANSMIND: CALCULADORA DE VIABILIDADE ===");

rl.question('Preço do Diesel (R$): ', (comb) => {
  rl.question('Distância da Rota (KM - ida): ', (dist) => {
    rl.question('Quantidade de Alunos: ', (alunos) => {
      rl.question('Mensalidade por Aluno (R$): ', (valor) => {
        try {
          const lucro = calcularLucro(
            parseFloat(comb.replace(',', '.')), 
            parseFloat(dist.replace(',', '.')), 
            parseInt(alunos), 
            parseFloat(valor.replace(',', '.'))
          );
          
          console.log("\n------------------------------");
          if (lucro > 0) {
            console.log(`✅ SUCESSO: Rota Lucrativa!`);
            console.log(`💰 Lucro estimado: R$ ${lucro.toFixed(2)}`);
          } else {
            console.log(`⚠️ ALERTA: Rota com Prejuízo!`);
            console.log(`💸 Saldo: R$ ${lucro.toFixed(2)}`);
          }
          console.log("------------------------------\n");
        } catch (e) {
          console.log(`\n❌ ERRO: ${e.message}\n`);
        }
        rl.close();
      });
    });
  });
});
