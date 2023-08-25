import { ExpressAdapter } from '../infra/adapter/express.adapter';
import { HttpRouter } from '../infra/api/http-router.api';
import { appConfiguration } from '../infra/config/config';

export class Application {

  private expressAdapter: ExpressAdapter;
  private httpRouter: HttpRouter;

  constructor() {
    this.expressAdapter = new ExpressAdapter();
    this.httpRouter = new HttpRouter(this.expressAdapter);
  }

  start(): void {
    try {
      console.log(`[EasyPRO-Backend] Running on ${appConfiguration.devMode ? 'development' : 'production'} mode`);
      this.expressAdapter.listen(appConfiguration.nodePort);
      this.httpRouter.init();
    } catch (error) {
      console.log('[EasyPRO-Backend] Error on application: ', error);
    }
  }
}
