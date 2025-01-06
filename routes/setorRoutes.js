const express = require("express");
const routes = express.Router();
const setorController = require("../controllers/setorController");
const auth = require("../middlewares/usuarioAuth");

routes.get("/setors", auth, setorController.listar);

routes.post("/setors", auth, setorController.cadastrarPost);


routes.get("/setors/cadastrar/:_id?", auth, setorController.cadastrarGet);

routes.get("/setors/:_id", auth, setorController.detalhar);

routes.get("/setors/remover/:_id", auth, setorController.remover)

module.exports = routes;