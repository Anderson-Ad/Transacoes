import { Router } from "express";
import { TransacaoController } from "../controllers/TransacaoController.js";

export const router = Router();
const transacaoController = new TransacaoController();

router.post('/transacao', transacaoController.addTransacao);
router.delete('/transacao', transacaoController.deleteTransacoes);
router.get('/estatisticas', transacaoController.estatisticasTransacoes);