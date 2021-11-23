//
// Code structure
// Variables
// Types of primitives
// The main operators
// Comparisons
// Logical operators: &&, ||,!
// Branching: if, else, else if


// Code structure


//     Statements
// Statements are syntax constructs and commands that
// perform actions.
// statement, alert('Hello, world!'), which shows the
// message “Hello, world!”.
// We can have as many statements in our code as we want.
// Statements can be separated with a semicolon.
// For example, here we split “Hello World” into two alerts:

// alert('Hello'); alert('World');

// Usually, statements are written on separate lines to
// make the code more readable:

// alert('Hello');
// alert('World');


// Semicolons
// A semicolon may be omitted in most cases when a line
// break exists.
// This would also work:
//
// alert('Hello')
// alert('World')


// Here, JavaScript interprets the line break as an “implicit”
// semicolon.
// his is called an automatic semicolon insertion.
// In most cases, a newline implies a semicolon.
// But “in most cases” does not mean “always”!
// There are cases when a newline does not mean a semicolon.
// For example:

// alert(3 +
//     1
//     + 2);

// But there are situations where JavaScript “fails” to
// assume a semicolon where it is really needed.
// Errors which occur in such cases are quite hard
// to find and fix.
// An example of an error
//
// [1, 2].forEach(alert)
//
// Now, let’s add an alert before the code and not finish it
// with a semicolon:
//
// alert("There will be an error")
// [1, 2].forEach(alert)

// So, because the semicolon is not auto-inserted, the code
// in the first example is treated as a single statement.
//Here’s how the engine sees it:
//
// alert("There will be an error")[1, 2].forEach(alert)


// Comments
//
// As time goes on, programs become more and more complex.
// It becomes necessary to add comments which describe what
// the code does and why.
//
// Comments can be put into any place of a script. T
// They don’t affect its execution because the engine simply
// ignores them.
//
// One-line comments start with two forward slash characters //.
//
// The rest of the line is a comment. It may occupy a full line
// of its own or follow a statement.
// с

// // This comment occupies a line of its own
// alert('Hello');
//
// alert('World'); // This comment follows the statement


// Multiline comments
// start with a forward slash and an asterisk /*
// and end with an asterisk and a forward slash */.


// alert('Hello');
// alert('World');
//
// /* Commenting out the code
// alert('Hello');
// */
// alert('World');


// Nested comments are not supported!

/*
  /* nested comment ?!? */
// */
// alert( 'World' );


// Variables
// Most of the time, a JavaScript application needs to work with
// information.
//
//
// A variable is a “named storage” for data.
// We can use variables to store goodies, visitors,
// and other data.
//
// To create a variable in JavaScript, use the let keyword.
//
// The statement below creates (in other words: declares)
// a variable with the name “message”:
//
//
// let message;
//
// Now, we can put some data into it by using the
// assignment operator =:
//
// let message;
// //
// message = 'Hello'; // store the string
// console.log(message);

// To be concise, we can combine the variable declaration
// and assignment into a single line:
//
// let message = 'Hello!'; // define the variable and assign
// the value
//
// alert(message); // Hello!

// We can also declare multiple variables in one line:
//
// let user = 'John', age = 25, message = 'Hello';

// console.log(user, age, message);
//
// That might seem shorter, but we don’t recommend it.
// For the sake of better readability, please use a single
// line per variable.
// The multiline variant is a bit longer, but easier to read:
//
// let user = 'John';
// let age = 25;
// let message = 'Hello';
// //
// Some people also define multiple variables in this
// multiline style:
//
//     let user = 'John',
//         age = 25,
//         message = 'Hello';
//
// …Or even in the “comma-first” style:
//
//     let user = 'John'
//         , age = 25
//         , message = 'Hello';


// let var examples
//     global scope
//     local scope - inside function scope

// if(true) {
//     var a = 'ES5'
// }
// console.log(a);

// if(true) {
//     let b = 'ES6'
//     console.log(b);
// }
// console.log(b);
//
// if(true) {
//     const c = 'CONST'
// }
// console.log(c);


// hoisting

// console.log(a)
// var a = 10
// console.log(a)

//
// console.log(b)
// let b = 10

// // Changing let value
// let message;
// message = 'Hello!';
// message = 'World!';
// alert(message);

// let hello = 'Hello world!';
// let message;
// message = hello;
// // // now two variables hold the same data
// alert(hello); // Hello world!
// alert(message); // Hello world!

// let messge = "This";
// //
// // // repeated 'let' leads to an error
// let message = "That";


// Variable naming
//
// There are two limitations on variable names in JavaScript:
//
// The name must contain only
// letters,
// digits,
// symbols $ and _.
//
//     The first character must not be a digit.
//     Examples of valid names:
// //
// let userName;
// let test123;
// let 1

// When the name contains multiple words, camelCase is commonly used.
//     That is: words go one after another,
//     each word except first starting with a capital letter:
// let totalAmount
// let firstName
// let totalAmountCalculator
// let firstLectureJS
// //
//
// the dollar sign '$' and the underscore '_' can
// also be used in names.
// They are regular symbols,
// just like letters, without any special meaning.
//
// let $ = 1;
// let _ = 2;
// console.log($ + _);

//
// Examples of incorrect variable names:
//
// let 1;
// let my-name;


// Variables named
// let apple = 1;
// let AppLE = 2;
// console.log(apple)
// console.log(AppLE)
//
// are two different variables.

// Non-Latin letters are allowed, but not recommended
//
// let имя = '...';
// let 我 = '...';

// Reserved names
//
// For example: let, class, return, and function are reserved.

//
// let let = 5
// let return = 5

// Constants
// To declare a constant (unchanging) variable,
//
// use const instead of let:
//
// const myBirthday = '18.04.1982';
//
// Variables declared using const are called “constants”.
// They cannot be reassigned. An attempt to do
// so would cause an error:

// const myBirthday = '18.04.1982';
// myBirthday = '01.01.2001';
//
// Uppercase constants
//
// There is a widespread practice to use constants
// as aliases for
// difficult-to-remember values that are known prior
// to execution.
//
// Such constants are named using capital letters
// and underscores.

// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";
//
// let color = COLOR_ORANGE;
// alert(color); // #FF7F00

// Name things right!!!



// Data types
// A value in JavaScript is always of a certain type.
//     There are 8 basic data types in JavaScript.
//
//     Number
// let n = 123;
// n = 12.345;
//
//
// NaN represents a computational error. It is a
// result of an incorrect or an u
// ndefined mathematical operation, for instance:
//
// alert( "not a number" / 2 ); // NaN, such division is
// erroneous
// NaN is sticky. Any further operation on NaN returns NaN:
//
// alert( "not a number" / 2 + 5 ); // NaN
// So, if there’s a NaN somewhere in a mathematical
// expression, it propagates to the whole result.
//

// There are many operations for numbers, e.g. multiplication *,
// division /, addition +, subtraction -, and so on.
//
// Besides regular numbers, there are so-called
// “special numeric values”
// which also belong to this data type:
// Infinity, -Infinity and NaN.
//
// Infinity represents the mathematical Infinity ∞.
// It is a special value that’s greater than any number.
//
// We can get it as a result of division by zero:
//
// alert( 1 / 0 ); // Infinity
//
// Mathematical operations are safe
// Doing maths is “safe” in JavaScript. We can do anything:
// divide by zero, treat non-numeric strings as numbers, etc.
//
// The script will never stop with a fatal error (“die”).
// At worst, we’ll get NaN as the result.

// BigInt
// In JavaScript, the “number” type cannot represent
// integer values
// larger than (253-1) (that’s 9007199254740991),
// or less than -(253-1) for negatives.
//
// It’s a technical limitation caused by their internal
// representation.
//
// BigInt type was recently added to the language to represent
// integers
//
// A BigInt value is created by appending n to the end of an
// integer:
//
// const bigInt = 1234567890123456789012345678901234567890n;

//
//Compatibility issues
// Right now, BigInt is supported in
// Firefox/Chrome/Edge/Safari, but not in IE.
//
// console.log(1n + 2n);
// console.log(5n / 2n);
//
// console.log(1n + 2);
//
// let bigint = 1n;
// let number = 2;

// number to bigint
// console.log(bigint + BigInt(number)); // 3

// bigint to number
// console.log(Number(bigint) + number); // 3
//
//
// let bigint = 1n;
// console.log( +bigint );
//
//
// console.log( 2n > 1n );
// console.log( 2n > 1 );
//
// console.log( 1 == 1n );
// console.log( 1 === 1n );
//
//
// For instance, in if, bigint 0n is falsy,
// other values are truthy:
//
//     if (0n) {
//         // never executes
//     }
// Boolean operators, such as ||, && and others also
// work with bigints similar to numbers:
//
// alert( 1n || 2 ); (1n is considered truthy)
// alert( 0n || 2 ); (0n is considered falsy)
//
//
// String
// A string in JavaScript must be surrounded by quotes.
//
// let str = "Hello";
// let str2 = 'Single quotes are ok too';
// let phrase = `can embed another`;
//
// console.log(str);
// console.log(str2);
// console.log(phrase);
// In JavaScript, there are 3 types of quotes.
//
//Double quotes: "Hello".
//Single quotes: 'Hello'.
//Backticks: `Hello`.
//Double and single quotes are “simple” quotes.
// There’s practically no difference between them in JavaScript.
//
//Backticks are “extended functionality” quotes.
//They allow us to embed variables and expressions
// into a string by wrapping them in ${…}, for example:
//
// let name = "John";
// console.log( `Hello, ${name}!` );
//
// // embed an expression
// console.log( `the result is ${1 + 2}` ); // the result is 3
// We can put anything in there: a variable like name or an
// arithmetical expression like 1 + 2 or something more complex.
//
// console.log( "the result is ${1 + 2}" );

//
// Boolean (logical type)
//
//
// The boolean type has only two values: true and false.
//

// For instance:

// let nameFieldChecked = true;
// let ageFieldChecked = false;
// //
// console.log(nameFieldChecked)
// console.log(ageFieldChecked)
// Boolean values also come as a result of comparisons:
//
// let isGreater = 4 > 1;
// console.log( isGreater )

// The “null” value
// The special null value does not belong to any
// of the types described above.
//
//It forms a separate type of its own which contains only
// the null value:
//
// let age = null;
// In JavaScript, null is not a
// “reference to a non-existing object” or a
// “null pointer” like in some other languages.
//
//It’s just a special value which represents “nothing”,
// “empty” or “value unknown”.
//
// The code above states that age is unknown.


// The “undefined” value
// The special value undefined also stands apart.I
// t makes a type of its own, just like null.
//
// The meaning of undefined is “value is not assigned”.
//
// If a variable is declared, but not assigned,
// then its value is undefined:
//
//     let age;
// //
// console.log(age); // shows "undefined"
// //

// Objects and Symbols
// The object type is special.
//
// All other types are called “primitive” because their values
// can contain only a single thing (be it a string or a
// number or whatever).
// In contrast, objects are used to store collections
// of data and more complex entities.
//
// The symbol type is used to create unique identifiers
// for objects. We have to mention
// it here for the sake of completeness,
// but also postpone the details till we know objects.

// const user = {
//     name: "Ihor",
//     sex: "male",
//     age: '34',
//     sayHello(){
//     console.log(`Hello, my name is ${this.name}`)
//     }
// };


//
// let name = "Ihor"
// let sex = "male"
// let age = '34'
// //
// const user = {
//     firstName: name,
//     gender: sex,
//     isOld: age,
// };
//
// console.log(user);
// user.sayHello();
// const user = {
//     firstname: name,
//     gender: sex,
// }
// user.job = "reactDev";
//
// console.log(user);


// Symbols avoid names and values conflicts
// unique values

//
// let a = Symbol();
// console.log(typeof a);
//
// let a = Symbol();
// console.log(typeof a);

// //there is name property for Symbol
// let a = Symbol('mySymbol');
// console.log(a);

// you can use same name for different Symbols

// let a = Symbol('mySymbol');
// let b = Symbol('mySymbol');
// //
// console.log(a===b);


// let a = Symbol.for('mySymbol');
// let b = Symbol.for('mySymbol');
//
// console.log(a===b);



// let a = Symbol.for('mySymbol');
// let symbolName = Symbol.keyFor(a);
//
// console.log(symbolName);
//
// let user = {
//     name: "Ihor",
//     age: '34',
//     [Symbol.for('password')]: 'Igor34'
// }
// //
// console.log(user);
// console.log(user.password);
// console.log(user[Symbol.for('password')]);


// let user = {
    // name: "Ihor",
    // age: '34',
    // [Symbol.for('password')]: 'Igor34',
    // [Symbol.for('nickname')]: 'Freeman'
// }
//
// console.log(user);
// console.log(user.password);
// console.log(user.password);
// console.log(user[Symbol.for('password')]);
//
// console.log(Object.getOwnPropertySymbols(user))
//
//
//



// The typeof operator
//
// It supports two forms of syntax:
//
//     As an operator: typeof x.
//     As a function: typeof(x).


// console.log(typeof undefined)
// console.log(typeof 0)
// console.log(typeof 10n)
// console.log(typeof true)
// console.log(typeof "foo")
// console.log(typeof Symbol("id"))
// console.log(typeof null)
// console.log(typeof alert)


// Math is a built-in object that provides mathematical operations.
// Here, it serves just as an example of an object.
//
// The result of typeof null is "object".
// That’s an officially recognized error in typeof behavior,
// coming from the early days of JavaScript and kept for
// compatibility.
// Definitely, null is not an object. It is a special value
// with a separate type of its own.
//
// The result of typeof alert is "function", because alert is a
// function.
// there’s no special “function” type in JavaScript.
// Functions belong to the object type.
// But typeof treats them differently, returning "function".
// That also comes from the early days of JavaScript.
// Technically, such behavior isn’t correct,
// but can be convenient in practice.
//

// Summary
// There are 8 basic data types in JavaScript.
//
//number for numbers of any kind: integer or floating-point,
// integers are limited by ±(253-1).
//bigint is for integer numbers of arbitrary length.
//string for strings. A string may have zero or more characters,
// there’s no separate single-character type.
//boolean for true/false.
//null for unknown values – a standalone type that has a single
// value null.
//undefined for unassigned values – a standalone type that has
// a single value undefined.
//object for more complex data structures.
//symbol for unique identifiers.


//
// Basic operators, maths
//
// Terms: “unary”, “binary”, “operand”
// Before we move on, let’s grasp some common terminology.
//
// An operand – is what operators are applied to.
// For instance, in the multiplication of 5 * 2 there are
// two operands:
// the left operand is 5 and the right operand is 2. Sometimes,
// people call these “arguments” instead of “operands”.
//
// An operator is unary if it has a single operand.
// For example, the unary negation - reverses the sign of
// a number:
//
// let x = 1;
// x = -x;
// console.log( x );
//
// let x = 1, y = 3;
// console.log( y - x );

//
// Maths
// The following math operations are supported:
//
//     Addition +,
//     Subtraction -,
//     Multiplication *,
//     Division /,
//     Remainder %,
//     Exponentiation **.
// The first four are straightforward, while % and ** need
// a few words about them.
//


// Remainder %
// The remainder operator %, despite its appearance,
// is not related to percents.
//
// The result of a % b is the remainder of the integer
// division of a by b.
//
// console.log( 4 % 2)
// console.log( 8 % 3)

//
//
// Exponentiation **
// The exponentiation operator a ** b raises a to the power of b.
//
// console.log(2**2)
// console.log(2**3)
// console.log(5**2)
//
// console.log( 4 ** (1/2) )
// console.log( 8 ** (1/3) )




// String concatenation with binary +
// Let’s meet features of JavaScript operators that
// are beyond school arithmetics.
//
//Usually, the plus operator + sums numbers.
//
//But, if the binary + is applied to strings,
// it merges (concatenates) them:
//
// let s = "my" + "string";
// console.log(s);
//
// Note that if any of the operands is a string,
// then the other one is converted to a string too.

//
// console.log( '1' + 2 );
// console.log( 2 + '1' );

// // A bit complex )
// console.log(2 + 2 + '1' );
//
// console.log('1' + 2 + 2)

// The binary + is the only operator that supports strings
// in such a way.
// Other arithmetic operators work only with numbers and
// always convert their operands to numbers.

// console.log( 6 - '2' );
// console.log( '6' / '2' );


// Numeric conversion, unary +
// The plus + exists in two forms: the binary form that
// we used above and the unary form.
//
// The unary plus or, in other words,
// the plus operator + applied to a single value,
// doesn’t do anything to numbers.
// But if the operand is not a number,
// the unary plus converts it into a number.
//
// let x = 1;
// console.log( +x );
// //
// let y = -2;
// console.log( +y );
//
// Converts non-numbers
// console.log( +true );
// console.log( +"" );

// console.log(Number(true))
// console.log(Number(false))

// //
// let apples = "2";
// let oranges = "3";
//
// console.log( apples + oranges );
//
// // both values converted to numbers before the binary plus
// console.log( +apples + +oranges );
//
// // the longer variant
// console.log( Number(apples) + Number(oranges) );
//
//
//
// console.log(1 + 2 * 2)
// console.log((1 + 2) * 2)

//
// let x = 2 * 2 + 1;
// console.log( x )


// let a = 1+1;
// let b = 2;
// let c = 3 - (a = b + 1);
// console.log( a );
// console.log( c );


// let a, b, c;
//
// a = b = c = 2 + 2;
//
// console.log( a )
// console.log( b )
// console.log( c )


// Modify-in-place

// let n = 2;
// console.log(n)
//
// n = n + 5;
// console.log(n)
//
// n = n * 2;
// console.log(n)


//
// let n = 2;
// console.log(n)
// n += 5;
// console.log(n)
// n *= 2;
// console.log(n)

// let n = 2;
// n *= 3 + 5;
// console.log( n )


//
// Increment/decrement
//
// Increment ++ increases a variable by 1:
// Decrement -- decreases a variable by 1:
//
//
// //
// let counter = 2;
// ++counter;
// console.log( counter )

//
//
// let counter = 2;
// counter--;
// console.log( counter )
// //
//
// Increment/decrement can only be applied to variables.
// Trying to use it on a value like 5++ will give an error.


// let counter = 2;
// ++counter;
// console.log( counter )
// //
// let counter = 2;
// --counter;
// console.log( counter )

//
// let counter = 2;
// let a = ++counter;
// console.log(a)
// //
// //
// let counter2 = 2;
// let b = counter2++;
// console.log(b)


// If the result of increment/decrement is not used,
//     there is no difference in which form to use:
//
//     let counter = 0;
// counter++;
// ++counter;
// console.log( counter )

// If we’d like to increase a value and immediately
// use the result of the operator,
// // we need the prefix form:
// //
//     let counter = 0;
// console.log( ++counter )
//1
// // If we’d like to increment a value but use its
// previous value, we need the postfix form:
//
//     let counter2 = 0;
// console.log( counter2++ )
//
//
// let counter = 1;
// console.log( 2 * ++counter );
//
// let counter = 1;
// console.log( 2 * counter++ );


// Comparisons
//
// We know many comparison operators from maths.
//
// Greater/less than: a > b, a < b.
// Greater/less than or equals: a >= b, a <= b.
// Equals: a == b, please note the double equality sign ==
// means the equality test, while a single one a = b means
// an assignment.
// Not equals. In maths the notation is ≠, but in
// JavaScript it’s written as a != b.

    // Boolean is the result
// All comparison operators return a boolean value:

// true – means “yes”, “correct” or “the truth”.
// false – means “no”, “wrong” or “not the truth”.
//
// console.log( 2 > 1 );
// console.log( 2 == 1 );
// console.log( 2 != 1 );

// // A comparison result can be assigned to a variable
//
// let result = 5 > 4;
// console.log( result )
//
// String comparison
//
// To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.
//
// In other words, strings are compared letter-by-letter.
//
// For example:

// console.log( 'a' > 'a' );
// console.log( 'Z' > 'A' );
// console.log( 'Glow' > 'Glee' );
// console.log( 'Bee' > 'Be' );
// //
// The second comparison 'Glow' and 'Glee'
// needs more steps as strings
// are compared character-by-character:
//
// G is the same as G.
// l is the same as l.
// o is greater than e. Stop here.
//
// The first string is greater.

//
// Comparison of different types
// When comparing values of different types,
// JavaScript converts the values to numbers.
//
// console.log( '2' > 1 );
// console.log( '01' == 1 );
// console.log( '01' === 1 );
//
//
// A funny consequence
//
// It is possible that at the same time:
//
// Two values are equal.
// One of them is true as a boolean and the other one is false as a boolean.

// let a = 0;
// console.log( Boolean(a) );
//
// let b = "0";
// console.log( Boolean(b) );
//
// console.log(a == b);

// From JavaScript’s standpoint,
// this result is quite normal.
// An equality check converts values using the numeric
// conversion (hence "0" becomes 0),
// while the explicit Boolean conversion uses another
// set of rules.


// console.log(Boolean("0"))
// console.log(Boolean(0))
//
//
// Strict equality
// A regular equality check == has a problem.
// It cannot differentiate 0 from false:

// console.log( 0 == false );

// The same thing happens with an empty string:
// console.log( "0" == false );

// console.log(Boolean(1))
// console.log(Boolean(0))
//
// operands of different types are converted to numbers
// by the equality operator ==
// An empty string, just like false, becomes a zero.
//
// A strict equality operator === checks the equality
// without type conversion.
//
// console.log( 0 == false );
// console.log( 0 == false );


// Comparison with null and undefined

// There’s a non-intuitive behavior
// when null or undefined are compared to other values.

// console.log( null === undefined )
// console.log( null == undefined )

// For maths and other comparisons < > <= >=
// null/undefined are converted to numbers: null becomes 0,
// while undefined becomes NaN.
//
// funny things that happen when we apply these rules.
// And, what’s more important, how to not fall into a
// trap with them.

// console.log( null > 0 )
// console.log( null == 0 )
// console.log( null >= 0 )
//
// equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That’s why null >= 0 is true and  null > 0 is false.

// An incomparable undefined
// The value undefined shouldn’t be compared to other values:
//
// console.log( undefined > 0 );
// console.log( undefined < 0 );
// console.log( undefined == 0 );

// We get these results because:
// Comparisons (1) and (2) return false
// because undefined gets converted to NaN
// and NaN is a special numeric value which
// returns false for all comparisons.
//
// The equality check (3) returns false because undefined
// only equals null,
// undefined, and no other value.
//

// Treat any comparison with undefined/null
// except the strict equality === with exceptional care.
// Don’t use comparisons >= > < <= with a variable which
// may be null/undefined, unless you’re really sure of what
// you’re doing.
// If a variable can have these values, check for them separately.
//
//
// Summary
// Comparison operators return a boolean value.
// Strings are compared letter-by-letter in the “dictionary”
// order.
// When values of different types are compared, they get converted to
// numbers (with the exclusion of a strict equality check).
// The values null and undefined equal == each other
// and do not equal any other value.
// Be careful when using comparisons like > or <
// with variables that can occasionally be null/undefined.
//
// Checking for null/undefined separately is a good idea.



// Logical operators
// There are four. logical operators in JavaScript:
// || (OR),
// && (AND),
// ! (NOT),
// ?? (Nullish Coalescing).


// || (OR)
// The “OR” operator is represented with two vertical line symbols:

    // There are four possible logical combinations:
//
// console.log( true || true );
// console.log( false || true );
// console.log( true || false );
// console.log( false || false );

// let a;
// let b = 1;
// console.log(a || b)

// Most of the time, OR || is used in an if statement
// to test if any of the given conditions is true.

// let hour = 12;
// if (hour < 10 || hour > 18) {
//     console.log( 'The office is closed.' );
// }

// let hour = 12;
// let isWeekend = false;
//
// if (hour < 10 || hour > 18 || isWeekend) {
//     console.log( 'The office is closed.' );
// }
//
// OR "||" finds the first truthy value

// console.log( 1 || 0 );
// console.log( null || 1 );
// console.log( null || 0 || 1 );
// console.log( undefined || null || 0 );

//
// let firstName = "";
// let lastName = "";
// let nickName = "";
//
// console.log( firstName || lastName || nickName || "Anonymous");

// true || alert("not printed");
// false || alert("not printed");


// && (AND)
// In classical programming,
// AND returns true if both operands are truthy and false otherwise
// console.log( true && true );
// console.log( false && true );
// console.log( true && false );
// console.log( false && false );


// let hour = 11;
// let minute = 30;
//
// if (hour === 12 && minute === 30) {
//     alert( 'The time is 12:30' );
// }

// Just as with OR, any value is allowed as an operand of AND:
//
//     if (1 && 0) { // evaluated as true && false
//         alert( "won't work, because the result is falsy" );
//     }

// AND “&&” finds the first falsy value
//
// The AND && operator does the following:
// Evaluates operands from left to right.
//
// For each operand, converts it to a boolean.
// If the result is false, stops and returns the
// original value of that operand.
//
// If all operands have been evaluated
// (i.e. all were truthy), returns the last operand.

// // if the first operand is truthy,
// // AND returns the second operand:
// console.log( 1 && 0 ); // 0
// console.log( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
// console.log( null && 5 ); // null
// console.log( 0 && "no matter what" ); // 0

// console.log( 1 && 2 && null && 3 )
//
// alert( 1 && 2 && 3 )


// let a=2;
// let b=2;
// (a && b) && console.log('TRUE')
// // a && console.log('TRUE')

// ! (NOT)
// The boolean NOT operator is represented with an exclamation sign !.
//
// The operator accepts a single argument and does the following:
//
//     Converts the operand to boolean type: true/false.
//     Returns the inverse value.

// console.log( !true );
// console.log( !0 )
//
// A double NOT !!
// is sometimes used for converting a value to boolean type:

// console.log(!!'empty')
// console.log(!!'')
// console.log(!!null)
//
//
// console.log(Boolean('empty'))
// console.log(Boolean(''))
// console.log(Boolean(null))


// Nullish coalescing operator '??'

// let a;
// let b;
// let result = a ?? b
// console.log(result)
//
// let firstName = null;
// let lastName = null;
// let nickName ='Me';
//
// console.log(firstName ?? lastName ?? nickName ?? "Anonymous");
//
//
// The important difference between || ?? is that:
//
// || returns the first truthy value.
// ?? returns the first defined value.
//
// let height = 0;
//
// console.log(height || 100);
// console.log(height ?? 100)


// Conditional branching: if, '?'
// Sometimes, we need to perform different actions
// based on different conditions.

// let a = "one"
// if (a) {
//     console.log(a)
// }
//
// let b = '12';
//  if(b) console.log("HEllO")

// let d = 5;
// if(d) console.log("HEllO")


// The “else” clause

// let a = 142
 //
 // if(a === "one") {
 //     console.log("ONE")
 // } else {
 //     console.log('a is not one(')
 // }

// Several conditions: “else if”

// let a = 4324
//
//  if(a === "one") {
//      console.log("ONE")
//  } else if (a==='two'){
//      console.log('a is two')
//  } else if (a==='seven') {
//      console.log('a is seven')
//  } else {
//      console.log(`a is ${a}`)
//  }

// Conditional operator ‘?’

// let accessAllowed;
// let age = prompt('How old are you?', '');
// if (age > 18) {
//     accessAllowed = 'Access is allowed';
// } else {
//     accessAllowed = 'Access is not allowed';
// }
// console.log(accessAllowed);

// let age = 25;
// // let access = (age > 18)
// //     ? 'Access is allowed'
// //     : 'Access is NOT allowed'
//
// let access = age > 18 ? 'Allowed' : 'NOT allowed'
// //
// console.log(access)

// let age = 125;
// let message = (age < 3) ? 'Hi, baby!' :
//     (age < 18)
//         ? 'Hello!'
//         : (age < 100)
//             ? 'Greetings!'
//             : 'What an unusual age!';
//
// console.log(message);

// END OF TOPIC 1
// GREETINGS ))
