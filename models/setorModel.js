const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const setorSchema = Schema({
    estado: String, 
    nome: String,
    descricao: String
});

module.exports = mongoose.model("Setor", setorSchema);
