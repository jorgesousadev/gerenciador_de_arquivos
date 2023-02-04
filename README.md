
![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

##### Readme não foi terminado ainda....

# Gerenciador de Arquivos

#### 

## Funcionalidades do projeto


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
## 🎲 Rodando o Back End (Servidor - API)

###### 1ª Clone este repositório
* git clone 

###### 2ª Acesse a pasta do projeto no terminal/cmd
* cd 

###### 3ª Vá para a pasta backend
* cd backend

###### 4ª Instale as dependências
* npm install
* ou:
* yarn install

###### 5ª Altere a senha e o usuário do banco de dados do arquivo conn.js, que se localize na pasta db 
* Com base na imagem em baixo coloque dentro das aspas simples o nome do usuário do seu banco, no caso do print abaixo está como admin.
* Com base na imagem em baixo coloque dentro das aspas simples o nome da senha do seu banco de dados, no caso do print foi colocado como admin, por padrão o banco de dados vem sem senha.

* Se você não colocou senha no seu banco de dados, deixe então as aspas simples vazia ```''```.

###### 6ª Crie um banco de dados chamado: sistema
* CREATE DATABASE sistema;

###### 5ª Execute a aplicação 
* npm start

###### 6ª O backend iniciará na porta: 5000 - Acesse: http://localhost:5000/arquivos

## 🎲 Rodando o Front End 

###### 1ª Clone este repositório
* git clone 

###### 2ª Acesse a pasta do projeto no terminal/cmd
* cd 
###### 3ª Vá para a pasta frontend
* cd frontend

###### 4ª Instale as dependências
* npm install
* ou:
* yarn install

###### 5ª Execute a aplicação 
* npm start

###### O frontend iniciará na porta: 3000 - Acesse: http://localhost:3000/


