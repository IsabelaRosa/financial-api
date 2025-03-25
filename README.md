# API de Controle Financeiro

Esta é uma API RESTful para controle financeiro, desenvolvida com Node.js, Express.js e MongoDB. Ela permite gerenciar investimentos, incluindo a criação, leitura, atualização e exclusão de registros.

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes softwares instalados:

* **Node.js:** (versão 14 ou superior)
* **npm** (gerenciador de pacotes do Node.js) ou **yarn**
* **MongoDB:** (versão 4.4 ou superior)
* **Postman** ou **cURL:** (para testar as rotas da API)

## Instalação

1.  **Clone o repositório**


2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Configuração do MongoDB:**

    * Certifique-se de que o MongoDB esteja em execução. Se você não tiver o MongoDB instalado, siga as instruções de instalação para o seu sistema operacional:
        * [Instalação do MongoDB](https://www.mongodb.com/docs/manual/installation/)


## Execução

1.  **Inicie o servidor:**

    ```bash
    npm start
    ```

2.  **Acesse a API:**

    * A API estará disponível em `http://localhost:3000`.
    * Use o Postman ou cURL para testar as rotas da API.

## Rotas da API

* **GET /investimentos:** Lista todos os investimentos.
* **POST /investimentos:** Cria um novo investimento.
* **PATCH /investimentos/:id:** Atualiza um investimento existente.
* **DELETE /investimentos/:id:** Exclui um investimento.

## Exemplo de Uso (Postman)

* **Criar um investimento:**

    * Método: POST
    * URL: `http://localhost:3000/investimentos`
    * Corpo (JSON):

        ```json
        {
          "name": "Tesouro Selic",
          "type": "título",
          "value": 1500,
          "date": "25/10/2023"
        }
        ```

* **Listar investimentos:**

    * Método: GET
    * URL: `http://localhost:3000/investimentos`

* **Atualizar investimento:**

    * Método: PATCH
    * URL: `http://localhost:3000/investimentos/:id`
    * Corpo (JSON):

        ```json
        {
          "value": 1600
        }
        ```

* **Excluir investimento:**

    * Método: DELETE
    * URL: `http://localhost:3000/investimentos/:id`
