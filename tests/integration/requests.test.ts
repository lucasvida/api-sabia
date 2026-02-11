import { test, expect } from 'vitest';
import sql from '../../src/config/db.js';

test('deve retornar todas as aulas', async () => {
    const result = await sql `SELECT * FROM aulas`;
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
});