import sql from "../config/db.js";

export const sqlAulas = {
    async getAll() {
        try {
            const query = await sql `SELECT * FROM aulas`;
            const result = query.map((aula: any) => ({
                id: aula.id,
                created_at: aula.created_at,
                nome_professor: aula.nome_professor,
                aula: aula.aula,
            }))
            return result;
        }
        catch (error) {
            console.error('Erro ao buscar aulas:', error);
        }
    }
}