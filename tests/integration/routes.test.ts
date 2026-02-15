import { test, expect, describe } from 'vitest';
import request from 'supertest';
import app from '../../src/app.js';

describe('Testes de Redirecionamento e Home', () => {

    describe('Cenário: Navegador (Redirect)', () => {
        const paths = ['/', '/v1'];

        paths.forEach(path => {
            test(`Deve redirecionar para documentação ao acessar ${path} via navegador`, async () => {
                const response = await request(app)
                    .get(path)
                    .set('Accept', 'text/html'); // Simula navegador

                expect(response.status).toBe(302);
                expect(response.header.location).toBe('https://docs.sabiaedu.ia.br/');
            });
        });
    });

    describe('Cenário: API/Backend (JSON)', () => {
        const paths = ['/', '/v1'];

        paths.forEach(path => {
            test(`Deve retornar JSON de boas-vindas ao acessar ${path} via API`, async () => {
                const response = await request(app)
                    .get(path)
                    .set('Accept', 'application/json'); // Simula ferramenta de API

                expect(response.status).toBe(200);
                expect(response.body).toHaveProperty('message', 'Bem-vindo à API Sabiá | Rota principal - Consulte documentação para mais informações');
                expect(response.body).toHaveProperty('infos');
                expect(response.body).toHaveProperty('infos.version');
                expect(response.body).toHaveProperty('infos.status');
                expect(response.body).toHaveProperty('infos.timestamp');
                expect(response.body).toHaveProperty('infos.docs', 'https://docs.sabiaedu.ia.br/');
            });
        });
    });

});