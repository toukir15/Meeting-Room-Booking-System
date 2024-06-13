import { Request, Response } from 'express';
import { AuthServices } from './auth.service';

const createUser = async (req: Request, res: Response) => {
  try {
    console.log('object');
    const userData = req?.body;
    const result = await AuthServices.createUserIntoDB(userData);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};

export const AuthControllers = {
  createUser,
};
