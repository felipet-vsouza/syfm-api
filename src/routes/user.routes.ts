import * as routes from './routes.api';
import * as express from 'express';

export class UserRoutes implements routes.ISuperRoute {

    public superpath: string = '/user';

    public getRoutes(): Array<routes.ISubRoute> {
        return [
            {
                subpath: '',
                method: routes.IMethod.POST,
                action: (req: express.Request, res: express.Response) => {
                    return res.json({
                        message: 'New user'
                    });
                }
            },
            {
                subpath: '',
                method: routes.IMethod.PUT,
                action: (req: express.Request, res: express.Response) => {
                    return res.json({
                        message: 'Edit user'
                    });
                }
            },
            {
                subpath: '',
                method: routes.IMethod.DELETE,
                action: (req: express.Request, res: express.Response) => {
                    return res.json({
                        message: 'Delete user'
                    });
                }
            },
            {
                subpath: '',
                method: routes.IMethod.GET,
                action: (req: express.Request, res: express.Response) => {
                    return res.json({
                        message: 'Get user'
                    });
                }
            }
        ];
    }

}