import sql from "../config/db.js";

export const testConnection = {
    async connect() {
        try {
            const result = await sql `SELECT NOW()`;
            console.log('Conectado ao Banco de Dados');
            return 'Conectado ao Banco de Dados';
        }
        catch (error) {
            console.error('Erro ao conectar:', error);
            return 'Erro ao conectar';
        }
        finally {
            await sql.end(); 
        }
    }
}
