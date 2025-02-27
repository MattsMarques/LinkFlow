const express = require("express");
const routes = express.Router();
const funcionarioController = require("../controllers/funcionarioController");
const auth = require("../middlewares/usuarioAuth");

routes.get("/funcionarios", auth, funcionarioController.listar);

routes.post("/funcionarios", auth,funcionarioController.cadastrarPost);

routes.get("/funcionarios/cadastrar/:cpf?", auth, funcionarioController.cadastrarGet);

routes.get("/funcionarios/:cpf", auth, funcionarioController.detalhar);

routes.get("/funcionarios/remover/:cpf", auth, funcionarioController.remover)



module.exports = routes;