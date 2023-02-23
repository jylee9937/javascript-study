// 1. Use strict
// added in ES5
// use this for Valina javascript.
'use strict'

// 2. Variable, rw(read/write)
// let ( added in ES 6)
// global scope을 사용하면 메모리 상에 계속 남아 있는다고 한다.
let globalName = 'global name';


{
	let name = 'Lofo';
	console.log(name);
	name = 'hello';
	console.log(name);
}

console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move decalaration from bottom to top)
// has no block scope
{
	age = 4;
	var age;
}
console.log(age);

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change

const dayInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons :
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; //integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(nAn); // NaN

// bigInt (fairly new, don't use it yet)
const bigInt = 12345678901234567890123455667890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// ture: any other value
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;
console.log(`value: ${nothing}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

console.log(symbol1 === symbol2); // false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${symbol1.description}`);

// object, real-life object, data structure
const ellie = {name: 'elle', age: 20};
ellie.age = 21;

// 5. Dynamic typing: dynamically typed languages
let text = 'hello';
console.log(`value: ${text}, type: ${typeof text}`); // string

text = 1;
console.log(`value: ${text}, type: ${typeof text}`); //number

text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // string

text = '8'/'2';
console.log(`value: ${text}, type: ${typeof text}`); // number
