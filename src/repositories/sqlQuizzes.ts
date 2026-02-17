import sql from "../config/db.js";

export const sqlQuizzes = {
    async getAllQuizzes() {
        try {
            const query = await sql`SELECT * FROM quizzes`;
            const result = query.map((quiz: any) => ({
                id: quiz.id,
                created_at: quiz.created_at,
                nome_professor: quiz.nome_professor,
                quizzes: quiz.quizzes,
            }))
            return result;
        }
        catch (error) {
            console.error('Erro ao buscar quizzes:', error);
        }
    },
    async getQuizById(id: number) {
        try {
            const query = await sql`SELECT * FROM quizzes WHERE id = ${id}`;
            const result = query.map((quiz: any) => ({
                id: quiz.id,
                created_at: quiz.created_at,
                nome_professor: quiz.nome_professor,
                quizzes: quiz.quizzes,
            }))
            return result;
        }
        catch (error) {
            console.error('Erro ao buscar quiz:', error);
        }
    }
}