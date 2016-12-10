(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("moment"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "moment"], factory);
	else if(typeof exports === 'object')
		exports["react-moment"] = factory(require("react"), require("moment"));
	else
		root["react-moment"] = factory(root["react"], root["moment"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(2);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Moment = function (_React$Component) {
	    _inherits(Moment, _React$Component);

	    function Moment() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, Moment);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Moment.__proto__ || Object.getPrototypeOf(Moment)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	            content: ''
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(Moment, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.generateContent(this.props);
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var _this2 = this;

	            this.interval = global.setInterval(function () {
	                _this2.generateContent(_this2.props);
	            }, 60000);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            clearInterval(this.interval);
	        }
	    }, {
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            this.generateContent(nextProps);
	        }
	    }, {
	        key: 'getDatetime',
	        value: function getDatetime(props) {
	            var date = props.date,
	                parse = props.parse,
	                utc = props.utc,
	                unix = props.unix;

	            date = date || props.children;

	            var datetime = null;

	            if (utc) {
	                datetime = _moment2.default.utc(date, parse);
	            } else if (unix) {
	                datetime = _moment2.default.unix(date);
	            } else {
	                datetime = (0, _moment2.default)(date, parse);
	            }

	            return datetime;
	        }
	    }, {
	        key: 'generateContent',
	        value: function generateContent(props) {
	            var format = props.format,
	                fromNow = props.fromNow,
	                from = props.from,
	                toNow = props.toNow,
	                to = props.to,
	                calendar = props.calendar,
	                ago = props.ago,
	                unix = props.unix;


	            var datetime = this.getDatetime(props);

	            var content = '';
	            if (format) {
	                content = datetime.format(format);
	            } else if (from) {
	                content = datetime.from(from, ago);
	            } else if (fromNow) {
	                content = datetime.fromNow(ago);
	            } else if (to) {
	                content = datetime.to(to, ago);
	            } else if (toNow) {
	                content = datetime.toNow(ago);
	            } else if (calendar) {
	                content = datetime.calendar();
	            } else {
	                content = datetime.toString();
	            }

	            this.setState({ content: content });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                date = _props.date,
	                parse = _props.parse,
	                format = _props.format,
	                fromNow = _props.fromNow,
	                from = _props.from,
	                toNow = _props.toNow,
	                to = _props.to,
	                calendar = _props.calendar,
	                ago = _props.ago,
	                utc = _props.utc,
	                unix = _props.unix,
	                other = _objectWithoutProperties(_props, ['date', 'parse', 'format', 'fromNow', 'from', 'toNow', 'to', 'calendar', 'ago', 'utc', 'unix']);

	            var datetime = this.getDatetime(this.props);
	            var content = this.state.content;


	            return _react2.default.createElement(
	                'time',
	                _extends({ dateTime: datetime.format() }, other),
	                content
	            );
	        }
	    }]);

	    return Moment;
	}(_react2.default.Component);

	exports.default = Moment;


	var dateTypes = [_react2.default.PropTypes.string, _react2.default.PropTypes.number, _react2.default.PropTypes.array, _react2.default.PropTypes.object];

	var parseTypes = [_react2.default.PropTypes.string, _react2.default.PropTypes.array];

	Moment.propTypes = {
	    date: _react2.default.PropTypes.oneOfType(dateTypes),
	    parse: _react2.default.PropTypes.oneOfType(parseTypes),
	    format: _react2.default.PropTypes.string,
	    ago: _react2.default.PropTypes.bool,
	    fromNow: _react2.default.PropTypes.bool,
	    from: _react2.default.PropTypes.oneOfType(dateTypes),
	    toNow: _react2.default.PropTypes.bool,
	    to: _react2.default.PropTypes.oneOfType(dateTypes),
	    calendar: _react2.default.PropTypes.bool,
	    unix: _react2.default.PropTypes.bool,
	    utc: _react2.default.PropTypes.bool
	};

	Moment.defaultProps = {
	    fromNow: false,
	    toNow: false,
	    calendar: false,
	    ago: false,
	    unix: false,
	    utc: false
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;