## Backend de um aplicativo 'todo' em NodeJS
### Rodar em localhost
Clonar o repositório
```
    git clone git@github.com:vbrunoro/todo-api.git  
```
      
Instalar dependências
```
    npm install
```

Fazer o build
```
    npm run build
```

Rodar a aplicação
```
    npm start
```

Para subir o banco de dados é preciso ter o docker instalado
```
    docker compose up -d
```

Para sincronizar o schema do Prisma com o banco de dados
```
    npx prisma migrate dev
```

Documentação com swagger
```
    http://localhost:3333/documentation
```
