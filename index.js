const express = require("express");
const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
require("dotenv/config");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);
const alunoModel = require("./models/alunoModel");
const alunoRoutes = require("./routes/alunoRoutes");

app.use(alunoRoutes);

const usuarioModel = require("./models/usuarioModel");
const usuarioRoutes = require("./routes/usuarioRoutes");

const session = require("express-session");

app.use(usuarioRoutes);

app.use(session({
    secret: 'ifpe',
    saveUninitialized: false,
    resave: false
}));

app.get("/", function(req, res){
    if(req.session.usuario){
        res.render("index")
    }else{
        res.redirect("/usuarios/login");
}
})

app.get("/alunos", async function(req, res){
    
})

app.post("/alunos", async function(req, res){

    
})

app.get("/alunos/cadastrar", function(req, res){
    
})

app.get("/alunos/:matricula", async function(req, res){
    
})

app.listen(process.env.PORT, function(){
    console.log("rodando...");
})

