import { Request, Response } from 'express';
import { sqlQuizzes } from '../repositories/sqlQuizzes.js';

export const quizzesControllers = async (req: Request, res: Response) => {
    try {
        const quizzes = await sqlQuizzes.getAllQuizzes();
        res.status(200).json({ result: quizzes });
    }
    catch (error) {
        console.error('Erro ao buscar quizzes:', error);
        res.status(500).json({ error: 'Erro ao buscar quizzes' });
    }
}

export const quizFindById = async (req: Request, res: Response) => {
    try {
        const { id } = req?.params;
        const quiz = await sqlQuizzes.getQuizById(id as unknown as number);
        if (quiz && (quiz as any[]).length > 0) {
            return res.status(200).json({ result: quiz });
        }
        res.status(404).json({ error: 'Quiz não encontrado' });
    }
    catch (error) {
        console.error('Erro ao buscar quiz:', error);
        res.status(500).json({ error: 'Erro ao buscar quiz' });
    }
}