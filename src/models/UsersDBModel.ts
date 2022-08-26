import { Nullable } from '../types';

export type ItemsType = {
    name: string,
    id: number,
    uniqueUrlName: Nullable<string>,
    photos: {
        small: Nullable<string>,
        large: Nullable<string>
    },
    status: Nullable<string>,
    followed: boolean
};

export type SendMessage = {
    items: ItemsType[],
    count: number,
    error: Nullable<string>
};

export type GetUsersQuery = {
    action: Nullable<string>,
    params: Nullable<string> | boolean
};