import {MessageParameters} from '../../../dist/assert/string/message.js';


it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

it('true valid', ()=>{

    expect(MessageParameters({message:1}, true, 'value')).toBe(
        'value "Object" is compatible with Message type.'
    );

});

it('true invalid', ()=>{

    expect(MessageParameters({}, true, 'value')).toBe(
        'value "Object" is compatible with Message type.'
    );

});

it('false valid', ()=>{

    expect(MessageParameters({message:1}, false, 'value')).toBe(
        'value "Object" is not compatible with Message type.'
    );

});

it('false invalid', ()=>{

    expect(MessageParameters({}, false, 'value')).toBe(
        'value "Object" is not compatible with Message type.'
    );

});


it('true invalid CLass', ()=>{

    expect(MessageParameters(new Set(), true, 'argument')).toBe(
        'argument "Set" is compatible with Message type.'
    );

});

it('false valid CLass', ()=>{

    expect(MessageParameters(new Set(), false, 'argument')).toBe(
        'argument "Set" is not compatible with Message type.'
    );

});
