import * as express from 'express';
import * as routes from './routes';

declare var __DEV__: boolean;

export class Server {

  public app: express.Express;
  public port: number;

  constructor() {
    this.app = express();
    this.port = this.getPort();
    this.setRoutes();
    this.start();
  }

  private start = (): void => {
    this.app.listen(this.port, this.onListen);
  }

  private onListen = (err: any): void => {
    if (err) {
      console.error(err);
      return;
    }

    if (__DEV__) {
      console.log('> in development');
    }

    console.log(`> listening on port ${this.port}`);
  }

  private getPort = (): number => parseInt(process.env.PORT, 10) || 3000;

  private setRoutes = (): void => {
    routes.buildRoutes().forEach((superroute: routes.ISuperRoute) => {
      superroute.getRoutes().forEach((subroute: routes.ISubRoute) => {
        this.app[subroute.method](`${superroute.superpath}${subroute.subpath}`, subroute.action);
      });
    });
  }
}

module.exports = new Server().app;