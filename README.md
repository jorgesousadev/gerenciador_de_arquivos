# Gerenciador de Arquivos

#### É um gerenciador de arquivos simples que permite fazer upload de diversos arquivos.

## Funcionalidades do projeto

- É possível adicionar, excluir e baixar arquivos.

![](/Screenshot/projeto.png)

## 🛠 Tecnologias e Ferramentas usadas na construção do projeto:

- [Visual Studio Code](https://code.visualstudio.com/)

##### Backend
- [MariaDB](https://mariadb.org/)
- [Postman](https://www.postman.com/)
- [Node.js](https://nodejs.org/en/)
- Dependências do Projeto em NodeJS(package.json)  

```
dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "multer": "^1.4.5-lts.1",
    "mysql2": "^3.0.1",
    "nodemon": "^2.0.20",
    "sequelize": "^6.28.0"
  }
```

##### Frontend
- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- Dependências do Projeto em ReactJS(package.json)  
```
"dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.2.4",
    "bootstrap": "^5.2.3",
    "react": "^18.2.0",
    "react-bootstrap": "^2.7.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.7.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
```
## 🎲 Rodando o Back End 

###### 1ª Clone este repositório
* git clone https://github.com/jorgesousadev/gerenciador_de_arquivos.git

###### 2ª Acesse a pasta do projeto no terminal/cmd
* cd gerenciador_de_arquivos

###### 3ª Vá para a pasta backend
* cd backend

###### 4ª Instale as dependências
* npm install
* ou:
* yarn install

###### 5ª Altere a senha e o usuário do banco de dados do arquivo conn.js, que se localize na pasta db:

* Com base na imagem em baixo coloque dentro das aspas simples o nome do usuário do seu banco, no caso do print abaixo está como admin.

![](/Screenshot/print.png)

* Com base na imagem em baixo coloque dentro das aspas simples o nome da senha do seu banco de dados, no caso do print foi colocado como admin, por padrão o banco de dados vem sem senha.

![](/Screenshot/print2.png)

* Se você não colocou senha no seu banco de dados, deixe então as aspas simples vazia ```''```.

![](/Screenshot/print3.png)

###### 6ª Crie duas pastas camanhas public e backup:
* Primeiro comece criando a pasta public dentro da pasta backend

![](/Screenshot/print4.png)

* Agora crie a pasta backup dentro da pasta backup

![](/Screenshot/print5.png)

###### 7ª Crie um banco de dados chamado: sistema
* CREATE DATABASE sistema;

###### 8ª Execute a aplicação 
* npm start

###### O backend iniciará na porta: 5000 - Acesse: http://localhost:5000/arquivos

## 🎲 Rodando o Front End 

###### 1ª Clone este repositório
* git clone https://github.com/jorgesousadev/gerenciador_de_arquivos.git

###### 2ª Acesse a pasta do projeto no terminal/cmd
* cd gerenciador_de_arquivos

###### 3ª Vá para a pasta frontend
* cd frontend

###### 4ª Instale as dependências
* npm install
* ou:
* yarn install

###### 5ª Execute a aplicação 
* npm start

###### O frontend iniciará na porta: 3000 - Acesse: http://localhost:3000/


