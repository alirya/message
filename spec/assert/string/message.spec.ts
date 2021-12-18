import Message from "../../../dist/assert/string/message-parameters";


it("enable console log", () => { spyOn(console, 'log').and.callThrough();});

it('true valid', ()=>{

    expect(Message({message:1}, true, 'value')).toBe(
        'value "Object" is compatible with Message type.'
    );

});

it('true invalid', ()=>{

    expect(Message({}, true, 'value')).toBe(
        'value "Object" is compatible with Message type.'
    );

});

it('false valid', ()=>{

    expect(Message({message:1}, false, 'value')).toBe(
        'value "Object" is not compatible with Message type.'
    );

});

it('false invalid', ()=>{

    expect(Message({}, false, 'value')).toBe(
        'value "Object" is not compatible with Message type.'
    );

});


it('true invalid CLass', ()=>{

    expect(Message(new Set(), true, 'argument')).toBe(
        'argument "Set" is compatible with Message type.'
    );

});

it('false valid CLass', ()=>{

    expect(Message(new Set(), false, 'argument')).toBe(
        'argument "Set" is not compatible with Message type.'
    );

})
