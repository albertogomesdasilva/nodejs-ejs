# Sistema em NodeJS com view ejs

echo "# nodejs-ejs" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/albertogomesdasilva/nodejs-ejs.git
git push -u origin main

# Como fazer include

<%- include('./partials/header.ejs') %>

# Para receber os dados de um formulário instalamos a biblioteca do express: body-parser
npm install body-parser --save

# Para Salvar dados no Banco de Dados instalamos o Sequelize (pode criar também as tabelas através de Models)
npm install --save sequelize

# adicionamos a biblioteca do mysql
npm install --save mysql2

# Em caso de erro de conexão com o banco de dados insira linha abaixo no banco de dados

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456'

### FORMAÇÃO NODEJS - AULA 45