import { Request, Response } from 'express';
import { sqlAulas } from '../repositories/sqlAulas.js';

export const aulasControllers = async (req: Request, res: Response) => {
    try {
        const aulas = await sqlAulas.getAll();
        res.status(200).json({ result: aulas });
    }
    catch (error) {
        console.error('Erro ao buscar aulas:', error);
        res.status(500).json({ error: 'Erro ao buscar aulas' });
    }
}

export const classFindById = async (req: Request, res: Response) => {
    try {
        const { id } = req?.params;
        const aula = await sqlAulas.getClassById(id as unknown as number);
        if (aula && (aula as any[]).length > 0) {
            return res.status(200).json({ result: aula });
        }
        res.status(404).json({ error: 'Aula não encontrada' });
    }
    catch (error) {
        console.error('Erro ao buscar aula:', error);
        res.status(500).json({ error: 'Erro ao buscar aula' });
    }
}