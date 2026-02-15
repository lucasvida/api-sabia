import { Request, Response, NextFunction } from 'express';

export const browserRedirect = (req: Request, res: Response, next: NextFunction) => {
    const acceptHeader = req.headers.accept || '';
    const userAgent = req.headers['user-agent'] || '';

    // Verifica se a requisição prefere HTML (comum em navegadores)
    // ou se não é uma ferramenta conhecida de API (Postman, Insomnia, curl, etc.)
    const isBrowser = acceptHeader.includes('text/html') && !/Postman|Insomnia|axios|curl/i.test(userAgent);

    if (isBrowser) {
        return res.redirect('https://docs.sabiaedu.ia.br/');
    }

    next();
};
