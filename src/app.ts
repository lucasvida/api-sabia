import express from 'express';
import mainRoute from './routes/mainRoute.js';
import env from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
env.config();
const app = express();


app.use(express.json());
app.use(cors());
app.use(helmet());

//Rotas principais
app.use('/', mainRoute);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port ${process.env.PORT}`);
});

export default app;