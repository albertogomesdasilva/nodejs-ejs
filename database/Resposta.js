const Sequelize = require('sequelize')
const connection = require('./database')

const Resposta = connection.define('respostas', {           // 'perguntas' é o nome da tabela
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {})              // esse json depois da vírgula é um json de opções é opcional, pode deixar assim vazio ou nem colocar as chaves

// Se não existir cria, senão não recria a tabela

Resposta.sync({ force: false }).then(() => {
    console.log('Tabela de Resposta Criada')
})  

module.exports = Resposta