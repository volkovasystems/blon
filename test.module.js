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

const assert = require( "should/as-function" );

//: @server:
const blon = require( "./blon.js" );
//: @end-server

//: @client:
const blon = require( "./blon.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "blon", ( ) => {

	describe( "`blon( true )`", ( ) => {
		it( "should return State instance", ( ) => {
			let data = blon( true );

			assert.equal( typeof data, "object" );

			assert.equal( data.constructor.name, "State" );

			assert.equal( data.valueOf( ), true );

		} );
	} );

	describe( "`blon( true ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			let result = blon( true ).toString( );

			assert.equal( typeof result, "string" );

			assert.equal( result, "true" );

		} );
	} );

	describe( "`blon( true ).toNumber( )`", ( ) => {
		it( "should return number type", ( ) => {
			let result = blon( true ).toNumber( );

			assert.equal( typeof result, "number" );

			assert.equal( result, Infinity );

		} );
	} );

	describe( "`blon( true ).toBoolean( )`", ( ) => {
		it( "should return boolean type", ( ) => {
			let result = blon( true ).toBoolean( );

			assert.equal( typeof result, "boolean" );

			assert.equal( result, true );

		} );
	} );

	describe( "`blon( true ).toObject( )`", ( ) => {
		it( "should return object type", ( ) => {
			let descriptor = blon( true ).toObject( );

			assert.equal( typeof descriptor, "object" );

			assert.equal( "type" in descriptor, true );

			assert.equal( "name" in descriptor, true );

			assert.equal( "value" in descriptor, true );

			assert.equal( "format" in descriptor, true );

		} );
	} );

	describe( "`blon( false )`", ( ) => {
		it( "should return State instance", ( ) => {
			let data = blon( false );

			assert.equal( typeof data, "object" );

			assert.equal( data.constructor.name, "State" );

			assert.equal( data.valueOf( ), false );

		} );
	} );

	describe( "`blon( false ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			let result = blon( false ).toString( );

			assert.equal( typeof result, "string" );

			assert.equal( result, "false" );

		} );
	} );

	describe( "`blon( false ).toNumber( )`", ( ) => {
		it( "should return number type", ( ) => {
			let result = blon( false ).toNumber( );

			assert.equal( typeof result, "number" );

			assert.equal( result.toString( ), "NaN" );

		} );
	} );

	describe( "`blon( false ).toBoolean( )`", ( ) => {
		it( "should return boolean type", ( ) => {
			let result = blon( false ).toBoolean( );

			assert.equal( typeof result, "boolean" );

			assert.equal( result, false );

		} );
	} );

	describe( "`blon( false ).toObject( )`", ( ) => {
		it( "should return object type", ( ) => {
			let descriptor = blon( false ).toObject( );

			assert.equal( typeof descriptor, "object" );

			assert.equal( "type" in descriptor, true );

			assert.equal( "name" in descriptor, true );

			assert.equal( "value" in descriptor, true );

			assert.equal( "format" in descriptor, true );

		} );
	} );

} );

//: @end-server


//: @client:

describe( "blon", ( ) => {

	describe( "`blon( true )`", ( ) => {
		it( "should return State instance", ( ) => {
			let data = blon( true );

			assert.equal( typeof data, "object" );

			assert.equal( data.constructor.name, "State" );

			assert.equal( data.valueOf( ), true );

		} );
	} );

	describe( "`blon( true ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			let result = blon( true ).toString( );

			assert.equal( typeof result, "string" );

			assert.equal( result, "true" );

		} );
	} );

	describe( "`blon( true ).toNumber( )`", ( ) => {
		it( "should return number type", ( ) => {
			let result = blon( true ).toNumber( );

			assert.equal( typeof result, "number" );

			assert.equal( result, Infinity );

		} );
	} );

	describe( "`blon( true ).toBoolean( )`", ( ) => {
		it( "should return boolean type", ( ) => {
			let result = blon( true ).toBoolean( );

			assert.equal( typeof result, "boolean" );

			assert.equal( result, true );

		} );
	} );

	describe( "`blon( true ).toObject( )`", ( ) => {
		it( "should return object type", ( ) => {
			let descriptor = blon( true ).toObject( );

			assert.equal( typeof descriptor, "object" );

			assert.equal( "type" in descriptor, true );

			assert.equal( "name" in descriptor, true );

			assert.equal( "value" in descriptor, true );

			assert.equal( "format" in descriptor, true );

		} );
	} );

	describe( "`blon( false )`", ( ) => {
		it( "should return State instance", ( ) => {
			let data = blon( false );

			assert.equal( typeof data, "object" );

			assert.equal( data.constructor.name, "State" );

			assert.equal( data.valueOf( ), false );

		} );
	} );

	describe( "`blon( false ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			let result = blon( false ).toString( );

			assert.equal( typeof result, "string" );

			assert.equal( result, "false" );

		} );
	} );

	describe( "`blon( false ).toNumber( )`", ( ) => {
		it( "should return number type", ( ) => {
			let result = blon( false ).toNumber( );

			assert.equal( typeof result, "number" );

			assert.equal( result.toString( ), "NaN" );

		} );
	} );

	describe( "`blon( false ).toBoolean( )`", ( ) => {
		it( "should return boolean type", ( ) => {
			let result = blon( false ).toBoolean( );

			assert.equal( typeof result, "boolean" );

			assert.equal( result, false );

		} );
	} );

	describe( "`blon( false ).toObject( )`", ( ) => {
		it( "should return object type", ( ) => {
			let descriptor = blon( false ).toObject( );

			assert.equal( typeof descriptor, "object" );

			assert.equal( "type" in descriptor, true );

			assert.equal( "name" in descriptor, true );

			assert.equal( "value" in descriptor, true );

			assert.equal( "format" in descriptor, true );

		} );
	} );

} );

//: @end-client


//: @bridge:

describe( "blon", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`blon( true )`", ( ) => {
		it( "should return State instance", ( ) => {
			//: @ignore:
			assert.equal( browser.url( bridgeURL ).execute( function( ){ return typeof blon( true ); } ).value, "object" );
			//: @end-ignore

			assert.equal( browser.url( bridgeURL ).execute( ( ) => blon( true ).constructor.name ).value, "State" );

			assert.equal( browser.url( bridgeURL ).execute( ( ) => `${ blon( true ).valueOf( ) }` ).value, "true" );

		} );
	} );

	describe( "`blon( true ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
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

			assert.equal( result, true );
			
		} );
	} );

	describe( "`blon( true ).toNumber( )`", ( ) => {
		it( "should return number type", ( ) => {
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

			assert.equal( result, true );

		} );
	} );

	describe( "`blon( true ).toBoolean( )`", ( ) => {
		it( "should return boolean type", ( ) => {
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

			assert.equal( result, true );

		} );
	} );

	describe( "`blon( true ).toObject( )`", ( ) => {
		it( "should return object type", ( ) => {
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

			assert.equal( result, true );
		} );
	} );

	describe( "`blon( false )`", ( ) => {
		it( "should return State instance", ( ) => {
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

			assert.equal( result, true );

		} );
	} );

	describe( "`blon( false ).toString( )`", ( ) => {
		it( "should return string type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let data = blon( false ).toString( );

					let test = typeof data == "string" && data == "false";

					return test;
				}

			).value;
			//: @end-ignore

			assert.equal( result, true );

		} );
	} );

	describe( "`blon( false ).toNumber( )`", ( ) => {
		it( "should return number type", ( ) => {
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

			assert.equal( result, true );

		} );
	} );

	describe( "`blon( false ).toBoolean( )`", ( ) => {
		it( "should return boolean type", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					let result = blon( false ).toBoolean( );

					let test = typeof result == "boolean" && result == false;

					return test;
				}

			).value;
			//: @end-ignore

			assert.equal( result, true );

		} );
	} );

	describe( "`blon( false ).toObject( )`", ( ) => {
		it( "should return object type", ( ) => {
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

			assert.equal( result, true );

		} );
	} );

} );

//: @end-bridge
