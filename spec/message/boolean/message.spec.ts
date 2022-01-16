import Type from "../../../dist/message/boolean/message";
import ObjectType from "@alirya/object/boolean/object";
import Message from "../../../dist/message";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe(`compiler compatible`,function() {

    let data : Message = {message:1};

    if(Type(data, ObjectType)) {

        let message : object = data.message;

    } else {

        // @ts-expecerror
        let message : object = data.message;
    }

});

describe("valid", function() {

    it("object", () => {

        let message = {message :{}};
        expect(Type(message, ObjectType)).toBe(true)
    });

    it("class", () => {

        class C {
            constructor(
                public message : object = {}
            ){}
        }

        expect(Type(new C, ObjectType)).toBe(true)
    });
});

describe("invalid value", function() {

    it("object", () => {

        let message = {message :1};
        expect(Type(message, ObjectType)).toBe(false)
    });

    it("class", () => {

        class C {
            constructor(
                public message : number = 1
            ){}
        }

        expect(Type(new C, ObjectType)).toBe(false)
    });
});

