var react = require('react');
var formik = require('formik');
var scrollToElement = require('scroll-to-element');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var scrollToElement__default = /*#__PURE__*/_interopDefaultLegacy(scrollToElement);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

var ErrorScroll = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ErrorScroll, _Component);

  function ErrorScroll() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.getFirstElementErrors = function (errors, firstNameValue) {
      var firstError = errors[firstNameValue];

      if (typeof firstError === "object" && !Array.isArray(firstError)) {
        var keysLayerOne = Object.keys(firstError);
        return firstElement + "-" + keysLayerOne[0];
      }

      if (typeof firstError === "object" && Array.isArray(firstError)) {
        for (var i = 0; i < firstError.length; i++) {
          if (firstError[i]) {
            var elements = Object.keys(firstError[i]);
            return firstNameValue + "[" + i + "]." + elements[0];
          }
        }
      }

      return firstNameValue;
    };

    return _this;
  }

  var _proto = ErrorScroll.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _prevProps$formik = prevProps.formik,
        isSubmitting = _prevProps$formik.isSubmitting,
        isValidating = _prevProps$formik.isValidating,
        errors = _prevProps$formik.errors;
    var keys = Object.keys(errors);

    if (keys.length > 0 && isSubmitting && !isValidating) {
      var getNameInputError = this.getFirstElementErrors(errors, keys[0]);
      var selector = "[name=\"" + getNameInputError + "\"]";
      var errorElement = document.querySelector(selector);

      if (errorElement) {
        var _this$props = this.props,
            offset = _this$props.offset,
            ease = _this$props.ease,
            duration = _this$props.duration,
            focusDelay = _this$props.focusDelay,
            align = _this$props.align;
        scrollToElement__default['default'](errorElement, {
          offset: offset,
          ease: ease,
          duration: duration,
          align: align
        });
        this.timeout = setTimeout(function () {
          return errorElement.focus();
        }, duration + focusDelay);
      }
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  };

  _proto.render = function render() {
    return null;
  };

  return ErrorScroll;
}(react.Component);

ErrorScroll.defaultProps = {
  offset: 0,
  align: "top",
  focusDelay: 200,
  ease: "linear",
  duration: 1000
};
var index = formik.connect(ErrorScroll);

module.exports = index;
