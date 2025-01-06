const express = require("express");
const routes = express.Router();
const setorController = require("../controllers/setorController");
const auth = require("../middlewares/usuarioAuth");

routes.get("/setors", auth, setorController.listar);

routes.post("/setors", setorController.cadastrarPost);


routes.get("/setors/cadastrar/:nome?", setorController.cadastrarGet);

routes.get("/setors/:nome", auth, setorController.detalhar);

routes.get("/setors/remover/:nome", auth, setorController.remover)



module.exports = routes;