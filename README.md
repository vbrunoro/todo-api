### Rodar em localhost
    # Clonar o repositório
    ```sh
    git clone git@github.com:vbrunoro/todo-api.git
    cd todo-api
     ```

    # Instalar dependências
    ```sh
    npm install
     ```

    # Fazer o build
    ```sh
    npm run build
     ```

    # Rodar a aplicação
    ```sh
    npm start
     ```

    # Para subir o banco de dados é preciso ter o docker instalado
    ```sh
    docker compose up -d
     ```

    # Para sincronizar o schema do Prisma com o banco de dados
    ```sh
    npx prisma migrate dev
     ```