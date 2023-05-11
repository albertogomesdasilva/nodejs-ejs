const Sequelize = require('sequelize')

const connection = require('./database')

const Pergunta = connection.define('perguntas', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {})              // esse json depois da vírgula é um json de opções é opcional, pode deixar assim vazio ou nem colocar as chaves

// Se não existir cria, senão não recria a tabela

Pergunta.sync({ force: false }).then(() => {
    console.log('Tabela Criada')
})  

module.exports = Pergunta