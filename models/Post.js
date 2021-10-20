const db = require('./db')

const Post = db.sequelize.define('contatos', {
    nome: {
        type: db.Sequelize.STRING
    },
       empresa: {
        type: db.Sequelize.STRING
    },
      email:  {
        type: db.Sequelize.STRING
    },
    mensagem: {
        type: db.Sequelize.STRING 
    }
})

 // Post.sync({force: true})

 module.exports = Post