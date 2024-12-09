const express = require("express");
const routes = express.Router();
const alunoController = require("../controllers/alunoController");
const auth = require("../middlewares/usuarioAuth");

routes.get("/alunos", auth, alunoController.listar);

routes.post("/alunos", alunoController.cadastrarPost);


routes.get("/alunos/cadastrar/:matricula?", alunoController.cadastrarGet);

routes.get("/alunos/:matricula", auth, alunoController.detalhar);

routes.get("/alunos/remover/:matricula", auth, alunoController.remover)



module.exports = routes;