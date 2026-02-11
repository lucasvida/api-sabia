import postgres from 'postgres';
import env from 'dotenv';

env.config();

const connectionString = process.env.DATABASE_URL as string;
const sql = postgres(connectionString);

export default sql;