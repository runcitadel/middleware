/* eslint-disable no-magic-numbers */
export class NodeError extends Error {
  statusCode?: number;
  constructor (message: string, statusCode?: number) {
      super(message);
      Error.captureStackTrace(this, this.constructor);
      this.name = this.constructor.name;
      this.message = message;
      this.statusCode = statusCode;
  }
}

export class ValidationError extends Error {
  statusCode?: number;
  constructor (message: string, statusCode?: number) {
      super(message);
      Error.captureStackTrace(this, this.constructor);
      this.name = this.constructor.name;
      this.message = message;
      this.statusCode = statusCode || 400;
  }
}

export class BitcoindError extends Error {
  statusCode?: number;
  error: unknown = undefined;
  constructor (message: string, error: unknown = undefined, statusCode?: number) {
      super(message);
      Error.captureStackTrace(this, this.constructor);
      this.name = this.constructor.name;
      this.message = message;
      this.statusCode = statusCode;
      this.error = error;
  }
}

export class LndError extends Error {
  statusCode?: number;
  error: unknown = undefined;
  constructor (message: string, error: unknown = undefined, statusCode?: number) {
      super(message);
      Error.captureStackTrace(this, this.constructor);
      this.name = this.constructor.name;
      this.message = message;
      this.statusCode = statusCode;
      this.error = error;
  }
}
