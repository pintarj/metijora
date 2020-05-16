import {ErrorResponse} from '../../dist';

test('base', () => {
    const x: ErrorResponse = {
        status: 400,
        message: 'Bad Request'
    };

    expect(x.status).toBe(400);
    expect(x.message).toBe('Bad Request');
    expect(x.error_id).toBe(undefined);
});

test('optional-error-id', () => {
    const x: ErrorResponse = {
        status: 400,
        message: 'Bad Request',
        error_id: 'bad_request'
    };

    expect(x.status).toBe(400);
    expect(x.message).toBe('Bad Request');
    expect(x.error_id).toBe('bad_request');
});
