import {SuccessResponse} from '../index';

interface User {
    id: number;
    username: string;
}

test('base', () => {
    const x: SuccessResponse<User> = {
        status: 200,
        data: {
            id: 1,
            username: 'bulba'
        }
    };

    expect(x.status).toBe(200);
    expect(x.data.id).toBe(1);
    expect(x.data.username).toBe('bulba');
});
