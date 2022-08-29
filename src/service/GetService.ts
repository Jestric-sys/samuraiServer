import { items } from './../db/users';
import { GetUsersQuery } from '../models/UsersDBModel';
import { SendMessage, ItemsType, ItemsDBType } from './../models/UsersDBModel';
import RequestDB from '../db/db';

class GetService {

    async getFriends(data: GetUsersQuery): Promise<SendMessage> {
        switch (data.action) {
            case 'count': {
                if (data.params !== null) {
                    const items: any = await RequestDB.getFriends();
                    const send: SendMessage = {
                        items: [...items.slice(0, +data.params)],
                        count: items.length,
                        error: null
                    };
                    if (+data.params > 100) {
                        send.items = [];
                        send.error = 'Max page size is 100 items';
                    };
                    return send;
                };
            };
            case 'page': {
                if (data.params !== null) {
                    const items: any = await RequestDB.getFriends();
                    const page: string = data.params + '0';
                    const itemsPage: number = +page - 5;
                    const send: SendMessage = {
                        items: [...items.slice(+page - 5, itemsPage === 0 ? 5 : +page + 5)],
                        count: items.length,
                        error: null
                    };
                    if (send.items.length === 0) {
                        send.error = 'Page is not found';
                    };
                    return send;
                };
            };
            case 'term': {
                if (data.params !== null) {
                    const items: any = await RequestDB.getFriends();
                    const item: ItemsType[] = items.filter((u: any) => u.name.toLowerCase().indexOf(data.params) > -1);
                    const send: SendMessage = {
                        items: [...item],
                        count: item.length,
                        error: null
                    };
                    if (send.items.length === 0) {
                        send.error = 'Users is not found';
                    };
                    return send;
                };
            };
            case 'friend': {
                if (data.params !== null) {
                    const items: any = await RequestDB.getFriends();
                    const bol: boolean = data.params === 'true' ? true : false;
                    const item: ItemsType[] = items.filter((u: ItemsType) => u.followed === bol);
                    const send: SendMessage = {
                        items: [...item],
                        count: item.length,
                        error: null
                    };
                    if (send.items.length === 0) {
                        send.error = 'Not friends =(';
                    };
                    if (send.items.length === 0 && bol === false) {
                        send.error = 'Full friends =)';
                    };
                    return send;
                };
            };
            default: {
                const friends: any = await RequestDB.getFriends();
                const items: ItemsType[] = friends.map((f: ItemsDBType) => {
                    return {
                        name: f.name,
                        id: f.id,
                        uniqueUrlName: f.uniqueUrlName,
                        photos: {
                            small: f.small,
                            large: f.large
                        },
                        status: f.status,
                        followed: f.followed === 0 ? false : true
                    }
                });
                const send: SendMessage = {
                    items: [...items.slice(0, 5)],
                    count: items.length,
                    error: null
                };
                return send;
            };
        };
    };

    getUsers(data: GetUsersQuery): SendMessage {
        switch (data.action) {
            case 'count': {
                if (data.params !== null) {
                    const send: SendMessage = {
                        items: [...items.slice(0, +data.params)],
                        count: items.length,
                        error: null
                    };
                    if (+data.params > 100) {
                        send.items = [];
                        send.error = 'Max page size is 100 items';
                    };
                    return send;
                };
            };
            case 'page': {
                if (data.params !== null) {
                    const page: string = data.params + '0';
                    const itemsPage: number = +page - 10;
                    const send: SendMessage = {
                        items: [...items.slice(+page - 10, itemsPage === 0 ? 10 : +page + 10)],
                        count: items.length,
                        error: null
                    };
                    if (send.items.length === 0) {
                        send.error = 'Page is not found';
                    };
                    return send;
                };
            };
            case 'term': {
                if (data.params !== null) {
                    const item: ItemsType[] = items.filter((u: any) => u.name.indexOf(data.params) > -1);
                    const send: SendMessage = {
                        items: [...item],
                        count: item.length,
                        error: null
                    };
                    if (send.items.length === 0) {
                        send.error = 'Users is not found';
                    };
                    return send;
                };
            };
            case 'friend': {
                if (data.params !== null) {
                    const bol: boolean = data.params === 'true' ? true : false;
                    const item: ItemsType[] = items.filter((u: ItemsType) => u.followed === bol);
                    const send: SendMessage = {
                        items: [...item],
                        count: item.length,
                        error: null
                    };
                    if (send.items.length === 0) {
                        send.error = 'Not friends =(';
                    };
                    if (send.items.length === 0 && bol === false) {
                        send.error = 'Full friends =)';
                    };
                    return send;
                };
            };
            default: {
                const send: SendMessage = {
                    items: [...items.slice(0, 10)],
                    count: items.length,
                    error: null
                };
                return send;
            };
        };
    };
};

export default new GetService();