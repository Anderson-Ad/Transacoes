import { TransacaoRepository } from "../repositories/TransacaoRepository.js"

export class TransacaoController {
    constructor() {
        this.transacaoRepository = new TransacaoRepository();
    }

    addTransacao = async (req, res) => {
        try {
            const date = new Date().toISOString();
            const transacao_data = req.body.valor;
            const colunasPermitidas = ['valor'];
            
            const dadosInvalidos = Object.keys(transacao_data).filter(dados => !colunasPermitidas.includes(dados));
            if (dadosInvalidos.length > 0) return res.status(400).json();

            if (typeof transacao_data !== "number") return res.status(400).json();
            if (transacao_data < 0) return res.status(422).json();

            const result = await this.transacaoRepository.realizarTransacao(transacao_data, date);

            return res.status(201).json(result);
        } catch (error) { 
            console.log('Houve um erro inesperado');
        }
    }
    deleteTransacoes = async (req, res) => {
        try {
            const result = await this.transacaoRepository.deletarTransacoes();

            return res.status(200).json();
        } catch (error) {
            console.log('Houve um erro inesperado');
        }
    }
    estatisticasTransacoes = async (req, res) => {
        try {
            const result = await this.transacaoRepository.getTransacoes();

            return res.status(200).json(result);
        } catch (error) {

        }
    }
}