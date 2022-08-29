// Зависимости
import mysql from 'mysql2/promise';
import config from './config';

class RequestDB {

    async getFriends() {
        try {
            const conn: any = await mysql.createConnection(config.db);
            const allFriends: any = await conn.execute('SELECT * FROM friends');
            conn.end();
            return allFriends[0];
        } catch (error: any) {
            console.error(error);
        };
    };

};

export default new RequestDB();