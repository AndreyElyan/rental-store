import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RentController from './app/controllers/RentController';
import MovieController from './app/controllers/MovieController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.put('/users', authMiddleware, UserController.update);
routes.post('/rents', authMiddleware, RentController.store);

routes.put('/rents/:id', RentController.update);
routes.get('/movies', MovieController.index);
routes.get('/movies/find', MovieController.show);

export default routes;
