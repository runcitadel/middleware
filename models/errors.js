/* eslint-disable no-magic-numbers */
export class NodeError extends Error {
    constructor(message, statusCode) {
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.message = message;
        this.statusCode = statusCode;
    }
}
export class ValidationError extends Error {
    constructor(message, statusCode) {
        super(message);
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.message = message;
        this.statusCode = statusCode || 400;
    }
}
export class BitcoindError extends Error {
    constructor(message, error = undefined, statusCode) {
        super(message);
        this.error = undefined;
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.message = message;
        this.statusCode = statusCode;
        this.error = error;
    }
}
export class LndError extends Error {
    constructor(message, error = undefined, statusCode) {
        super(message);
        this.error = undefined;
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name;
        this.message = message;
        this.statusCode = statusCode;
        this.error = error;
    }
}
