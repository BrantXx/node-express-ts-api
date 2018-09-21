import * as express from 'express';
import { json } from 'body-parser';

class App {
  public app: express.Application;
  private router: express.Router = express.Router();

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public config(): void {
    this.app.use(json());
  }

  private routes(): void {
    this.router
      .route('/')
      .get((request: express.Request, response: express.Response) => {
        response.send({ message: 'Hello world!' });
      })
      .post((request: express.Request, response: express.Response) => {
        const body = request.body;
        response.send(body);
      })
      .put((request: express.Request, response: express.Response) => {
        const body = request.body;
        response.send(body);
      });

    this.app.use('/', this.router);
  }
}

export default new App().app;
