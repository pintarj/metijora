import { ErrorResponse } from './error-response';

/**
 * This class is meant to help throwing down the functions's call stack a specific custom error-response using the
 * throw-exception system. This is particullary useful in design of servers when you have an response interceptor, that
 * catching an instance of this class just returns the error-response object.
 */
export class ErrorResponseException extends Error {
    /**
     * Create a new error-response-exception wrapping a specified error-response object.
     * @param error_response The specific object to wrap.
     */
    public constructor(public error_response: ErrorResponse) {
        super(error_response.message);
    }
}
