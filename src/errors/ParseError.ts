import AppError from './AppError.ts';

export default class ParseError extends AppError {
  constructor(message: string, code = 'PARSE_ERROR') {
    super(message, code);
    this.name = 'ParseError';
  }
}