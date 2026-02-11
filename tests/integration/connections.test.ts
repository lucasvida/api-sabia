import { test, expect } from 'vitest';
import { testConnection } from '../../src/helpers/testConnection.js';

test('deve conectar ao banco de dados', async () => {
    const result = await testConnection.connect();
    expect(result).toContain('Conectado ao Banco de Dados');
});