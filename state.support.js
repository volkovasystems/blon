"use strict";

/*;
              	@submodule-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-submodule-license
              
              	@submodule-configuration:
              		{
              			"package": "blon",
              			"path": "blon/state.module.js",
              			"file": "state.module.js",
              			"module": "blon",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/blon.git",
              			"test": "blon-test.js",
              			"global": false,
              			"internal": true,
              			"class": true
              		}
              	@end-submodule-configuration
              
              	@submodule-documentation:
              		Boolean class wrapper.
              	@end-submodule-documentation
              
              	@include:
              		{
              			"ehm": "ehm"
              		}
              	@end-include
              */var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _hasInstance = require("babel-runtime/core-js/symbol/has-instance");var _hasInstance2 = _interopRequireDefault(_hasInstance);var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _createClass2 = require("babel-runtime/helpers/createClass");var _createClass3 = _interopRequireDefault(_createClass2);var _inherits2 = require("babel-runtime/helpers/inherits");var _inherits3 = _interopRequireDefault(_inherits2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var Meta = require("ehm")();

var EMPTY_STRING = "";
var STATE = Boolean;
var SERIALIZE_STATE_TAG = "[object Boolean:Boolean]";
var META_SERIALIZE_STATE_TAG = Meta.create(STATE).serialize();var

State = function (_Meta) {(0, _inherits3.default)(State, _Meta);(0, _createClass3.default)(State, null, [{ key: _hasInstance2.default, value: function value(
		instance) {
			return (
				instance === STATE ||
				Meta.instanceOf(instance, this));

		} }, { key: "deserialize", value: function deserialize(

		data, parser, blueprint) {
			/*;
                            	@meta-configuration:
                            		{
                            			"data": "*",
                            			"parser": "function",
                            			"blueprint": "function"
                            		}
                            	@end-meta-configuration
                            */

			return Meta.create(this, STATE);
		} }]);

	function State() {(0, _classCallCheck3.default)(this, State);return (0, _possibleConstructorReturn3.default)(this, (State.__proto__ || (0, _getPrototypeOf2.default)(State)).call(this,
		STATE, "State"));
	}(0, _createClass3.default)(State, [{ key: "serialize", value: function serialize(

















		parser) {
			/*;
           	@meta-configuration:
           		{
           			"parser": "function"
           		}
           	@end-meta-configuration
           */

			return SERIALIZE_STATE_TAG;
		} }, { key: "isCompatible", value: function isCompatible(

		tag) {
			return (
				tag === SERIALIZE_STATE_TAG ||
				tag === META_SERIALIZE_STATE_TAG);

		} }, { key: Meta.OBJECT, get: function get() {return EMPTY_STRING;} }, { key: Meta.BOOLEAN, get: function get() {return false;} }, { key: Meta.STRING, get: function get() {return EMPTY_STRING;} }, { key: Meta.NUMBER, get: function get() {return 0;} }]);return State;}(Meta);


module.exports = State;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRlLnN1cHBvcnQuanMiXSwibmFtZXMiOlsiTWV0YSIsInJlcXVpcmUiLCJFTVBUWV9TVFJJTkciLCJTVEFURSIsIkJvb2xlYW4iLCJTRVJJQUxJWkVfU1RBVEVfVEFHIiwiTUVUQV9TRVJJQUxJWkVfU1RBVEVfVEFHIiwiY3JlYXRlIiwic2VyaWFsaXplIiwiU3RhdGUiLCJpbnN0YW5jZSIsImluc3RhbmNlT2YiLCJkYXRhIiwicGFyc2VyIiwiYmx1ZXByaW50IiwidGFnIiwiT0JKRUNUIiwiQk9PTEVBTiIsIlNUUklORyIsIk5VTUJFUiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMERBLElBQU1BLE9BQU9DLFFBQVMsS0FBVCxHQUFiOztBQUVBLElBQU1DLGVBQWUsRUFBckI7QUFDQSxJQUFNQyxRQUFRQyxPQUFkO0FBQ0EsSUFBTUMsc0JBQXNCLDBCQUE1QjtBQUNBLElBQU1DLDJCQUEyQk4sS0FBS08sTUFBTCxDQUFhSixLQUFiLEVBQXFCSyxTQUFyQixFQUFqQyxDOztBQUVNQyxLO0FBQzBCQyxVLEVBQVU7QUFDeEM7QUFDQ0EsaUJBQWFQLEtBQWI7QUFDQUgsU0FBS1csVUFBTCxDQUFpQkQsUUFBakIsRUFBMkIsSUFBM0IsQ0FGRDs7QUFJQSxHOztBQUVtQkUsTSxFQUFNQyxNLEVBQVFDLFMsRUFBVztBQUM1Qzs7Ozs7Ozs7OztBQVVBLFVBQU9kLEtBQUtPLE1BQUwsQ0FBYSxJQUFiLEVBQW1CSixLQUFuQixDQUFQO0FBQ0EsRzs7QUFFRCxrQkFBYztBQUNOQSxPQURNLEVBQ0MsT0FERDtBQUViLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCVVUsUSxFQUFRO0FBQ2xCOzs7Ozs7OztBQVFBLFVBQU9SLG1CQUFQO0FBQ0EsRzs7QUFFYVUsSyxFQUFLO0FBQ2xCO0FBQ0NBLFlBQVFWLG1CQUFSO0FBQ0dVLFlBQVFULHdCQUZaOztBQUlBLEcsV0FqQ0tOLEtBQUtnQixNLHNCQUFXLENBQ3JCLE9BQU9kLFlBQVAsQ0FDQSxDLFdBRUtGLEtBQUtpQixPLHNCQUFZLENBQ3RCLE9BQU8sS0FBUCxDQUNBLEMsV0FFS2pCLEtBQUtrQixNLHNCQUFXLENBQ3JCLE9BQU9oQixZQUFQLENBQ0EsQyxXQUVLRixLQUFLbUIsTSxzQkFBVyxDQUNyQixPQUFPLENBQVAsQ0FDQSxDLG9CQXhDa0JuQixJOzs7QUE4RHBCb0IsT0FBT0MsT0FBUCxHQUFpQlosS0FBakIiLCJmaWxlIjoic3RhdGUuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QHN1Ym1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtc3VibW9kdWxlLWxpY2Vuc2VcblxuXHRAc3VibW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiYmxvblwiLFxuXHRcdFx0XCJwYXRoXCI6IFwiYmxvbi9zdGF0ZS5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInN0YXRlLm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJibG9uXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9ibG9uLmdpdFwiLFxuXHRcdFx0XCJ0ZXN0XCI6IFwiYmxvbi10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiBmYWxzZSxcblx0XHRcdFwiaW50ZXJuYWxcIjogdHJ1ZSxcblx0XHRcdFwiY2xhc3NcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1zdWJtb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBzdWJtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRCb29sZWFuIGNsYXNzIHdyYXBwZXIuXG5cdEBlbmQtc3VibW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImVobVwiOiBcImVobVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IE1ldGEgPSByZXF1aXJlKCBcImVobVwiICkoICk7XG5cbmNvbnN0IEVNUFRZX1NUUklORyA9IFwiXCI7XG5jb25zdCBTVEFURSA9IEJvb2xlYW47XG5jb25zdCBTRVJJQUxJWkVfU1RBVEVfVEFHID0gXCJbb2JqZWN0IEJvb2xlYW46Qm9vbGVhbl1cIjtcbmNvbnN0IE1FVEFfU0VSSUFMSVpFX1NUQVRFX1RBRyA9IE1ldGEuY3JlYXRlKCBTVEFURSApLnNlcmlhbGl6ZSggKTtcblxuY2xhc3MgU3RhdGUgZXh0ZW5kcyBNZXRhIHtcblx0c3RhdGljIFsgU3ltYm9sLmhhc0luc3RhbmNlIF0oIGluc3RhbmNlICl7XG5cdFx0cmV0dXJuIChcblx0XHRcdGluc3RhbmNlID09PSBTVEFURSB8fFxuXHRcdFx0TWV0YS5pbnN0YW5jZU9mKCBpbnN0YW5jZSwgdGhpcyApXG5cdFx0KTtcblx0fVxuXG5cdHN0YXRpYyBkZXNlcmlhbGl6ZSggZGF0YSwgcGFyc2VyLCBibHVlcHJpbnQgKXtcblx0XHQvKjtcblx0XHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRcImRhdGFcIjogXCIqXCIsXG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiLFxuXHRcdFx0XHRcdFwiYmx1ZXByaW50XCI6IFwiZnVuY3Rpb25cIlxuXHRcdFx0XHR9XG5cdFx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHRcdCovXG5cblx0XHRyZXR1cm4gTWV0YS5jcmVhdGUoIHRoaXMsIFNUQVRFICk7XG5cdH1cblxuXHRjb25zdHJ1Y3RvciggKXtcblx0XHRzdXBlciggU1RBVEUsIFwiU3RhdGVcIiApO1xuXHR9XG5cblx0Z2V0IFsgTWV0YS5PQkpFQ1QgXSggKXtcblx0XHRyZXR1cm4gRU1QVFlfU1RSSU5HO1xuXHR9XG5cblx0Z2V0IFsgTWV0YS5CT09MRUFOIF0oICl7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Z2V0IFsgTWV0YS5TVFJJTkcgXSggKXtcblx0XHRyZXR1cm4gRU1QVFlfU1RSSU5HO1xuXHR9XG5cblx0Z2V0IFsgTWV0YS5OVU1CRVIgXSggKXtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdHNlcmlhbGl6ZSggcGFyc2VyICl7XG5cdFx0Lyo7XG5cdFx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0XCJwYXJzZXJcIjogXCJmdW5jdGlvblwiXG5cdFx0XHRcdH1cblx0XHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXG5cdFx0Ki9cblxuXHRcdHJldHVybiBTRVJJQUxJWkVfU1RBVEVfVEFHO1xuXHR9XG5cblx0aXNDb21wYXRpYmxlKCB0YWcgKXtcblx0XHRyZXR1cm4gKFxuXHRcdFx0dGFnID09PSBTRVJJQUxJWkVfU1RBVEVfVEFHXG5cdFx0XHR8fCB0YWcgPT09IE1FVEFfU0VSSUFMSVpFX1NUQVRFX1RBR1xuXHRcdCk7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdGF0ZTtcbiJdfQ==
//# sourceMappingURL=state.support.js.map
