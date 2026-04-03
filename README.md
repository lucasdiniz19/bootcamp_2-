#  Vansmind CLI - Calculadora de Viabilidade Financeira
---------------------------------------------------------------------------------------------------------------------------------------

##  Descrição do Problema Real:
Muitos motoristas de transporte escolar operam sem uma visão clara da lucratividade real de suas rotas. Com a flutuação constante dos preços dos combustíveis e as variações na ocupação da van, muitos profissionais acabam tendo prejuízos ocultos por não calcularem corretamente a margem líquida após os custos operacionais.
---------------------------------------------------------------------------------------------------------------------------------------

##  Proposta da Solução:
O **Vansmind CLI** é uma ferramenta de linha de comando que automatiza esse cálculo de forma técnica e precisa. O motorista insere dados básicos (preço do diesel, distância, quantidade de alunos e mensalidade) e recebe instantaneamente o diagnóstico de viabilidade da rota, permitindo uma tomada de decisão baseada em dados reais.
---------------------------------------------------------------------------------------------------------------------------------------

##  Público-Alvo:
- Motoristas de transporte escolar autônomos.
- Microempreendedores do setor de transporte de passageiros.
- Gestores de pequenas frotas de vans.
---------------------------------------------------------------------------------------------------------------------------------------

## Funcionalidades Principais:
- **Cálculo de Lucratividade:** Processamento instantâneo do saldo líquido da rota.
- **Validação de Dados:** Filtro que impede a entrada de valores negativos ou zerados em campos críticos.
- **Interface Interativa:** Diálogo guiado via terminal para facilitar o uso pelo profissional.
- **Diagnóstico de Status:** Alerta visual indicando "Sucesso (Lucro)" ou "Alerta (Prejuízo)".
---------------------------------------------------------------------------------------------------------------------------------------

## Tecnologias Utilizadas:
- **Node.js**: Ambiente de execução (Runtime).
- **Jest**: Framework de testes automatizados.
- **ESLint**: Ferramenta de análise estática e padronização de código (Linting).
- **GitHub Actions**: Pipeline de Integração Contínua (CI).
- **JavaScript (ES Modules)**: Utilização de padrões modernos de módulos.
---------------------------------------------------------------------------------------------------------------------------------------

## Instruções de Instalação:
Certifique-se de ter o [Node.js] instalado em sua máquina.
1. Clone o repositório:
   git clone [https://github.com/lucasdiniz19/bootcamp_2-]

2. Acesse a pasta do projeto: 
cd bootcamp_2-

3. Instale as dependências necessárias:
npm install
---------------------------------------------------------------------------------------------------------------------------------------

## Instruções de Execução
Para iniciar a aplicação e utilizar a calculadora, execute:
npm start

* Instruções para Rodar os Testes
Para validar a integridade da lógica de cálculo e garantir que os requisitos técnicos foram atendidos:
npm test
---------------------------------------------------------------------------------------------------------------------------------------

## Instruções para Rodar o Lint
Para executar a análise estática do código e verificar a conformidade com as regras de estilo:
npm run lint
---------------------------------------------------------------------------------------------------------------------------------------

 ## Informações Gerais
Versão Atual: 1.0.0 

Autor: João Lucas Trindade Diniz

Link do Repositório Público: https://github.com/lucasdiniz19/bootcamp_2-
