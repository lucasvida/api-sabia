import express from 'express';
import aulasRoute from './aulasRoute.js';
import { browserRedirect } from '../middlewares/browserRedirect.js';
import { notAllowedMethods, notFound } from '../middlewares/handleErros.js';
const mainRoute = express.Router();

mainRoute.get(['/', '/v1'], browserRedirect, (req, res) => {
    res.json({
        message: "Bem-vindo à API Sabiá",
        version: "v1.0.0",
        docs: "https://docs.sabiaedu.ia.br/"
    });
});

mainRoute.use('/v1/aulas', aulasRoute);
mainRoute.use(notAllowedMethods);
mainRoute.use(notFound);

export default mainRoute;