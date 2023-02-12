import Type from '../../dist/boolean/message.js';
import Message from '../../dist/message.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it(`compiler compatible`,function() {

    const data : object = {null:null};

    if(Type(data)) {
        const message : Message = data;
    } else {
        // @ts-expect-error
        const message : Message = data;
    }

});

describe('unvalidated value', function() {

    describe('valid', function() {

        it('string', () => {

            const message = {message : 'string'};
            expect(Type(message)).toBe(true);

        });

        it('integer', () => {

            const message = {message : 1};
            expect(Type(message)).toBe(true);

        });
    });

    describe('invalid', function() {

        it('string', () => {

            const message = {string:'string'};
            expect(Type(message)).toBe(false);

        });

        it('integer', () => {

            const message = {integer:1};
            expect(Type(message)).toBe(false);

        });
    });
});


describe('validated value', function() {

    describe('valid', function() {

        it('object', () => {

            const message = {message :{}};
            expect(Type(message)).toBe(true);
        });

        it('class', () => {

            class C {
                constructor(
                    public message : object = {}
                ){}
            }

            expect(Type(new C)).toBe(true);
        });
    });

    describe('invalid message', function() {

        it('object', () => {

            const message = {};
            expect(Type(message)).toBe(false);
        });

        it('class', () => {

            class C {
                constructor(
                    public string : string = '1'
                ){}
            }

            expect(Type(new C)).toBe(false);
        });
    });
});
