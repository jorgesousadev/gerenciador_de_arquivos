const fs = require('fs');
const Arquivo = require('../models/Arquivo');
const baseUrl = "http://localhost:5000/arquivos/";

module.exports = class ArquivoController {

    static async adicionarArquivo(req, res) {

      try {

        await Arquivo.create({
            nome: req.file.originalname,
            url: baseUrl + req.file.originalname,
            caminho: req.file.path,
            tamanho: req.file.size + ' Bytes',
            tipo: req.file.mimetype
        })
            
        if (req.file == undefined) {
          return res.status(400).send({ mensagem: "Envie um arquivo!" });
        }
    
        res.status(200).send({
          mensagem: "Arquivo adicionado com sucesso: " + req.file.originalname
        });
      } catch (err) {
        console.log(err);
    
        res.status(500).send({
          mensagem: `Não foi possível carregar o arquivo: ${req.file.originalname}. ${err}`,
        });
      }
    }

    static async listarArquivos(req, res) {

      Arquivo.findAll().then((result) => res.json(result));
    }

    static baixarArquivo(req, res) {
      const arquivoNome = req.params.nome;
      const diretorio = __basedir + "/public/backup/";

      res.download(diretorio + arquivoNome, arquivoNome, (err) => {
        if (err) {
          res.status(500).send({
            mensagem: "Não foi possível baixar o arquivo. " + err,
          });
        }
      });
    }

    static async excluirArquivo(req, res) {
      const arquivoNome = req.params.nome;
      const diretorio = __basedir + "/public/backup/";

      await Arquivo.destroy({
        where: {
          nome: arquivoNome,
        },
      });

      fs.unlink(diretorio + arquivoNome, (err) => {
        if (err) {
          res.status(500).send({
            mensagem: "Não foi possível excluir o arquivo. " + err,
          });
        }
    
        res.status(200).send({
          mensagem: "O arquivo foi excluído.",
        });
      });
    }
}
