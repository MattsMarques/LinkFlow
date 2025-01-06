const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const funcionarioSchema = Schema({
    cpf: Number, 
    nome: String,
    setor: String
});

module.exports = mongoose.model("Funcionario", funcionarioSchema);
