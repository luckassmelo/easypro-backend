import { Request, Response } from 'express';
import { MiddlewareInterface } from '../../../app/shared/interface/middleware.interface';
import { CustomError } from '../../../app/shared/error/custom.error';

export const serverErrorMiddleware: MiddlewareInterface = {
  execute: (error: CustomError<unknown>, req: Request, res: Response) => {
    const statusCode: number = error.statusCode || 500;
    const message: string = error.message;
    const stackError = error.stack

    res.status(statusCode).json({
      error: {
        name: error.name,
        message: message,
        statusCode: statusCode,
        info: error.errorProps,
        stack: stackError
      }
    });
  }
}
