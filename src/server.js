import { app } from "./app.js";
import dotenv from 'dotenv'
dotenv.config();

function startServer() {
    try {
        app.listen(process.env.PORT || 1440, () => {
            console.log(`Servidor inciado na porta ${process.env.PORT}`);
        })
    } catch (error) {
        console.log('Erro ao iniciar o Servidor.');
    }
}

startServer();