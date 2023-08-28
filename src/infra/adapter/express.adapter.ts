import { HttpServerInterface } from '../../app/shared/interface/http-server.interface';
import express, { Express, NextFunction, Request, Response, Router } from 'express';
import compression from 'compression';
import cors from 'cors';
import { serverErrorMiddleware } from '../api/middleware/server-error.middleware';
import { HttpResponseInterface } from '../api/interface/response.interface';


export class ExpressAdapter implements HttpServerInterface {
  private expressInstance: Express;
  private router: Router;

  constructor() {
    this.expressInstance = express();
    this.router = Router();
    this.expressInstance.use(express.json());
    this.expressInstance.use(compression());
    this.expressInstance.use(cors());
    this.expressInstance.use(this.router);
    this.expressInstance.use(serverErrorMiddleware.execute);
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  on(method: string, url: string, callback: Function): void {
    this.router[method](url, async (req: Request, res: Response, next: NextFunction) => {
      try {
        const requestCustom = {
          ...req.params,
          ...req.query,
          ...req.body
        };

        const output = await callback(requestCustom);

        const response: HttpResponseInterface = {
          statusCode: res.statusCode,
          message: res.statusMessage,
          response: output,
        };

        return res.json(response);

      } catch (error: unknown) {
        next(error);
      }
    });
  }


  listen(port: number): void {
    console.info(`[ExpressAdapter] Listening on port ${port}`);
    this.expressInstance.listen(port);
  }

}
