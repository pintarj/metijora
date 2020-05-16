import {ErrorResponseException} from '../../dist';

function create_error_response_exception(): ErrorResponseException {
    return new ErrorResponseException({
        status: 400,
        message: 'Bad Request',
        error_id: 'request.bad',
        data: {priority: 5}
    });
}

test('base', () => {
    const x = create_error_response_exception();
    expect(x.message).toEqual('Bad Request');
    expect(x.error_response.status).toEqual(400);
    expect(x.error_response.message).toEqual('Bad Request');
    expect(x.error_response.error_id).toEqual('request.bad');
    expect(x.error_response.data).toBeDefined();
    expect(x.error_response.data.priority).toEqual(5);
});

test('throwing-error', () => {
    const x = create_error_response_exception();
    const f = () => { throw x };
    expect(f).toThrow(create_error_response_exception());
});
