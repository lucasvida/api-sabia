import express from 'express';
import { quizzesControllers, quizFindById } from '../controllers/quizzesControllers.js';

const quizzesRoute = express.Router();

quizzesRoute.route('/').get(quizzesControllers);
quizzesRoute.route('/:id').get(quizFindById);

export default quizzesRoute;
