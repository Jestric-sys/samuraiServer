// Зависимости
import mysql from 'mysql2/promise';

type DBConfig = {
    host: string,
    user: string,
    database: string,
    password: string
};

const db: DBConfig = {
    host: 'localhost',
    user: 'root',
    database: 'it_kama',
    password: ''
};

class RequestDB {

    async getFriends() {
        try {
            const conn: any = await mysql.createConnection(db);
            const allFriends: any = await conn.execute('SELECT * FROM friends');
            conn.end();
            return allFriends[0];
        } catch (error: any) {
            console.error(error);
        };
    };

};

export default new RequestDB();