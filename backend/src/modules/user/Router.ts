import express from 'express';
import { AuthMiddleware } from '../../lib/middlewares';
import UserController from './Controller';
import UserValiation from './Validation';

class UserRouter {
  // eslint-disable-next-line no-use-before-define
  private static instance: UserRouter;

  public router: express.Router;

  private readonly userController: UserController;

  private readonly authMiddleware: AuthMiddleware;

  private readonly userValidation: UserValiation;

  private constructor() {
    this.router = express.Router();
    this.userController = new UserController();
    this.authMiddleware = new AuthMiddleware();
    this.userValidation = new UserValiation('userId');
    this.setupRoutes();
  }

  static getInstance(): UserRouter {
    if (!UserRouter.instance) {
      UserRouter.instance = new UserRouter();
    }

    return UserRouter.instance;
  }

  private setupRoutes(): void {
    // Get all users
    this.router.get('/', this.authMiddleware.authenticate, this.userController.getAll);

    // Get user by token in req.header
    this.router.get(
      '/token',
      this.authMiddleware.authenticate,
      AuthMiddleware.extractUser,
      this.userController.getByToken
    );

    // Register new user
    this.router.post('/register', UserValiation.register, this.userController.register);

    // Login existing user
    this.router.post('/login', UserValiation.login, this.userController.login);

    // Get user details by its emailId
    this.router.get('/email/:emailId', UserValiation.email, this.userController.getByEmail);

    // Get user details by its id
    this.router.get(
      '/:userId',
      this.authMiddleware.authenticate,
      this.userValidation.id,
      this.userController.getById
    );

    // Update user details by its id
    this.router.put(
      '/:userId',
      this.authMiddleware.authenticate,
      this.userValidation.id,
      UserValiation.update,
      this.userController.updateById
    );

    // Delete user details by its id
    this.router.delete(
      '/:userId',
      this.authMiddleware.authenticate,
      this.userValidation.id,
      this.userController.deleteById
    );
  }
}

const routerInstance: express.Router = UserRouter.getInstance().router;
export default routerInstance;
