const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')
const path = require("path")


// config
  // Template Engine
     app.engine('handlebars', handlebars({defaultLayout: 'main'}))
     app.set('view engine', 'handlebars')

     // body parser
     app.use(bodyParser.urlencoded({extended: false}))
     app.use(bodyParser.json())

// Public
     app.use(express.static(path.join(__dirname,"public")))
     
// ROTAS 
app.get('/', function(req, res){
    res.render('home')
})

app.get('/contatos', function(req, res){
    res.render('contatos')
})

app.get('/especialidades', function(req, res){
    res.render('especialidades')
})

app.get('/qualificacoes', function(req, res){
    res.render('qualificacoes')
})

app.get('/home', function(req, res){
    res.render('home')
})

app.get('/contatos', function(req, res){
    res.render('contatos')
})

app.post('/contatos', function(req, res){
    Post.create({
        nome: req.body.nome,
        empresa: req.body.empresa,
        email: req.body.email,
        mensagem: req.body.mensagem
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send("Houve um erro:"+ erro)
    })
})

//PORTA SERVIDOR
app.listen(8080, function(){
    console.log("Servidor rodando na url http://localhost:8080");
});