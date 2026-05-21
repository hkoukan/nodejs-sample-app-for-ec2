import express, { Application } from 'express';
import router from './routes/index';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router);

export default app;
