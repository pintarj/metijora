import {Response} from './response';

/**
 * The base interface for every error-response.
 * The instances implementing this interface should have `status` numbers like 4xx or 5xx.
 */
export interface ErrorResponse<DataType = any> extends Response {
    /**
     * The optionally specified error identifier. This is intended to help the client-software identifying the occoured
     * error. The error-id codes should look like: "authentication.failed", "request.missing_parameters", ...
     */
    error_id?: string;

    /**
     * The human-readable message that describes the error.
     */
    message: string;

    /**
     * The optionally specified error-specific data. This is intended to help the handler of this error to give
     * additional informations about the occurred error.
     */
    data?: DataType;
}
