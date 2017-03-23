import { Router } from 'express';
import * as TweetController from './controller';

const routes = new Router();

routes.get('/hi', TweetController.hi);

export default routes;