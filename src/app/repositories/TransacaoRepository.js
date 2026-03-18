export class TransacaoRepository {
    constructor(valor = 0) {
        this.registrosDeTransacoes = [];
        this.valor = valor;
    }
    async realizarTransacao(valor, date) {
        if (valor < 0) return

        try {
            this.valor += valor;
            this.registrosDeTransacoes.push({
                valor: `${valor.toFixed(2)}`,
                dataHora: `${date}`
            })

            return {
                msg: 'success'
            }
        } catch (error) {
            console.log(error);
        }
    }
    async deletarTransacoes() {
        try {
            delete this.registrosDeTransacoes;

            return {
                msg: 'success'
            }
        } catch (error) {
            console.log(error);
        }
    }
    async getTransacoes() {

    }
}