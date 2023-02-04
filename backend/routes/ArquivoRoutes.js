const express = require('express');
const router = express.Router()

const ArquivoController = require('../controllers/ArquivoController');
const upload = require('../middleware/upload');

router.post('/arquivos', upload.single('nome'), ArquivoController.adicionarArquivo);
router.get('/arquivos', ArquivoController.listarArquivos);
router.get('/arquivos/:nome', ArquivoController.baixarArquivo);
router.delete('/arquivos/:nome', ArquivoController.excluirArquivo);

module.exports = router