const express = require("express");
const app = express();

// Estou dizendo para o Express usar o EJS como View engine
app.set('view engine','ejs');
app.use(express.static('public'))


 app.get('/',(req, res) => {

    res.render("index")
 })

 app.get('/perguntar', (req, res) => {
    res.render("perguntas")
 })

app.listen(8000,()=>{console.log("App rodando na porta 8000!");});