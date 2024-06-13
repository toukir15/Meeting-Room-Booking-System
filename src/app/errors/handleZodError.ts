import { ZodError, ZodIssue } from 'zod';
import { TErrorSource } from '../interface/error';

export const handleZodError = (err: ZodError) => {
  const stausCode = 400;
  const errorSource: TErrorSource = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue.path[issue.path.length - 1],
      message: issue.message,
    };
  });
  return {
    stausCode,
    message: 'Zod validation error.',
    errorSource,
  };
};
