'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var a = 10;

var Test = (function () {
  function Test() {
    var name = arguments.length <= 0 || arguments[0] === undefined ? 'noname' : arguments[0];

    _classCallCheck(this, Test);

    this.name = name;
  }

  _createClass(Test, [{
    key: 'say',
    value: function say() {
      console.log(this.name);
    }
  }]);

  return Test;
})();

var test = new Test('tomonari');
test.say();
