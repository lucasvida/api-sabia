import { Request, Response } from "express";

export const notAllowedMethods = (req: Request, res: Response) => {
    const { method } = req;
    res.status(405).json({
        message: `Método ${method} não permitido para esta rota`,
        status: 405,
        timestamp: new Date().toISOString(),
        docs: "https://docs.sabiaedu.ia.br/"
    });
}

export const notFound = (req: Request, res: Response) => {
    res.status(404).json({
        message: "Rota não encontrada"
    });
}