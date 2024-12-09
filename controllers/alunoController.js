const alunoModel = require("../models/alunoModel");

class alunoController{

    //listagem
    static async listar(req, res){
        const status = req.query.s;
        const alunos = await alunoModel.find();
        res.render("aluno/listagem", {alunos, status});
    }

    //novo aluno
    static async cadastrarPost(req,res){
        if(req.body._id){//atualizar
            await alunoModel.findOneAndUpdate({_id: req.body._id},{
                matricula: req.body.matricula,
                nome: req.body.nome,
                curso: req.body.curso,
                
            });
            res.redirect("/alunos?s=3");
        } else{ //cadastrar
            const novoaluno = new alunoModel({
                matricula: req.body.matricula,
                nome: req.body.nome,
                curso: req.body.curso
         
        });
        
        await novoaluno.save();
        res.redirect("/alunos?s=1");
     }
    }

    //cadastro
    static async cadastrarGet(req,res){
        const matricula = req.params.matricula;
        let aluno = {}
        if(matricula != undefined){
            aluno = await alunoModel.findOne({matricula});
        }

        res.render("aluno/cadastrar", {aluno});
    }

    //detalhar
        static async detalhar(req,res){
        const matricula = req.params.matricula;
        const aluno = await alunoModel.findOne({matricula});
        res.render("aluno/detalhar", {aluno: aluno});
    }

    //remover
    static async remover(req,res){
        const mat = req.params.matricula;
        await alunoModel.deleteOne({matricula: mat });
        res.redirect("/alunos?s=2")
    }

}

module.exports = alunoController;