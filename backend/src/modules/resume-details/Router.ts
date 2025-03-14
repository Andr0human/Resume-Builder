import express from 'express';
import { AuthMiddleware } from '../../lib/middlewares';
import ResumeController from './Controller';

class ResumeRouter {
  private static instance: ResumeRouter;

  public router: express.Router;

  private readonly resumeController: ResumeController;

  private readonly authMiddleware: AuthMiddleware;

  private constructor() {
    this.router = express.Router();
    this.authMiddleware = new AuthMiddleware();
    this.resumeController = new ResumeController();
    this.setupRoutes();
  }

  static getInstance(): ResumeRouter {
    if (!ResumeRouter.instance) {
      ResumeRouter.instance = new ResumeRouter();
    }

    return ResumeRouter.instance;
  }

  private setupRoutes(): void {
    this.router.get('/', this.authMiddleware.authenticate, this.resumeController.getAll);

    this.router.get('/:resumeId', this.authMiddleware.authenticate, this.resumeController.getById);

    this.router.post(
      '/',
      this.authMiddleware.authenticate,
      AuthMiddleware.extractUser,
      this.resumeController.create
    );

    this.router.put(
      '/:resumeId',
      this.authMiddleware.authenticate,
      this.resumeController.updateById
    );

    this.router.delete(
      '/:resumeId',
      this.authMiddleware.authenticate,
      this.resumeController.deleteById
    );
  }
}

const routerInstance: express.Router = ResumeRouter.getInstance().router;
export default routerInstance;
