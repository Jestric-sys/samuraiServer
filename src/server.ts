import express, { Request, Response } from 'express';
import router from './router/router';
import config from './db/config';
import morgan from 'morgan';
import fs from 'fs';
import dayjs from 'dayjs';

const host: string = '127.0.0.3';
const port: number = 3001;

config.addDir();

const app = express();

app.use(express.json());
app.use(morgan('combined', {
    stream: fs.createWriteStream(`./log/${dayjs().format('DD-MM-YYYY')}.log`, {
        flags: 'a'
    })
}));
app.use(morgan('dev'));

app.use('/', router);

app.use((req: Request, res: Response) => {
    res.send('404 not found');
});

app.listen(port, host, () => {
    console.log(`http://${host}:${port}`);
});