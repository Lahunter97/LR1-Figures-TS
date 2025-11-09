import AppError from './AppError.ts';

export default class ValidationError extends AppError {
  constructor(message: string, code = 'VALIDATION_ERROR') {
    super(message, code);
    this.name = 'ValidationError';
  }
}
