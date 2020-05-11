import {getResponseType, isErrorResponseType, ResponseType} from '../index';

test('getResponseType', () => {
    expect(getResponseType({status: 200})).toBe(ResponseType.SUCCESS);
    expect(getResponseType({status: 201})).toBe(ResponseType.SUCCESS);
    expect(getResponseType({status: 204})).toBe(ResponseType.SUCCESS);
    expect(getResponseType({status: 300})).toBe(ResponseType.REDIRECT);
    expect(getResponseType({status: 304})).toBe(ResponseType.REDIRECT);
    expect(getResponseType({status: 400})).toBe(ResponseType.CLIENT_ERROR);
    expect(getResponseType({status: 401})).toBe(ResponseType.CLIENT_ERROR);
    expect(getResponseType({status: 403})).toBe(ResponseType.CLIENT_ERROR);
    expect(getResponseType({status: 500})).toBe(ResponseType.SERVER_ERROR);
    expect(getResponseType({status: 505})).toBe(ResponseType.SERVER_ERROR);
});

test('getResponseType - ResponseType.UNKNOWN', () => {
    expect(getResponseType({status: -1})).toBe(ResponseType.UNKNOWN);
    expect(getResponseType({status: 0})).toBe(ResponseType.UNKNOWN);
    expect(getResponseType({status: 100})).toBe(ResponseType.UNKNOWN);
    expect(getResponseType({status: 199})).toBe(ResponseType.UNKNOWN);
    expect(getResponseType({status: 600})).toBe(ResponseType.UNKNOWN);
    expect(getResponseType({status: 601})).toBe(ResponseType.UNKNOWN);
    expect(getResponseType({status: 1200})).toBe(ResponseType.UNKNOWN);
});

test('isErrorResponseType', () => {
    expect(isErrorResponseType(ResponseType.SUCCESS)).toBe(false);
    expect(isErrorResponseType(ResponseType.REDIRECT)).toBe(false);
    expect(isErrorResponseType(ResponseType.CLIENT_ERROR)).toBe(true);
    expect(isErrorResponseType(ResponseType.SERVER_ERROR)).toBe(true);
    expect(isErrorResponseType(ResponseType.UNKNOWN)).toBe(false);
});
