const express = require("express");
const routes = express.Router();
const setorController = require("../controllers/setorController");
const auth = require("../middlewares/usuarioAuth");

routes.get("/setores", auth, setorController.listar);

routes.post("/setores", setorController.cadastrarPost);


routes.get("/setores/cadastrar/:nome?", setorController.cadastrarGet);

routes.get("/setores/:nome", auth, setorController.detalhar);

routes.get("/setores/remover/:nome", auth, setorController.remover)

module.exports = routes;