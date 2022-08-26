import { Request } from 'express';

export type Nullable<T> = T | null;

export type RequestWithQuery<T> = Request<{}, {}, {}, T>;