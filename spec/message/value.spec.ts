import Value from '../../dist/message/value';
import Message from '../../dist/message';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatible', function() {

    let message : Message<string> = {message:'string'};

    let result : string = Value(message);

});

it('result equal', function() {

    let message : Message<string> = {message:'string'};

    let result : string = Value(message);

    expect(result).toBe('string');

});

