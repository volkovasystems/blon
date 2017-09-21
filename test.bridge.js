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
              */

var assert = require("should/as-function");





//: @bridge:
var path = require("path");
//: @end-bridge








//: @bridge:

describe("blon", function () {

	var bridgeURL = "file://" + path.resolve(__dirname, "bridge.html");

	describe("`blon( true )`", function () {
		it("should return State instance", function () {
			//: @ignore:
   			assert.equal( browser.url( bridgeURL ).execute( function( ){ return typeof blon( true ); } ).value, "object" );
   			//: @end-ignore

			assert.equal(browser.url(bridgeURL).execute(function () {return blon(true).constructor.name;}).value, "State");

			assert.equal(browser.url(bridgeURL).execute(function () {return "" + blon(true).valueOf();}).value, "true");

		});
	});

	describe("`blon( true ).toString( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let data = blon( true ).toString( );
   
   					let test = typeof data == "string" &&
   						data == "true";
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`blon( true ).toNumber( )`", function () {
		it("should return number type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let result = blon( true ).toNumber( );
   
   					let test = typeof result == "number" &&
   						result == Infinity;
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`blon( true ).toBoolean( )`", function () {
		it("should return boolean type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let result = blon( true ).toBoolean( );
   
   					let test = typeof result == "boolean" &&
   						result == true;
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`blon( true ).toObject( )`", function () {
		it("should return object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let descriptor = blon( true ).toObject( );
   
   					let test = typeof descriptor == "object" &&
   						"type" in descriptor == true &&
   						"name" in descriptor == true &&
   						"value" in descriptor == true &&
   						"format" in descriptor == true;
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);
		});
	});

	describe("`blon( false )`", function () {
		it("should return State instance", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let data = blon( false );
   
   					let test = typeof data == "object" &&
   						data.constructor.name == "State" &&
   						data.valueOf( ) == false;
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`blon( false ).toString( )`", function () {
		it("should return string type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let data = blon( false ).toString( );
   
   					let test = typeof data == "string" && data == "false";
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`blon( false ).toNumber( )`", function () {
		it("should return number type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let data = blon( false ).toNumber( );
   
   					let test = typeof data == "number" &&
   						data.toString( ) == "NaN";
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`blon( false ).toBoolean( )`", function () {
		it("should return boolean type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let result = blon( false ).toBoolean( );
   
   					let test = typeof result == "boolean" && result == false;
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

	describe("`blon( false ).toObject( )`", function () {
		it("should return object type", function () {
			//: @ignore:
   			let result = browser.url( bridgeURL ).execute(
   
   				function( ){
   					let descriptor = blon( false ).toObject( );
   
   					let test = typeof descriptor == "object" &&
   						"type" in descriptor == true
   						"name" in descriptor == true
   						"value" in descriptor == true
   						"format" in descriptor == true;
   
   					return test;
   				}
   
   			).value;
   			//: @end-ignore

			assert.equal(result, true);

		});
	});

});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJicmlkZ2VVUkwiLCJyZXNvbHZlIiwiX19kaXJuYW1lIiwiaXQiLCJlcXVhbCIsImJyb3dzZXIiLCJ1cmwiLCJleGVjdXRlIiwiYmxvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsInZhbHVlIiwidmFsdWVPZiIsInJlc3VsdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQSxJQUFNQSxTQUFTQyxRQUFTLG9CQUFULENBQWY7Ozs7OztBQU1BO0FBQ0EsSUFBTUMsT0FBT0QsUUFBUyxNQUFULENBQWI7QUFDQTs7Ozs7Ozs7O0FBU0E7O0FBRUFFLFNBQVUsTUFBVixFQUFrQixZQUFPOztBQUV4QixLQUFJQyx3QkFBdUJGLEtBQUtHLE9BQUwsQ0FBY0MsU0FBZCxFQUF5QixhQUF6QixDQUEzQjs7QUFFQUgsVUFBVSxnQkFBVixFQUE0QixZQUFPO0FBQ2xDSSxLQUFJLDhCQUFKLEVBQW9DLFlBQU87QUFDMUM7QUFDSDs7O0FBR0E7O0FBRUdQLFVBQU9RLEtBQVAsQ0FBY0MsUUFBUUMsR0FBUixDQUFhTixTQUFiLEVBQXlCTyxPQUF6QixDQUFrQyxvQkFBT0MsS0FBTSxJQUFOLEVBQWFDLFdBQWIsQ0FBeUJDLElBQWhDLEVBQWxDLEVBQXlFQyxLQUF2RixFQUE4RixPQUE5Rjs7QUFFQWYsVUFBT1EsS0FBUCxDQUFjQyxRQUFRQyxHQUFSLENBQWFOLFNBQWIsRUFBeUJPLE9BQXpCLENBQWtDLHlCQUFXQyxLQUFNLElBQU4sRUFBYUksT0FBYixFQUFYLEVBQWxDLEVBQTBFRCxLQUF4RixFQUErRixNQUEvRjs7QUFFQSxHQVhEO0FBWUEsRUFiRDs7QUFlQVosVUFBVSw0QkFBVixFQUF3QyxZQUFPO0FBQzlDSSxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7QUFjQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjUyxNQUFkLEVBQXNCLElBQXRCOztBQUVBLEdBcEJEO0FBcUJBLEVBdEJEOztBQXdCQWQsVUFBVSw0QkFBVixFQUF3QyxZQUFPO0FBQzlDSSxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7QUFjQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjUyxNQUFkLEVBQXNCLElBQXRCOztBQUVBLEdBcEJEO0FBcUJBLEVBdEJEOztBQXdCQWQsVUFBVSw2QkFBVixFQUF5QyxZQUFPO0FBQy9DSSxLQUFJLDRCQUFKLEVBQWtDLFlBQU87QUFDeEM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7QUFjQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjUyxNQUFkLEVBQXNCLElBQXRCOztBQUVBLEdBcEJEO0FBcUJBLEVBdEJEOztBQXdCQWQsVUFBVSw0QkFBVixFQUF3QyxZQUFPO0FBQzlDSSxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7O0FBRUdQLFVBQU9RLEtBQVAsQ0FBY1MsTUFBZCxFQUFzQixJQUF0QjtBQUNBLEdBdEJEO0FBdUJBLEVBeEJEOztBQTBCQWQsVUFBVSxpQkFBVixFQUE2QixZQUFPO0FBQ25DSSxLQUFJLDhCQUFKLEVBQW9DLFlBQU87QUFDMUM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7O0FBRUdQLFVBQU9RLEtBQVAsQ0FBY1MsTUFBZCxFQUFzQixJQUF0Qjs7QUFFQSxHQXJCRDtBQXNCQSxFQXZCRDs7QUF5QkFkLFVBQVUsNkJBQVYsRUFBeUMsWUFBTztBQUMvQ0ksS0FBSSwyQkFBSixFQUFpQyxZQUFPO0FBQ3ZDO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUFhQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjUyxNQUFkLEVBQXNCLElBQXRCOztBQUVBLEdBbkJEO0FBb0JBLEVBckJEOztBQXVCQWQsVUFBVSw2QkFBVixFQUF5QyxZQUFPO0FBQy9DSSxLQUFJLDJCQUFKLEVBQWlDLFlBQU87QUFDdkM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7QUFjQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjUyxNQUFkLEVBQXNCLElBQXRCOztBQUVBLEdBcEJEO0FBcUJBLEVBdEJEOztBQXdCQWQsVUFBVSw4QkFBVixFQUEwQyxZQUFPO0FBQ2hESSxLQUFJLDRCQUFKLEVBQWtDLFlBQU87QUFDeEM7QUFDSDs7Ozs7Ozs7Ozs7OztBQWFBOztBQUVHUCxVQUFPUSxLQUFQLENBQWNTLE1BQWQsRUFBc0IsSUFBdEI7O0FBRUEsR0FuQkQ7QUFvQkEsRUFyQkQ7O0FBdUJBZCxVQUFVLDZCQUFWLEVBQXlDLFlBQU87QUFDL0NJLEtBQUksMkJBQUosRUFBaUMsWUFBTztBQUN2QztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7QUFFR1AsVUFBT1EsS0FBUCxDQUFjUyxNQUFkLEVBQXNCLElBQXRCOztBQUVBLEdBdkJEO0FBd0JBLEVBekJEOztBQTJCQSxDQS9PRDs7QUFpUEEiLCJmaWxlIjoidGVzdC5icmlkZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcImJsb25cIixcblx0XHRcdFwicGF0aFwiOiBcImJsb24vdGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcIm1vZHVsZVwiOiBcInRlc3RcIixcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL2Jsb24uZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkL2FzLWZ1bmN0aW9uXCIsXG5cdFx0XHRcImJsb25cIjogXCJibG9uXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGQvYXMtZnVuY3Rpb25cIiApO1xuXG5cblxuXG5cbi8vOiBAYnJpZGdlOlxuY29uc3QgcGF0aCA9IHJlcXVpcmUoIFwicGF0aFwiICk7XG4vLzogQGVuZC1icmlkZ2VcblxuXG5cblxuXG5cblxuXG4vLzogQGJyaWRnZTpcblxuZGVzY3JpYmUoIFwiYmxvblwiLCAoICkgPT4ge1xuXG5cdGxldCBicmlkZ2VVUkwgPSBgZmlsZTovLyR7IHBhdGgucmVzb2x2ZSggX19kaXJuYW1lLCBcImJyaWRnZS5odG1sXCIgKSB9YDtcblxuXHRkZXNjcmliZSggXCJgYmxvbiggdHJ1ZSApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gU3RhdGUgaW5zdGFuY2VcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoIGZ1bmN0aW9uKCApeyByZXR1cm4gdHlwZW9mIGJsb24oIHRydWUgKTsgfSApLnZhbHVlLCBcIm9iamVjdFwiICk7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoICggKSA9PiBibG9uKCB0cnVlICkuY29uc3RydWN0b3IubmFtZSApLnZhbHVlLCBcIlN0YXRlXCIgKTtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZSggKCApID0+IGAkeyBibG9uKCB0cnVlICkudmFsdWVPZiggKSB9YCApLnZhbHVlLCBcInRydWVcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGJsb24oIHRydWUgKS50b1N0cmluZyggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIHN0cmluZyB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IGRhdGEgPSBibG9uKCB0cnVlICkudG9TdHJpbmcoICk7XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IHR5cGVvZiBkYXRhID09IFwic3RyaW5nXCIgJiZcblx0XHRcdFx0XHRcdGRhdGEgPT0gXCJ0cnVlXCI7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGVzdDtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXHRcdFx0XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGJsb24oIHRydWUgKS50b051bWJlciggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG51bWJlciB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IHJlc3VsdCA9IGJsb24oIHRydWUgKS50b051bWJlciggKTtcblxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gdHlwZW9mIHJlc3VsdCA9PSBcIm51bWJlclwiICYmXG5cdFx0XHRcdFx0XHRyZXN1bHQgPT0gSW5maW5pdHk7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGVzdDtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGJsb24oIHRydWUgKS50b0Jvb2xlYW4oIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBib29sZWFuIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgcmVzdWx0ID0gYmxvbiggdHJ1ZSApLnRvQm9vbGVhbiggKTtcblxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gdHlwZW9mIHJlc3VsdCA9PSBcImJvb2xlYW5cIiAmJlxuXHRcdFx0XHRcdFx0cmVzdWx0ID09IHRydWU7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGVzdDtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGJsb24oIHRydWUgKS50b09iamVjdCggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIG9iamVjdCB0eXBlXCIsICggKSA9PiB7XG5cdFx0XHQvLzogQGlnbm9yZTpcbi8qXG5cdFx0XHRsZXQgcmVzdWx0ID0gYnJvd3Nlci51cmwoIGJyaWRnZVVSTCApLmV4ZWN1dGUoXG5cblx0XHRcdFx0ZnVuY3Rpb24oICl7XG5cdFx0XHRcdFx0bGV0IGRlc2NyaXB0b3IgPSBibG9uKCB0cnVlICkudG9PYmplY3QoICk7XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IHR5cGVvZiBkZXNjcmlwdG9yID09IFwib2JqZWN0XCIgJiZcblx0XHRcdFx0XHRcdFwidHlwZVwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZSAmJlxuXHRcdFx0XHRcdFx0XCJuYW1lXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcInZhbHVlXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlICYmXG5cdFx0XHRcdFx0XHRcImZvcm1hdFwiIGluIGRlc2NyaXB0b3IgPT0gdHJ1ZTtcblxuXHRcdFx0XHRcdHJldHVybiB0ZXN0O1xuXHRcdFx0XHR9XG5cblx0XHRcdCkudmFsdWU7XG5cdFx0XHQqL1xuLy86IEBlbmQtaWdub3JlXG5cblx0XHRcdGFzc2VydC5lcXVhbCggcmVzdWx0LCB0cnVlICk7XG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGJsb24oIGZhbHNlIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBTdGF0ZSBpbnN0YW5jZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBkYXRhID0gYmxvbiggZmFsc2UgKTtcblxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gdHlwZW9mIGRhdGEgPT0gXCJvYmplY3RcIiAmJlxuXHRcdFx0XHRcdFx0ZGF0YS5jb25zdHJ1Y3Rvci5uYW1lID09IFwiU3RhdGVcIiAmJlxuXHRcdFx0XHRcdFx0ZGF0YS52YWx1ZU9mKCApID09IGZhbHNlO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBibG9uKCBmYWxzZSApLnRvU3RyaW5nKCApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCByZXR1cm4gc3RyaW5nIHR5cGVcIiwgKCApID0+IHtcblx0XHRcdC8vOiBAaWdub3JlOlxuLypcblx0XHRcdGxldCByZXN1bHQgPSBicm93c2VyLnVybCggYnJpZGdlVVJMICkuZXhlY3V0ZShcblxuXHRcdFx0XHRmdW5jdGlvbiggKXtcblx0XHRcdFx0XHRsZXQgZGF0YSA9IGJsb24oIGZhbHNlICkudG9TdHJpbmcoICk7XG5cblx0XHRcdFx0XHRsZXQgdGVzdCA9IHR5cGVvZiBkYXRhID09IFwic3RyaW5nXCIgJiYgZGF0YSA9PSBcImZhbHNlXCI7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGVzdDtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGJsb24oIGZhbHNlICkudG9OdW1iZXIoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBudW1iZXIgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBkYXRhID0gYmxvbiggZmFsc2UgKS50b051bWJlciggKTtcblxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gdHlwZW9mIGRhdGEgPT0gXCJudW1iZXJcIiAmJlxuXHRcdFx0XHRcdFx0ZGF0YS50b1N0cmluZyggKSA9PSBcIk5hTlwiO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImBibG9uKCBmYWxzZSApLnRvQm9vbGVhbiggKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgcmV0dXJuIGJvb2xlYW4gdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCByZXN1bHQgPSBibG9uKCBmYWxzZSApLnRvQm9vbGVhbiggKTtcblxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gdHlwZW9mIHJlc3VsdCA9PSBcImJvb2xlYW5cIiAmJiByZXN1bHQgPT0gZmFsc2U7XG5cblx0XHRcdFx0XHRyZXR1cm4gdGVzdDtcblx0XHRcdFx0fVxuXG5cdFx0XHQpLnZhbHVlO1xuXHRcdFx0Ki9cbi8vOiBAZW5kLWlnbm9yZVxuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHJlc3VsdCwgdHJ1ZSApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYGJsb24oIGZhbHNlICkudG9PYmplY3QoIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIHJldHVybiBvYmplY3QgdHlwZVwiLCAoICkgPT4ge1xuXHRcdFx0Ly86IEBpZ25vcmU6XG4vKlxuXHRcdFx0bGV0IHJlc3VsdCA9IGJyb3dzZXIudXJsKCBicmlkZ2VVUkwgKS5leGVjdXRlKFxuXG5cdFx0XHRcdGZ1bmN0aW9uKCApe1xuXHRcdFx0XHRcdGxldCBkZXNjcmlwdG9yID0gYmxvbiggZmFsc2UgKS50b09iamVjdCggKTtcblxuXHRcdFx0XHRcdGxldCB0ZXN0ID0gdHlwZW9mIGRlc2NyaXB0b3IgPT0gXCJvYmplY3RcIiAmJlxuXHRcdFx0XHRcdFx0XCJ0eXBlXCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlXG5cdFx0XHRcdFx0XHRcIm5hbWVcIiBpbiBkZXNjcmlwdG9yID09IHRydWVcblx0XHRcdFx0XHRcdFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yID09IHRydWVcblx0XHRcdFx0XHRcdFwiZm9ybWF0XCIgaW4gZGVzY3JpcHRvciA9PSB0cnVlO1xuXG5cdFx0XHRcdFx0cmV0dXJuIHRlc3Q7XG5cdFx0XHRcdH1cblxuXHRcdFx0KS52YWx1ZTtcblx0XHRcdCovXG4vLzogQGVuZC1pZ25vcmVcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCByZXN1bHQsIHRydWUgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG59ICk7XG5cbi8vOiBAZW5kLWJyaWRnZVxuIl19
//# sourceMappingURL=test.bridge.js.map
