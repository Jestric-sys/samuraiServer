import { SendMessage, GetUsersQuery } from './../models/UsersDBModel';
import { Response } from 'express';
import { URIParamsUsersIdModel } from './../models/URIParamsUsersIdModel';
import { RequestWithQuery } from './../types';
import GetService from '../service/GetService';

class GetController {
    getUsers(req: RequestWithQuery<URIParamsUsersIdModel>, res: Response) {
        let query: string = '';
        for (let key in req.query) {
            query = key;
        };

        switch (query) {
            case 'count': {
                const data: GetUsersQuery = {
                    action: 'count',
                    params: req.query.count
                };
                const request: SendMessage = GetService.getUsers(data);
                return res.send(request);
            };
            case 'page': {
                const data: GetUsersQuery = {
                    action: 'page',
                    params: req.query.page
                };
                const request: SendMessage = GetService.getUsers(data);
                return res.send(request);
            };
            case 'term': {
                const data: GetUsersQuery = {
                    action: 'term',
                    params: req.query.term
                };
                const request: SendMessage = GetService.getUsers(data);
                return res.send(request);
            };
            case 'friend': {
                const data: GetUsersQuery = {
                    action: 'friend',
                    params: req.query.friend
                };
                const request: SendMessage = GetService.getUsers(data);
                return res.send(request);
            };
            default: {
                const data: GetUsersQuery = {
                    action: null,
                    params: null
                };
                const request: SendMessage = GetService.getUsers(data);
                return res.send(request);
            };
        };
    };
};

export default new GetController();