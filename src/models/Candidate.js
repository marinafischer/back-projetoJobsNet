const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema ({
    nome: { type: String, unique:false, required:true},
    cargo: { type: String, unique:false, required:false},
    dataNascimento: { type: String, unique:false, required:true},
    sexo: { type: String, unique:false, required : false },
    estadoCivil: {type: String, unique:false, required : false},
    CEP: {type: Number, unique:false, required : true},
    endereco: {type: String, unique:false, required : true},
    numero: {type: Number, unique:false, required : true},
    cidade: {type: String, unique:false, required : true},
    bairro: {type: String, unique:false, required : true},
    estado: {type: String, unique:false, required : true},
    fone1: {type: Number, unique:false, required : false},
    fone2: {type: Number, unique:false, required : false},
    celular: {type: Number, unique:false, required : true},
    contato: {type: String, unique:false, required : false},
    email: {type: String, unique:true, required : true },
    identidade: {type: Number, unique:true, required : false},
    cpf: {type: Number, unique:true, required : true},
    veiculo: {type: String, unique:false, required : false},
    habilitacao: {type: String, unique:false, required : false}
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);
