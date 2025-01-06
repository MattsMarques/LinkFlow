const express = require("express");
const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
require("dotenv/config");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);

const funcionarioModel = require("./models/funcionarioModel");


const setorModel = require("./models/setorModel");


const usuarioModel = require("./models/usuarioModel");

const session = require("express-session");


app.use(session({
    secret: 'linkflow',
    saveUninitialized: false,
    resave: false
}));

const funcionarioRoutes = require("./routes/funcionarioRoutes");
app.use(funcionarioRoutes);

const setorRoutes = require("./routes/setorRoutes");
app.use(setorRoutes);

const usuarioRoutes = require("./routes/usuarioRoutes");
app.use(usuarioRoutes);



app.get("/", function(req, res){
    if(req.session.usuario){
        res.render("index")
    }else{
        res.redirect("/usuarios/login");
}
})

app.get("/funcionarios", async function(req, res){
    
})

app.post("/funcionarios", async function(req, res){

    
})

app.get("/funcionarios/cadastrar", function(req, res){
    
})

app.get("/funcionarios/:cpf", async function(req, res){
    
})

app.listen(process.env.PORT, function(){
    console.log("rodando...");
})

