const Candidate = require('../models/Candidate');

module.exports = {
    async register (req, res) {

        const { nome, cargo, dataNascimento, sexo, estadoCivil, CEP, endereco, numero, cidade, bairro, estado,  fone1, fone2, celular, contato, email, identidade, cpf, veiculo, habilitacao
        } = req.body;

        const newCandidate = new Candidate();

        newCandidate.nome = nome;
        newCandidate.cargo=cargo;
        newCandidate.dataNascimento = dataNascimento;
        newCandidate.sexo = sexo;
        newCandidate.estadoCivil = estadoCivil;
        newCandidate.CEP = CEP
        newCandidate.endereco = endereco;
        newCandidate.numero = numero;
        newCandidate.cidade = cidade;
        newCandidate.bairro=bairro;
        newCandidate.estado=bairro;
        newCandidate.fone1=fone1;
        newCandidate.fone2=fone2;
        newCandidate.celular=celular;
        newCandidate.contato=contato;
        newCandidate.email=email;
        newCandidate.identidade=identidade;
        newCandidate.cpf=cpf;
        newCandidate.veiculo=veiculo;
        newCandidate.habilitacao=habilitacao;

        newCandidate.save((err, saveCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('erro no sistema');
            }
            return res.status(200).send(saveCandidate);
        });
    }
};
