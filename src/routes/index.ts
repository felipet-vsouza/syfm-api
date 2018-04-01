import * as routes from './routes.api';
import * as user from './user.routes';

export function buildRoutes(): Array<routes.ISuperRoute> {
    return [
        new user.UserRoutes()
    ];
}

export * from './routes.api';