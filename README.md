# 🚌 VansMind — Calculadora de Viabilidade Financeira

[![Bootcamp CI](https://github.com/lucasdiniz19/bootcamp_2-/actions/workflows/ci.yml/badge.svg)](https://github.com/lucasdiniz19/bootcamp_2-/actions/workflows/ci.yml)
[![Deploy](https://img.shields.io/badge/deploy-Vercel-black?logo=vercel)](https://bootcamp2-wheat.vercel.app)
[![Node.js](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen?logo=node.js)](https://nodejs.org)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

> Ferramenta web + CLI para motoristas de transporte escolar calcularem a lucratividade real de suas rotas, considerando preço do combustível, distância, número de alunos e mensalidade.

**Deploy:** https://bootcamp2-wheat.vercel.app

---

## 📋 Sumário

- [Problema & Solução](#-problema--solução)
- [Funcionalidades](#-funcionalidades)
- [Stack Tecnológica](#-stack-tecnológica)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação](#-instalação)
- [Execução](#-execução)
- [Testes](#-testes)
- [Lint](#-lint)
- [CI/CD e Deploy](#-cicd-e-deploy)
- [Variáveis de Ambiente](#-variáveis-de-ambiente)
- [Contribuindo](#-contribuindo)
- [Equipe](#-equipe)

---

## 🎯 Problema & Solução

Motoristas de transporte escolar autônomos frequentemente operam sem visibilidade clara sobre a lucratividade real de suas rotas. Com a oscilação constante dos preços dos combustíveis e variações na ocupação da van, muitos profissionais acumulam **prejuízos ocultos** por não calcularem corretamente a margem líquida após os custos operacionais.

O **VansMind** automatiza esse cálculo de forma técnica e precisa. O motorista insere dados básicos (preço do diesel, distância, número de alunos, mensalidade) e recebe instantaneamente:

- O **diagnóstico de viabilidade** da rota
- A **margem líquida** percentual
- O **histórico de cálculos** anteriores

---

## ✨ Funcionalidades

| Funcionalidade | Descrição |
|---|---|
| 🧮 Calculadora Web | Interface visual com campos de entrada e resultado em tempo real |
| 💹 Cotação em Tempo Real | Exibe a cotação atual do dólar via AwesomeAPI |
| 📊 Histórico de Cálculos | Armazena os cálculos anteriores no navegador (localStorage) |
| ✅ Diagnóstico Visual | Badge colorido indicando "Viável (Lucro)" ou "Inviável (Prejuízo)" |
| 🖥️ Interface CLI | Modo terminal interativo para uso sem navegador |
| 🛡️ Validação de Dados | Impede entradas negativas ou zeradas em campos críticos |
| 🔄 CI Automatizado | Pipeline de testes e lint a cada push/PR via GitHub Actions |

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia | Uso |
|---|---|---|
| Runtime | **Node.js 20+** | Ambiente de execução |
| Frontend | **HTML/CSS/JS (ES Modules)** | Interface web |
| Fonte de dados | **AwesomeAPI** | Cotação do dólar em tempo real |
| Banco de dados | **Supabase** | Persistência de histórico em nuvem |
| Testes | **Jest 29** | Testes automatizados |
| Lint | **ESLint 9** | Análise estática de código |
| CI | **GitHub Actions** | Pipeline de integração contínua |
| Deploy | **Vercel** | Hospedagem da interface web |

---

## 📁 Estrutura do Projeto

```
bootcamp_2-/
├── .github/
│   └── workflows/
│       └── ci.yml          # Pipeline de CI (lint + testes)
├── src/
│   ├── index.js            # Ponto de entrada CLI
│   ├── calculadora.js      # Lógica de cálculo de viabilidade
│   ├── api.js              # Integração com AwesomeAPI (cotação)
│   └── db.js               # Integração com Supabase (persistência)
├── index.html              # Interface web principal
├── package.json
└── README.md
```

---

## 🚀 Instalação

### Pré-requisitos

- [Node.js](https://nodejs.org) >= 20.0.0
- npm >= 9

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/lucasdiniz19/bootcamp_2-
cd bootcamp_2-

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente (veja a seção abaixo)
cp .env.example .env
```

---

## ▶️ Execução

### Interface Web (recomendado)

Acesse diretamente o deploy em produção:
**https://bootcamp2-wheat.vercel.app**

Ou, para rodar localmente com um servidor estático:

```bash
# Qualquer servidor estático funciona. Exemplo com npx:
npx serve .
```

> ⚠️ O arquivo `index.html` usa ES Modules (`type="module"`), por isso **não abre corretamente ao ser aberto direto no navegador** via `file://`. Use sempre um servidor HTTP local.

### Modo CLI (terminal)

```bash
npm start
```

O CLI solicitará os dados interativamente e exibirá o diagnóstico no terminal.

---

## 🧪 Testes

```bash
npm test
```

Os testes cobrem a lógica de cálculo de viabilidade (`src/calculadora.js`) e são executados com Jest no modo ES Modules.

---

## 🔍 Lint

```bash
npm run lint
```

Verifica a conformidade do código com as regras ESLint configuradas no projeto.

---

## ⚙️ CI/CD e Deploy

### CI — GitHub Actions

O pipeline é definido em `.github/workflows/ci.yml` e executa automaticamente a cada `push` e `pull_request`:

```yaml
name: Bootcamp CI

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install
      - run: npm test
```

**Melhorias recomendadas para o pipeline** (ver [PR description](#) para detalhes):

- Adicionar etapa de `npm run lint` no pipeline
- Fazer cache das dependências com `actions/cache` para reduzir tempo de build
- Separar jobs de `lint` e `test` para identificar falhas de forma mais clara
- Adicionar deploy automático para Vercel via `amondnet/vercel-action`

### Deploy — Vercel

O projeto é hospedado na Vercel com deploy automático a partir da branch `main`. A Vercel detecta automaticamente o projeto como estático (sem framework) e serve o `index.html` como raiz.

**Configuração atual:** Deploy manual via interface da Vercel.

**Melhoria proposta:** Automatizar o deploy via GitHub Actions após a etapa de testes.

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Supabase (configurado pelo Integrante 1)
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=sua-chave-anonima
```

> **Nunca commite o arquivo `.env` no repositório.** Ele já está no `.gitignore`.
> Para o deploy na Vercel, configure essas variáveis em **Settings → Environment Variables**.

---

## 🤝 Contribuindo

1. Crie uma branch a partir de `main`:
   ```bash
   git checkout -b feature/nome-da-feature
   ```
2. Faça suas alterações e rode os testes:
   ```bash
   npm test && npm run lint
   ```
3. Faça o commit com mensagem descritiva:
   ```bash
   git commit -m "feat: descrição da mudança"
   ```
4. Abra um Pull Request descrevendo as alterações.

### Convenção de commits

| Prefixo | Uso |
|---|---|
| `feat:` | Nova funcionalidade |
| `fix:` | Correção de bug |
| `docs:` | Documentação |
| `style:` | Formatação/UI sem mudança de lógica |
| `refactor:` | Refatoração sem nova feature ou fix |
| `test:` | Adição ou correção de testes |
| `ci:` | Mudanças no pipeline de CI/CD |

---

## 👥 Equipe

| Integrante | Responsabilidade |
|---|---|
| Integrante 1 | Integração com Supabase · Configuração de variáveis de ambiente |
| Integrante 2 | Persistência de dados · Operações de salvar e consultar |
| Integrante 3 | Testes automatizados · Cobertura das novas funcionalidades |
| Integrante 4 | Interface web · Documentação · CI/CD · Deploy |

---

**Versão:** 2.0.0 · **Autor:** João Lucas Trindade Diniz · [Repositório](https://github.com/lucasdiniz19/bootcamp_2-)