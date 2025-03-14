import { NextFunction, Request, Response } from 'express';
import JWT, { JwtPayload } from 'jsonwebtoken';
import { serverConfig } from '../../config';
import logger from '../logger';
import { SystemResponse } from '../response-handler';

class AuthMiddleware {
  verifyToken: string;

  constructor() {
    this.verifyToken = serverConfig.jwtSecret ?? '';
  }

  authenticate = (req: Request, res: Response, next: NextFunction): void => {
    if (!req.headers.authorization) {
      logger.error('No authorization header found');
      new SystemResponse(res, 'No authorization token provided', {}).unauthorized();
      return;
    }

    const token: string = req.headers.authorization?.split(' ')[1] ?? '';

    if (!token) {
      logger.error('Token not found in authorization header');
      new SystemResponse(res, 'Invalid authorization header format', {}).unauthorized();
      return;
    }

    try {
      JWT.verify(token, this.verifyToken);

      next();
    } catch (error: unknown) {
      logger.error('error in authenticate middleware!', error);
      new SystemResponse(res, 'user authentication failed!', error).unauthorized();
    }
  };

  static extractUser = (req: Request, res: Response, next: NextFunction): void => {
    if (!req.headers.authorization) {
      logger.error('No authorization header found');
      new SystemResponse(res, 'No authorization token provided', {}).unauthorized();
      return;
    }

    const token: string = req.headers.authorization?.split(' ')[1] ?? '';

    if (!token) {
      logger.error('Token not found in authorization header');
      new SystemResponse(res, 'Invalid authorization header format', {}).unauthorized();
      return;
    }

    try {
      const decoded: JwtPayload = JWT.decode(token) as JwtPayload;

      if (!decoded.userId) {
        throw new Error('Invalid token: userId not found');
      }

      req.headers.userId = decoded.userId;
      next();
    } catch (error: unknown) {
      logger.error('error in authenticate middleware!', error);
      new SystemResponse(res, 'user token authentication failed!', error).unauthorized();
    }
  };
}

export default AuthMiddleware;
