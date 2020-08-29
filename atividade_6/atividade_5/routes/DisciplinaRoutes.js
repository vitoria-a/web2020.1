var express = require('express');
var router = express.Router();

var disciplinaService = require('../services/DisciplinaService');

router.get('/list', function(req, res, next) {
    return res.json(disciplinaService.list());
});

router.post('/register', function(req, res, next){
    return res.json(disciplinaService.register(req.body));
});

router.put('/update/:id', function(req, res, next){
    return res.json(disciplinaService.update(req.params.id, req.body));
});

router.delete('/delete/:id', function (req, res, next){
    const ok = disciplinaService.delete(req.params.id);
    if (ok) return res.json({"sucess": true});
    else return res.json({"sucess": false});
});

router.get('/retrieve/:id', function (req, res, next){
    return res.json(disciplinaService.retrieve(req.params.id));
});

module.exports = router;