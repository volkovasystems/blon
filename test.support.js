"use strict";

/*;
              	@test-license:
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
              	@end-test-license
              
              	@test-configuration:
              		{
              			"package": "blon",
              			"path": "blon/test.module.js",
              			"file": "test.module.js",
              			"module": "test",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/blon.git"
              		}
              	@end-test-configuration
              
              	@test-documentation:
              
              	@end-test-documentation
              
              	@include:
              		{
              			"assert": "should/as-function",
              			"blon": "blon"
              		}
              	@end-include
              */var _typeof2 = require("babel-runtime/helpers/typeof");var _typeof3 = _interopRequireDefault(_typeof2);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var assert = require("should/as-function");



//: @client:
var blon = require("./blon.support.js");
//: @end-client







//: @client:

describe("blon", function () {

	describe("`blon( true )`", function () {
		it("should return State instance", function () {
			var data = blon(true);

			assert.equal(typeof data === "undefined" ? "undefined" : (0, _typeof3.default)(data), "object");

			assert.equal(data.constructor.name, "State");

			assert.equal(data.valueOf(), true);
		});
	});

	describe("`blon( true ).toString( )`", function () {
		it("should return string type", function () {
			assert.equal((0, _typeof3.default)(blon(true).toString()), "string");
		});
	});

	describe("`blon( true ).toNumber( )`", function () {
		it("should return number type", function () {
			var result = blon(true).toNumber();

			assert.equal(typeof result === "undefined" ? "undefined" : (0, _typeof3.default)(result), "number");

			assert.equal(result, Infinity);

		});
	});

	describe("`blon( true ).toBoolean( )`", function () {
		it("should return boolean type", function () {
			var result = blon(true).toBoolean();

			assert.equal(typeof result === "undefined" ? "undefined" : (0, _typeof3.default)(result), "boolean");

			assert.equal(result, true);

		});
	});

	describe("`blon( true ).toObject( )`", function () {
		it("should return object type", function () {
			var descriptor = blon(true).toObject();

			assert.equal(typeof descriptor === "undefined" ? "undefined" : (0, _typeof3.default)(descriptor), "object");

			assert.equal("type" in descriptor, true);

			assert.equal("name" in descriptor, true);

			assert.equal("value" in descriptor, true);

			assert.equal("format" in descriptor, true);
		});
	});

	describe("`blon( false )`", function () {
		it("should return State instance", function () {
			var data = blon(false);

			assert.equal(typeof data === "undefined" ? "undefined" : (0, _typeof3.default)(data), "object");

			assert.equal(data.constructor.name, "State");

			assert.equal(data.valueOf(), false);
		});
	});

	describe("`blon( false ).toString( )`", function () {
		it("should return string type", function () {
			var result = blon(false).toString();

			assert.equal(typeof result === "undefined" ? "undefined" : (0, _typeof3.default)(result), "string");

			assert.equal(result, "false");

		});
	});

	describe("`blon( false ).toNumber( )`", function () {
		it("should return number type", function () {
			var result = blon(false).toNumber();

			assert.equal(typeof result === "undefined" ? "undefined" : (0, _typeof3.default)(result), "number");

			assert.equal(result.toString(), "NaN");

		});
	});

	describe("`blon( false ).toBoolean( )`", function () {
		it("should return boolean type", function () {
			var result = blon(false).toBoolean();

			assert.equal(typeof result === "undefined" ? "undefined" : (0, _typeof3.default)(result), "boolean");

			assert.equal(result, false);

		});
	});

	describe("`blon( false ).toObject( )`", function () {
		it("should return object type", function () {
			var descriptor = blon(false).toObject();

			assert.equal(typeof descriptor === "undefined" ? "undefined" : (0, _typeof3.default)(descriptor), "object");

			assert.equal("type" in descriptor, true);

			assert.equal("name" in descriptor, true);

			assert.equal("value" in descriptor, true);

			assert.equal("format" in descriptor, true);

		});
	});

});

//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiYmxvbiIsImRlc2NyaWJlIiwiaXQiLCJkYXRhIiwiZXF1YWwiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJ2YWx1ZU9mIiwidG9TdHJpbmciLCJyZXN1bHQiLCJ0b051bWJlciIsIkluZmluaXR5IiwidG9Cb29sZWFuIiwiZGVzY3JpcHRvciIsInRvT2JqZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbURBLElBQU1BLFNBQVNDLFFBQVMsb0JBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxtQkFBVCxDQUFiO0FBQ0E7Ozs7Ozs7O0FBUUE7O0FBRUFFLFNBQVUsTUFBVixFQUFrQixZQUFPOztBQUV4QkEsVUFBVSxnQkFBVixFQUE0QixZQUFPO0FBQ2xDQyxLQUFJLDhCQUFKLEVBQW9DLFlBQU87QUFDMUMsT0FBSUMsT0FBT0gsS0FBTSxJQUFOLENBQVg7O0FBRUFGLFVBQU9NLEtBQVAsUUFBcUJELElBQXJCLHVEQUFxQkEsSUFBckIsR0FBMkIsUUFBM0I7O0FBRUFMLFVBQU9NLEtBQVAsQ0FBY0QsS0FBS0UsV0FBTCxDQUFpQkMsSUFBL0IsRUFBcUMsT0FBckM7O0FBRUFSLFVBQU9NLEtBQVAsQ0FBY0QsS0FBS0ksT0FBTCxFQUFkLEVBQStCLElBQS9CO0FBQ0EsR0FSRDtBQVNBLEVBVkQ7O0FBWUFOLFVBQVUsNEJBQVYsRUFBd0MsWUFBTztBQUM5Q0MsS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDSixVQUFPTSxLQUFQLHVCQUFxQkosS0FBTSxJQUFOLEVBQWFRLFFBQWIsRUFBckIsR0FBK0MsUUFBL0M7QUFDQSxHQUZEO0FBR0EsRUFKRDs7QUFNQVAsVUFBVSw0QkFBVixFQUF3QyxZQUFPO0FBQzlDQyxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkMs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RUFBakI7O0FBRUFoQixVQUFPTSxLQUFQLFFBQXFCUyxVQUFyQix1REFBcUJBLFVBQXJCLEdBQWlDLFFBQWpDOztBQUVBZixVQUFPTSxLQUFQLENBQWMsVUFBVVMsVUFBeEIsRUFBb0MsSUFBcEM7O0FBRUFmLFVBQU9NLEtBQVAsQ0FBYyxVQUFVUyxVQUF4QixFQUFvQyxJQUFwQzs7QUFFQWYsVUFBT00sS0FBUCxDQUFjLFdBQVdTLFVBQXpCLEVBQXFDLElBQXJDOztBQUVBZixVQUFPTSxLQUFQLENBQWMsWUFBWVMsVUFBMUIsRUFBc0MsSUFBdEM7O0FBRUEsR0FiRDtBQWNBLEVBZkQ7O0FBaUJBLENBeEhEOztBQTBIQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImJsb25cIixcblx0XHRcdFwicGF0aFwiOiBcImJsb24vdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2Jsb24uZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIsXG5cdFx0XHRcImJsb25cIjogXCJibG9uXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGQvYXMtZnVuY3Rpb25cIiApO1xuXG5cblxuLy86IEBjbGllbnQ6XG5jb25zdCBibG9uID0gcmVxdWlyZSggXCIuL2Jsb24uc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5cbmRlc2NyaWJlKCBcImJsb25cIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgYmxvbiggdHJ1ZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gU3RhdGUgaW5zdGFuY2VcIiwgKCApID0+IHtcblx0XHRcdGxldCBkYXRhID0gYmxvbiggdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBkYXRhLCBcIm9iamVjdFwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGF0YS5jb25zdHJ1Y3Rvci5uYW1lLCBcIlN0YXRlXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBkYXRhLnZhbHVlT2YoICksIHRydWUgKTtcblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgYmxvbiggdHJ1ZSApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIGJsb24oIHRydWUgKS50b1N0cmluZyggKSwgXCJzdHJpbmdcIiApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBibG9uKCB0cnVlICkudG9OdW1iZXIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBudW1iZXIgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJsb24oIHRydWUgKS50b051bWJlciggKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgcmVzdWx0LCBcIm51bWJlclwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCBJbmZpbml0eSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGJsb24oIHRydWUgKS50b0Jvb2xlYW4oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBib29sZWFuIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBibG9uKCB0cnVlICkudG9Cb29sZWFuKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiByZXN1bHQsIFwiYm9vbGVhblwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgYmxvbiggdHJ1ZSApLnRvT2JqZWN0KCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gb2JqZWN0IHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCBkZXNjcmlwdG9yID0gYmxvbiggdHJ1ZSApLnRvT2JqZWN0KCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiBkZXNjcmlwdG9yLCBcIm9iamVjdFwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJ0eXBlXCIgaW4gZGVzY3JpcHRvciwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwibmFtZVwiIGluIGRlc2NyaXB0b3IsIHRydWUgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcInZhbHVlXCIgaW4gZGVzY3JpcHRvciwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwiZm9ybWF0XCIgaW4gZGVzY3JpcHRvciwgdHJ1ZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBibG9uKCBmYWxzZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gU3RhdGUgaW5zdGFuY2VcIiwgKCApID0+IHtcblx0XHRcdGxldCBkYXRhID0gYmxvbiggZmFsc2UgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0eXBlb2YgZGF0YSwgXCJvYmplY3RcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIGRhdGEuY29uc3RydWN0b3IubmFtZSwgXCJTdGF0ZVwiICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggZGF0YS52YWx1ZU9mKCApLCBmYWxzZSApO1xuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBibG9uKCBmYWxzZSApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBibG9uKCBmYWxzZSApLnRvU3RyaW5nKCApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHR5cGVvZiByZXN1bHQsIFwic3RyaW5nXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIFwiZmFsc2VcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGJsb24oIGZhbHNlICkudG9OdW1iZXIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBudW1iZXIgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGJsb24oIGZhbHNlICkudG9OdW1iZXIoICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIHJlc3VsdCwgXCJudW1iZXJcIiApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdC50b1N0cmluZyggKSwgXCJOYU5cIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGJsb24oIGZhbHNlICkudG9Cb29sZWFuKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gYm9vbGVhbiB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gYmxvbiggZmFsc2UgKS50b0Jvb2xlYW4oICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIHJlc3VsdCwgXCJib29sZWFuXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIGZhbHNlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgYmxvbiggZmFsc2UgKS50b09iamVjdCggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHRsZXQgZGVzY3JpcHRvciA9IGJsb24oIGZhbHNlICkudG9PYmplY3QoICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdHlwZW9mIGRlc2NyaXB0b3IsIFwib2JqZWN0XCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBcInR5cGVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJuYW1lXCIgaW4gZGVzY3JpcHRvciwgdHJ1ZSApO1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggXCJmb3JtYXRcIiBpbiBkZXNjcmlwdG9yLCB0cnVlICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG4vLzogQGVuZC1jbGllbnRcblxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
