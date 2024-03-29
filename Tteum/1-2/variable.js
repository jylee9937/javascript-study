// 1. Use strict
// added in ES 5
// use this for valina JavaScript.
'use strict';
console.log(age);
// 2. Variable
// let (added in ES6)
// 자바스크립트에서 변수를 선언할 수 있는 키워드는 딱 하나 let이다.
let globalName = 'global name';
{
    let name = 'Tteum';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log('globalName');
}
console.log(name);
console.log('globalName');

// var (don't ever use this!)
// var hoisting=(끌어 올려주다.) (move declaration from bottom to top)
// has no block scope
{
    console.log(age);
    age = 4;
}
console.log(age);

// 3. Contants
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable ytpes
// primitive, single item: number, string, boolean, null, undefiedn, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${count}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890; // over (-2**53) ~ 2*53
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
// Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting }`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // flase
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(symbol1 === symbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const Tteum = { name: 'Tteum', age: 20};

// 5. Dynamic typing: dynamically  typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));