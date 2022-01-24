import Type from '../../dist/boolean/message';
import Message from '../../dist/message';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it(`compiler compatible`,function() {

    let data : object = {null:null};

    if(Type(data)) {
        let message : Message = data;
    } else {
        // @ts-expect-error
        let message : Message = data;
    }

});

describe('unvalidated value', function() {

    describe('valid', function() {

        it('string', () => {

            let message = {message : 'string'};
            expect(Type(message)).toBe(true);

        });

        it('integer', () => {

            let message = {message : 1};
            expect(Type(message)).toBe(true);

        });
    });

    describe('invalid', function() {

        it('string', () => {

            let message = {string:'string'};
            expect(Type(message)).toBe(false);

        });

        it('integer', () => {

            let message = {integer:1};
            expect(Type(message)).toBe(false);

        });
    });
});


describe('validated value', function() {

    describe('valid', function() {

        it('object', () => {

            let message = {message :{}};
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

            let message = {};
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
