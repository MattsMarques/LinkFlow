const setorModel = require("../models/setorModel");

class setorController{

    //listagem
    static async listar(req, res){
        const status = req.query.s;
        const setors = await setorModel.find();
        res.render("setor/listagem", {setors, status});
    }

    //novo setor
    static async cadastrarPost(req,res){
        if(req.body._id){//atualizar
            await setorModel.findOneAndUpdate({_id: req.body._id},{
                descricao: req.body.descricao,
                nome: req.body.nome,
                estado: req.body.estado,
            });
            res.redirect("/setors?s=3");
        } else{ //cadastrar
            const novosetor = new setorModel({
                descricao: req.body.descricao,
                nome: req.body.nome,
                estado: req.body.estado
        });
        
        await novosetor.save();
        res.redirect("/setors?s=1");
     }
    }

    //cadastro
    static async cadastrarGet(req, res) {
    const _id = req.params._id;
    let setor = {};
    if (_id) {
        setor = await setorModel.findOne({ _id });
    }
    res.render("setor/cadastrar", { setor });
}

    //detalhar
        static async detalhar(req,res){
        const _id = req.params._id;
        const setor = await setorModel.findOne({_id});
        res.render("setor/detalhar", {setor: setor});
    }

    //remover
    static async remover(req,res){
        const mat = req.params.nome;
        await setorModel.deleteOne({_id: mat });
        res.redirect("/setors?s=2")
    }

}

module.exports = setorController;