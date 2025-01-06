const usuarioModel = require("../models/usuarioModel");
const bcryptjs = require("bcryptjs");

class usuarioController{

    //listagem
    static async listar(req, res){
        const status = req.query.s;
        const usuarios = await usuarioModel.find();
        res.render("usuario/listagem", {usuarios, status});
    }

    //novo usuario
    static async cadastrarPost(req, res){
        const salt = bcryptjs.genSaltSync();
        const hash = bcryptjs.hashSync(req.body.senha, salt);
        
        if (req.body._id) { // Atualizar
            await usuarioModel.findOneAndUpdate({_id: req.body._id}, {
                email: req.body.email,
                nome: req.body.nome,
                senha: hash
            });
            res.redirect("/usuarios?s=3");
        } else { // Cadastrar novo usuário
            const novousuario = new usuarioModel({
                email: req.body.email,
                nome: req.body.nome,
                senha: hash
            });
            
            await novousuario.save();
            res.redirect("/usuarios?s=1");
        }
    }
    

    //cadastro
    static async cadastrarGet(req,res){
        const status = req.query.s;
        const usuario = {};
        res.render("usuario/cadastrar", {status, usuario});
    }

    //detalhar
    static async detalhar(req,res){
        const id = req.params.id;
        const usuario = await usuarioModel.findOne({_id: id});
        res.render("usuario/detalhar", {usuario: usuario});
    }

    //remover
    static async remover(req,res){
        const id = req.params.id;
        await usuarioModel.deleteOne({_id: id });
        res.redirect("/usuarios?s=2");
    }

    static loginGet(req, res){
        const status = req.query.s;
        res.render("usuario/login", {status});
    }

    static async loginPost(req, res){
        const usuario = await usuarioModel.findOne({
            email: req.body.email
        });
        if (usuario == null) { 
            res.redirect("/usuarios/login?s=1");
        } else {
            const senhaCorreta = bcryptjs.compareSync(req.body.senha, usuario.senha);
            if (senhaCorreta) {
                req.session.usuario = usuario.email; 
                const returnTo = req.session.returnTo || '/'; // Página inicial como fallback
                delete req.session.returnTo; // Limpa a URL salva
                res.redirect(returnTo);
            } else {
                res.redirect("/usuarios/login?s=2");
            }
        }
    }
    
 

    
    static logout(req, res){
        req.session.usuario = null;
        res.redirect("usuarios/login");
    }

}

module.exports = usuarioController;