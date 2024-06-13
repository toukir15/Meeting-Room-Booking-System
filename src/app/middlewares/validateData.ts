import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

export const validateData = (schema: AnyZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({ body: req.body });
    } catch (err) {
      next(err);
      console.log(err);
    }
    // next();
  };
};
