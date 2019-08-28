import {Response} from './response';

/**
 * @template T The type desctibing the data included with a success-response.
 */
export interface SuccessResponse<T> extends Response {
    /**
     * The data included with a success-response.
     */
    data: T;
}
