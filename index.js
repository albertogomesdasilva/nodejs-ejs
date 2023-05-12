const express = require("express");
const app = express();

const bodyParser = require("body-parser")

const connection = require('./database/database')

const Pergunta = require('./database/Pergunta')

connection
    .authenticate()
    .then(() => {
        console.log('Conexão realizada com o banco de dados')
    })
    .catch((msgErro) => {
        console.log('Erro ao Conectar ' + msgErro)
    })



// Estou dizendo para o Express usar o EJS como View engine
app.set('view engine','ejs');
app.use(express.static('public'))

// Body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


app.get('/',(req, res) => {

    Pergunta.findAll({ raw: true, order: [[ 'id', 'DESC']] }).then(perguntas => {
        console.log(perguntas)
        res.render('index', {
            perguntas: perguntas
        })
    })
    .catch((erro) => {
        console.log('Ocorreu um erro ao consultar o banco' + erro)
    })
    // res.render("index")

 })

app.get('/perguntar', (req, res) => {
    res.render("perguntar")
 })

 app.post('/salvarpergunta', (req, res) => {
    var titulo = req.body.titulo
    var descricao = req.body.descricao
    
    // res.send('Formulário recebido: Título: '+ titulo + ' Descrição: ' + descricao)

    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        console.log('Dados Salvos com sucesso')
        res.redirect('/')
    })
 })


app.listen(8000,()=>{console.log("App rodando na porta 8000!");});