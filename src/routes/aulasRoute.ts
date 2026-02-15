import express, { Request, Response } from 'express';
import { aulaControllers } from '../controllers/aulaControllers.js';


const aulasRoute = express.Router();

aulasRoute.route('/').get(aulaControllers);


export default aulasRoute;