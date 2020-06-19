(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-value/memoize", "@dikac/t-value/callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const memoize_1 = require("@dikac/t-value/memoize");
    const callback_1 = require("@dikac/t-value/callback");
    /**
     * Wrap {@link Message} and cache its value
     *
     * suitable to cached value from heave operation
     */
    class Memoize {
        constructor(subject) {
            this.subject = subject;
            let callback = new callback_1.default(() => subject.message, []);
            this.memoized = new memoize_1.default(callback);
        }
        get valid() {
            return this.memoized.valid;
        }
        /**
         * clear cached value
         */
        clear() {
            this.memoized.clear();
        }
        get message() {
            return this.memoized.value;
        }
    }
    exports.default = Memoize;
});
//# sourceMappingURL=memoize.js.map