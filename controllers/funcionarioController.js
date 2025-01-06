const funcionarioModel = require("../models/funcionarioModel");

class funcionarioController{

    //listagem
    static async listar(req, res){
        const status = req.query.s;
        const funcionarios = await funcionarioModel.find();
        res.render("funcionario/listagem", {funcionarios, status});
    }

    //novo funcionario
    static async cadastrarPost(req,res){
        if(req.body._id){//atualizar
            await funcionarioModel.findOneAndUpdate({_id: req.body._id},{
                cpf: req.body.cpf,
                nome: req.body.nome,
                setor: req.body.setor,
                
            });
            res.redirect("/funcionarios?s=3");
        } else{ //cadastrar
            const novofuncionario = new funcionarioModel({
                cpf: req.body.cpf,
                nome: req.body.nome,
                setor: req.body.setor
         
        });
        
        await novofuncionario.save();
        res.redirect("/funcionarios?s=1");
     }
    }

    //cadastro
    static async cadastrarGet(req,res){
        const cpf = req.params.cpf;
        let funcionario = {}
        if(cpf != undefined){
            funcionario = await funcionarioModel.findOne({cpf});
        }

        res.render("funcionario/cadastrar", {funcionario});
    }

    //detalhar
        static async detalhar(req,res){
        const cpf = req.params.cpf;
        const funcionario = await funcionarioModel.findOne({cpf});
        res.render("funcionario/detalhar", {funcionario: funcionario});
    }

    //remover
    static async remover(req,res){
        const mat = req.params.cpf;
        await funcionarioModel.deleteOne({cpf: mat });
        res.redirect("/funcionarios?s=2")
    }

}

module.exports = funcionarioController;