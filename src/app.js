import express from 'express';
import { router } from './app/routes/index.js';

export const app = express();

app.use(express.json());
app.use('/api', router);