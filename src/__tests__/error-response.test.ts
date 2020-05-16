import {ErrorResponse} from '../../dist';

test('base', () => {
    const x: ErrorResponse = {
        status: 400,
        message: 'Bad Request'
    };

    expect(x.status).toBe(400);
    expect(x.message).toBe('Bad Request');
    expect(x.error_id).toBe(undefined);
    expect(x.data).toBe(undefined);
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
    expect(x.data).toBe(undefined);
});

test('optional-data', () => {
    const x: ErrorResponse = {
        status: 400,
        message: 'Bad Request',
        data: {code: 'E1024', limits: {min: 4, max: 37}}
    };

    expect(x.status).toBe(400);
    expect(x.message).toBe('Bad Request');
    expect(x.error_id).toBe(undefined);
    expect(x.data).toStrictEqual({code: 'E1024', limits: {min: 4, max: 37}});
});

test('optional-data-specified-type', () => {
    type T = {codes: string[], priority: number};

    const x: ErrorResponse<T> = {
        status: 400,
        message: 'Bad Request',
        data: {codes: ['naruto', 'sasuke'], priority: 10}
    };

    expect(x.status).toBe(400);
    expect(x.message).toBe('Bad Request');
    expect(x.error_id).toBe(undefined);
    expect(x.data).toStrictEqual({codes: ['naruto', 'sasuke'], priority: 10});
});
