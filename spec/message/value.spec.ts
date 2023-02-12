import Value from '../../dist/message/value.js';
import Message from '../../dist/message.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('compiler compatible', function() {

    const message : Message<string> = {message:'string'};

    const result : string = Value(message);

});

it('result equal', function() {

    const message : Message<string> = {message:'string'};

    const result : string = Value(message);

    expect(result).toBe('string');

});

