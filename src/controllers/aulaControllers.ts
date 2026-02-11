import {Request, Response} from 'express';
import { sqlAulas } from '../repositories/sqlAulas.js';

export const aulaControllers = async (req: Request, res: Response) => {
    const aulas = await sqlAulas.getAll();
    res.status(200).json({ result: aulas });
}