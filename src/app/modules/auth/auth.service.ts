import { TUser } from './auth.interface';
import { User } from './auth.model';

const createUserIntoDB = async (payload: TUser) => {
  console.log(payload);
  const result = await User.create(payload);
  return result;
};

export const AuthServices = {
  createUserIntoDB,
};
