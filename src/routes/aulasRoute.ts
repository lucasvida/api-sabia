import express from 'express';
import { aulasControllers, classFindById } from '../controllers/aulaControllers.js';


const aulasRoute = express.Router();

aulasRoute.route('/').get(aulasControllers);
aulasRoute.route('/:id').get(classFindById);


export default aulasRoute;