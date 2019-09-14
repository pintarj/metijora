import {Response} from './response';

/**
 * The enumeration of possible response types.
 * @see Response
 */
export enum ResponseType {
    SUCCESS      = 200,
    REDIRECT     = 300,
    CLIENT_ERROR = 400,
    SERVER_ERROR = 500,
    UNKNOWN      = -1
}

/**
 * Returns the type of a specified response.
 * @param response The specific response.
 * @return The type of the response.
 */
export function getResponseType(response: Response): ResponseType {
    switch ((response.status - (response.status % 100)) / 100) {
        case 2:
            return ResponseType.SUCCESS;

        case 3:
            return ResponseType.REDIRECT;

        case 4:
            return ResponseType.CLIENT_ERROR;

        case 5:
            return ResponseType.SERVER_ERROR;

        default:
            return ResponseType.UNKNOWN;
    }
}

/**
 * Tells if a response-type is of error-type or not.
 * @param responseType The specific response-type.
 * @return True if it's of error-type, false otherwise.
 */
export function isErrorResponseType(responseType: ResponseType): boolean {
    return responseType === ResponseType.CLIENT_ERROR || responseType === ResponseType.SERVER_ERROR;
}
