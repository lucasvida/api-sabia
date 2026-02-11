import express from 'express';
import aulasRoute from './aulasRoute.js';

const mainRoute = express.Router();

mainRoute.use('/v1/aulas', aulasRoute);

export default mainRoute;