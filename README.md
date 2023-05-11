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

