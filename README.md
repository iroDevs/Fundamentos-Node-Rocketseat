# Todo List API (Vanilla Node.js)

> API de lista de tarefas (ToDo) feita **sem nenhum framework**, apenas com Node.js puro, com importação via CSV. Feita como desafio de aprendizado para reforçar fundamentos de HTTP, manipulação de arquivos e persistência simples.

![Status](https://img.shields.io/badge/status-desenvolvido-green?style=flat) ![Node.js](https://img.shields.io/badge/tech-Node.js-green?style=flat) ![No Framework](https://img.shields.io/badge/framework-none-lightgrey?style=flat)

---

## 📌 Visão Geral

Essa API implementa uma lista de tarefas com operações CRUD básicas e suporte à importação em massa via arquivo CSV. Tudo foi construído com módulos nativos do Node (como `http`, `fs`, `url`, etc.), sem Express, Fastify ou similar — o objetivo foi entender como o protocolo HTTP funciona "por baixo do capô".

---

## 🚀 Funcionalidades

- Criar, listar, editar e remover tarefas (ToDos) via endpoints RESTful  
- Marcar tarefas como concluídas  
- Importação em massa de tarefas a partir de arquivo CSV  
- Armazenamento simples em arquivo JSON (persistência leve)  
- Validações básicas e tratamento de erros  
- Sem dependências externas (Node.js puro)

---

## 🧰 Pré-requisitos

- Node.js (versão 16+ recomendada)
- Terminal / curl / Postman para testar os endpoints

---

## ⚙️ Instalação e execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/NOME_DO_REPO.git
   cd NOME_DO_REPO
