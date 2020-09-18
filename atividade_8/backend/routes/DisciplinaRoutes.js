var express = require('express');
var router = express.Router();
var DisciplinaService = require('../services/DisciplinaService');

//criar
router.post('/register', function (req, res, next) {
    DisciplinaService.register(req, res);
});
//listar
router.get('/list', function (req, res, next) {
    DisciplinaService.list(req, res);
});
//atualizar
router.put('/update/:id', function (req, res, next) {
    DisciplinaService.update(req, res);
});
//deletar
router.delete('/delete/:id', function (req, res, next) {
    DisciplinaService.delete(req, res);
});
//recuperar
router.get('/retrieve/:id', function (req, res, next) {
    DisciplinaService.retrieve(req, res);
});

module.exports = router;