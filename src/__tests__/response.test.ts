import {Response} from '../../dist';

test('base', () => {
    const x: Response = {
        status: 200
    };

    expect(x.status).toBe(200);
});
