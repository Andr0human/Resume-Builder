import express, { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import { ErrorHandlerMiddlerware } from './lib/middlewares';
import { SystemResponse } from './lib/response-handler';
import swaggerSpec from './lib/swagger';
import { resumeRouter, userRouter } from './modules';

const router: express.Router = express.Router();

// health check
router.get('/health', (req: Request, res: Response): void => {
  new SystemResponse(res, 'I am OK', {}).ok();
});

// Swagger documentation
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

router.use('/users', userRouter);

router.use('/resume', resumeRouter);

// Handles '404 not found'
router.use(ErrorHandlerMiddlerware.notFound);

export default router;
