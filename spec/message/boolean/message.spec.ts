import Type from '../../../dist/message/boolean/message.js';
import ObjectType from '@alirya/object/boolean/object.js';
import Message from '../../../dist/message.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it(`compiler compatible`,function() {

    const data : Message = {message:1};

    if(Type(data, ObjectType)) {

        const message : object = data.message;

    } else {

        // @ts-expect-error
        const message : object = data.message;
    }

});

describe('valid', function() {

    it('object', () => {

        const message = {message :{}};
        expect(Type(message, ObjectType)).toBe(true);
    });

    it('class', () => {

        class C {
            constructor(
                public message : object = {}
            ){}
        }

        expect(Type(new C, ObjectType)).toBe(true);
    });
});

describe('invalid value', function() {

    it('object', () => {

        const message = {message :1};
        expect(Type(message, ObjectType)).toBe(false);
    });

    it('class', () => {

        class C {
            constructor(
                public message : number = 1
            ){}
        }

        expect(Type(new C, ObjectType)).toBe(false);
    });
});

