import express from 'express';
import { AuthControllers } from './auth.controller';
import { validateData } from '../../middlewares/validateData';
import { AuthValidations } from './auth.validation';
const router = express.Router();

router.post(
  '/signup',
  validateData(AuthValidations.createUserValidationSchema),
  AuthControllers.createUser,
);

export const AuthRouter = router;
