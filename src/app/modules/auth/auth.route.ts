import express from 'express';
import { AuthControllers } from './auth.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import { AuthValidations } from './auth.validation';
const router = express.Router();

router.post(
  '/signup',
  validateRequest(AuthValidations.createUserValidationSchema),
  AuthControllers.createUser,
);

export const AuthRouter = router;
