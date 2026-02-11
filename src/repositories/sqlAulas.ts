import sql from "../config/db.js";

export const sqlAulas = {
    async getAll() {
        try {
            const result = await sql `SELECT * FROM aulas`;
            return result;
        }
        catch (error) {
            console.error('Erro ao buscar aulas:', error);
        }
    }
}