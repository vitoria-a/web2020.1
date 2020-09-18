const DisciplinaModel = require('../models/DisciplinaModel');

class DisciplinaService {
    //retorna um objeto que representa uma disciplina
    static register(req, res) {
        DisciplinaModel.create(req.body)
            .then(
                (disciplina) => {
                    res.status(201).json(disciplina);
                }
            )
            .catch(
                (error) => {
                    res.status(500).json(error)
                }
            )
    }
    //retorna um vetor de disciplinas
    static list(req, res) {
        DisciplinaModel.find()
            .then(
                (disciplinas) => {
                    res.status(201).json(disciplinas);
                }
            )
            .catch(
                (error) => {
                    res.status(500).json(error)
                }
            )
    }
    //retorna uma disciplina atualizada
    static update(req, res) {
        DisciplinaModel.findByIdAndUpdate(req.params.id, req.body, { 'new': true })
        .then(
            (disciplina) => {
                res.status(201).json(disciplina);
            }
        )
        .catch(
            (error) => {
                res.status(500).json(error)
            }
        )
    }
    //retorna a disciplina deletado
    static delete(req, res) {
        DisciplinaModel.findByIdAndRemove(req.params.id)
        .then(
            (disciplina) => {
                res.status(201).json(disciplina);
            }
        )
        .catch(
            (error) => {
                res.status(500).json(error)
            }
        )
    }
    //retorna uma disciplina
    static retrieve(req, res) {
        DisciplinaModel.findById(req.params.id)
        .then(
            (disciplina) => {
                res.status(201).json(disciplina);
            }
        )
        .catch(
            (error) => {
                res.status(500).json(error)
            }
        )
    }
}

module.exports = DisciplinaService;