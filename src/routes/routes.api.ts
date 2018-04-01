import * as express from 'express';

export interface ISuperRoute {
    superpath: string;
    getRoutes: () => Array<ISubRoute>;
}

export interface ISubRoute {
    subpath: string;
    method: IMethod;
    action: (req: express.Request, res: express.Response) => express.Response;
}

export enum IMethod {
    POST = 'post',
    GET = 'get',
    DELETE = 'delete',
    PUT = 'put'
}