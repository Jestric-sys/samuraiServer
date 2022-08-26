import express, { Request, Response } from 'express';
import router from './router/router';

const host: string = '127.0.0.3';
const port: number = 3001;

const app = express();

app.use(express.json());
app.use('/', router);

app.use((req: Request, res: Response) => {
    res.send('404 not found');
});

app.listen(port, host, () => {
    console.log(`http://${host}:${port}`);
});