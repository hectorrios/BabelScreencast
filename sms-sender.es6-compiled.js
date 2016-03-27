"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by hectorrios on 27/12/15.
 */

var SmsSender = (function () {
    function SmsSender(api) {
        _classCallCheck(this, SmsSender);

        this.apiKey = api;
    }

    _createClass(SmsSender, [{
        key: "send",
        value: function send(message) {
            console.log(message);
        }
    }]);

    return SmsSender;
})();

exports.default = SmsSender;

//# sourceMappingURL=sms-sender.es6-compiled.js.map