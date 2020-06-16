const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', '34452599', {
    host: "localhost",
    dialect: 'mysql'
});

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.create({
    titulo: "Yan é foda",
    conteudo: "Yan é foda por que ele é foda"
})

const ususarios = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})
ususarios.create({
    nome:"yan",
    sobrenome:"César",
    idade:20,
    email: "yancesa.07@gmail.com"
})
//Postagem.sync({force: true})
//ususarios.sync({force: true})