var mongoose = require('mongoose');

//criando o schema, o qual servirá para criar o modelo (collections)
var DisciplinaSchema = mongoose.Schema(
    {
        nome: { type: String, required: true, max: 150 },
        curso: { type: String, required: true, max: 100 },
        capacidade: { type: Number, required: true }
    }
);

var DisciplinaModel = mongoose.model('disciplinas', DisciplinaSchema);

module.exports = DisciplinaModel;