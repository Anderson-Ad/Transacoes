export class TransacaoRepository {
    constructor(valor = 0) {
        this.registrosDeTransacoes = [];
        this.valor = valor;
    }
    async realizarTransacao(valor, date) {
        if (valor < 0) return

        try {
            this.registrosDeTransacoes.push({
                valor: `${valor.toFixed(2)}`,
                dataHora: `${date}`
            })

            return {
                valor: valor.toFixed(2),
                dataHora: date,
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
        try {
            const agora = new Date();
            const sessentaSegundos = agora - (60 * 1000);
            const ultimasTransacoes = this.registrosDeTransacoes.filter(transacao => {
                const dataTransacao = new Date(transacao.dataHora).getTime();
                return dataTransacao >= sessentaSegundos;
            });
            if (ultimasTransacoes.length === 0) {
                console.log('Nenhuma transação nos últimos 60 segundos.');
                return;
            }
            const valores = ultimasTransacoes.map(valores => Number(valores.valor));
            const quantidadeDeTransacoes = ultimasTransacoes.length;
            const totalValores = valores.reduce((total, valor) => total + valor, 0);
            const mediaValores = totalValores / quantidadeDeTransacoes
            console.log("************************* ÚLTIMAS TRANSAÇÕES NOS ÚLTIMOS 60 SEGUNDOS *************************");
            console.log(`Quantidade de transações: ${quantidadeDeTransacoes}`);
            console.log(`Soma total das transações: ${totalValores.toFixed(2)}`);
            console.log(`Média dos valores: ${mediaValores.toFixed(2)}`);
            console.log(`Menor valor transacionado: ${Math.min(...valores).toFixed(2)}`);
            console.log(`Maior valor transacionado: ${Math.max(...valores).toFixed(2)}`);
            console.log("**********************************************************************************************");
        } catch (error) { 
            console.log(error);
        }
    }
}