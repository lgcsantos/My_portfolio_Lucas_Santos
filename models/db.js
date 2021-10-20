const Sequelize = require('sequelize')
// CONEXÃO COM BANCO DE DADOS MYSQL
const sequelize = new Sequelize('sistemacadastro','root','Lucas@2127',{
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}