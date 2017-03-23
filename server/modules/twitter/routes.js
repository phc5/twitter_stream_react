import { Router } from 'express';
import * as TwitterController from './controller';

const routes = new Router();

routes.get('/hi', TwitterController.hi);

export default routes;