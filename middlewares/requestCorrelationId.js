import { v4 as createUUID } from 'uuid';
import constants from '../utils/const.js';
import { createNamespace } from 'continuation-local-storage';
const apiRequest = createNamespace(constants.REQUEST_CORRELATION_NAMESPACE_KEY);
function addCorrelationId(request, res, next) {
    apiRequest.bindEmitter(request);
    apiRequest.bindEmitter(res);
    apiRequest.run(() => {
        apiRequest.set(constants.REQUEST_CORRELATION_ID_KEY, createUUID());
        next();
    });
}
export default addCorrelationId;
