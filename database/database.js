const Sequelize = require('sequelize')

const connection = new Sequelize('perguntas-e-respostas', 'root', '123456', {
    host: 'localhost',
    dialect:'mysql'
})


module.exports = connection