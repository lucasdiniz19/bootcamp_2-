

# 🚌 VansMind — Calculadora de Viabilidade Financeira

[![Deploy](https://img.shields.io/badge/deploy-Netlify-00C7B7?logo=netlify\&logoColor=white)](https://rainbow-zabaione-82b144.netlify.app/)
[![Node.js](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen?logo=node.js)](https://nodejs.org)
[![Supabase](https://img.shields.io/badge/database-Supabase-3ECF8E?logo=supabase\&logoColor=white)](https://supabase.com)

---

## 📌 Sobre o Projeto

O **VansMind** é uma aplicação desenvolvida para auxiliar motoristas de transporte escolar na análise da viabilidade financeira de suas rotas.

A plataforma permite calcular receitas, custos operacionais relacionados ao combustível e margem de lucro, oferecendo um diagnóstico rápido sobre a lucratividade da operação.

Além da calculadora financeira, o sistema integra-se com a **AwesomeAPI** para consulta da cotação atual do dólar e utiliza o **Supabase** para armazenar e consultar o histórico dessas cotações.

🌐 **Deploy:** https://rainbow-zabaione-82b144.netlify.app/

📂 **Repositório:** https://github.com/lucasdiniz19/bootcamp_2-

---

# 🎯 Problema

Muitos motoristas de transporte escolar operam sem uma análise precisa dos custos e receitas de suas rotas.

Com o aumento dos combustíveis e dos custos operacionais, é comum haver prejuízos ocultos por falta de acompanhamento financeiro adequado.

O projeto busca fornecer uma ferramenta simples e acessível para apoiar a tomada de decisão baseada em dados reais.

---

# 💡 Solução

O VansMind automatiza os cálculos financeiros da rota, permitindo ao usuário:

* Informar os dados da operação.
* Visualizar receita, custo e lucro estimado.
* Receber um diagnóstico de viabilidade.
* Consultar a cotação atual do dólar.
* Armazenar e recuperar o histórico de cotações através do Supabase.

---

# ✨ Funcionalidades

### 🧮 Calculadora Financeira

* Receita mensal estimada.
* Cálculo de custo de combustível.
* Lucro líquido.
* Margem percentual de lucro.
* Diagnóstico de viabilidade da rota.

### 💹 Integração com AwesomeAPI

* Consulta automática da cotação atual do dólar.
* Exibição em tempo real na interface.

### 🗄️ Integração com Supabase

* Persistência das cotações consultadas.
* Armazenamento em banco de dados na nuvem.
* Recuperação do histórico de consultas.
* Demonstração prática de integração Frontend + Banco de Dados.

### 📊 Histórico

* Registro das consultas realizadas.
* Exibição organizada dos dados armazenados.

### ✅ Validação de Dados

* Impede valores negativos.
* Impede entradas inválidas.
* Melhora a confiabilidade dos cálculos.

### 🔄 Integração Contínua

* GitHub Actions.
* Execução automática de verificações em Pull Requests e Pushes.

---

# 🛠️ Tecnologias Utilizadas

| Tecnologia              | Finalidade                         |
| ----------------------- | ---------------------------------- |
| HTML5                   | Estrutura da interface             |
| CSS3                    | Estilização                        |
| JavaScript (ES Modules) | Lógica da aplicação                |
| Node.js                 | Ambiente de execução               |
| Jest                    | Testes automatizados               |
| ESLint                  | Padronização e qualidade de código |
| GitHub Actions          | Integração contínua                |
| AwesomeAPI              | Consulta de cotação do dólar       |
| Supabase                | Banco de dados e persistência      |
| Netlify                 | Hospedagem da aplicação            |

---

# 📁 Estrutura do Projeto

```text
bootcamp_2-/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── src/
│   ├── api.js
│   ├── calculadora.js
│   ├── index.js
│   └── supabase.js
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

# 🚀 Instalação

## Pré-requisitos

* Node.js 20+
* npm 9+

## Clone o projeto

```bash
git clone https://github.com/lucasdiniz19/bootcamp_2-

cd bootcamp_2-
```

## Instale as dependências

```bash
npm install
```

## Configure as variáveis de ambiente

Crie um arquivo `.env`:

```env
SUPABASE_URL=sua_url_supabase
SUPABASE_ANON_KEY=sua_chave_supabase
```

---

# ▶️ Executando o Projeto

## Interface Web

Acesse diretamente:

https://rainbow-zabaione-82b144.netlify.app/

Ou execute localmente:

```bash
npx serve .
```

---

## Interface CLI

```bash
npm start
```

---

# 🧪 Testes

Executar testes automatizados:

```bash
npm test
```

---

# 🔍 Lint

Executar verificação de qualidade do código:

```bash
npm run lint
```

---

# ⚙️ CI/CD

O projeto utiliza GitHub Actions para:

* Execução automática de testes.
* Validação do código.
* Verificação de Pull Requests.
* Garantia de qualidade antes do merge.

---

# 🔐 Banco de Dados (Supabase)

O projeto utiliza o Supabase como banco de dados em nuvem.

As informações relacionadas ao histórico de consultas de cotação do dólar são armazenadas no banco, permitindo:

* Registro permanente das consultas.
* Recuperação do histórico.
* Demonstração de persistência de dados.
* Integração com serviços externos.

---

# 👥 Equipe

| Integrante   | Responsabilidade                                |
| ------------ | ----------------------------------------------- |
| Integrante 1 | Integração com Supabase e variáveis de ambiente |
| Integrante 2 | Persistência e consultas de dados               |
| Integrante 3 | Testes automatizados                            |
| Integrante 4 | Interface Web, documentação, CI/CD e deploy     |

---

# 📄 Informações Gerais

**Projeto:** VansMind

**Versão:** 2.0.2

**Autor:** João Lucas Trindade Diniz

**Contribuições:** Gustavo Braga e Guilherme Tierno

**Deploy:** https://rainbow-zabaione-82b144.netlify.app/

**Repositório:** https://github.com/lucasdiniz19/bootcamp_2-
