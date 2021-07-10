/* eslint-disable no-unused-vars, no-magic-numbers */
import * as logger from '../utils/logger.js';
const handleError = (err, request, res, next) => {
    const statusCode = err.statusCode || 500;
    const route = request.url || '';
    const message = err.message || '';
    logger.error(message, route, err.stack);
    res.status(statusCode).json(message);
    return next();
};
export default handleError;
