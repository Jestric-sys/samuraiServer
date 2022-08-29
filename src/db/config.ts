import fs from 'fs';
import dayjs from 'dayjs';

type ConfigModel = {
    db: {
        host: string,
        user: string,
        database: string,
        password: string
    },
    addDir(): void,
    errorData(error: string, method: string, status: number, module: string): void
};

const config: ConfigModel = {
    db: {
        host: 'localhost',
        user: 'root',
        database: 'it_kama',
        password: '6-BleacH-6'
    },
    addDir: (): void => {
        fs.mkdirSync('./log', { recursive: true });
    },
    errorData: (error: string, method: string, status: number, module: string): void => {
        const messageError: string = `
===================================================================
Дата/Время: ${dayjs().format('YYYY-MM-DD HH:mm:ss')}
Модуль: ${module}
Метод: ${method}
Код ошибки: ${status}
Ошибка: ${error}
===================================================================
        `;

        fs.mkdirSync('./log/error', { recursive: true });
        fs.writeFileSync(`./log/error/${dayjs().format('DD-MM-YYYY')}.log`, `${messageError}\r\n`, {
            flag: 'a'
        });
    }
};

export default config;