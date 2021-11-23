// TOPIC #2
// The "switch" statement
// A switch statement can replace multiple if checks.
//
// switch(x) {
// case 'value1':  // if (x === 'value1')
// ...
//     [break]
//
// case 'value2':  // if (x === 'value2')
// ...
//     [break]
//
// default:
// ...
//     [break]
// }





// let a = 4;
// switch (a) {
//     case 3:
//         alert( 'Too small' );
//         break;
//     case 4:
//         alert( 'Exactly!' );
//         break;
//     case 5:
//         alert( 'Too big' );
//         break;
//     default:
//         alert( "I don't know such values" );
// }






// NOTICE!!
//     If there is no break then the execution continues
// with the next case without any checks.
// let a = 5;
// switch (a) {
//     case 3:
//         alert( 'Too small' );
//         // break;
//     case 4:
//         alert( 'Exactly!' );
//         // break;
//     case 5:
//         alert( 'Too big' );
//         // break;
//     default:
//         alert( "I don't know such values" );
// }







// let a = 4;
// let b;
// switch (a) {
//     case 3:
//         b= 'Too small';
//         break;
//     case 4:
//         b ='Exactly!';
//         break;
//     case 5:
//         b='Too big';
//         break;
//     default:
//        b = "I don't know such values";
// }
// console.log(b)


// Can group cases
// let a = 6;
// let b;
// switch (a) {
//     case 4:
//         b ='Exactly!';
//         break;
//     case 3:
//     case 5:
//         b='it\'s really close';
//         break;
//     default:
//        b = "Sorry, the answer is incorect";
// }
// console.log(b)




// Type matters
// let a = '2';
// let b;
// switch (a) {
//     case '2':
//         b ='Exactly!';
//         break;
//     case 3:
//     case 5:
//         b='it\'s really close';
//         break;
//     default:
//        b = "Sorry, the answer is incorect";
// }
// console.log(b)




// Loops: while and for


//  We often need to repeat actions.
//

// while (condition) {
//     // code
//     // so-called "loop body"
// }
//
// let i = 0;
// while (i < 3) {
//     console.log( i );
//     i++;
// }
// !!!show debugger

// let i = 3;
// while (i) {
//     console.log( i );
//     // i--;
// }
// when i becomes 0, the condition becomes falsy,
// and the loop stops


// if singe line no {} needed
// let i = 3;
// while (i) console.log(i--);



// let i = 0;
// do {
//     console.log( i );
//     i++;
// } while (i < 3);





// The “for” loop
// The for loop is more complex,
// but it’s also the most commonly used loop.
//
// for (begin; condition; step) {
//     // ... loop body ...
// }



// !!!show debugger
// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }




// Inline variable declaration
// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }
// console.log(i);




// Skiping parts

// let i = 0;
// for (; i < 3; i++) {
//     console.log( i );
// }

// let i = 0;
// for (; i < 3;) {
//     alert( i++ );
// }



// Breaking the loop
// Normally, a loop exits when its condition becomes falsy.
// But we can force the exit at any time using the special
// break directive.


// let sum = 0;
// while (true) {
//     let value = +prompt("Enter a number", '');
//     if (!value) break;
//     sum += value;
// }
// alert( 'Sum: ' + sum );



// Continue to the next iteration
//
// We can use it if we’re done with the
// current iteration and would like to move on to the next one.

// for (let i = 0; i < 10; i++) {
//     if (i % 2==) continue;
//     console.log(i);
// }


// The continue directive helps decrease nesting
// for (let i = 0; i < 10; i++) {
//     if (i % 2) {
//         console.log( i );
//     }
// }


// for (let i = 0; i < 10; i++) {
//     if (i > 5) {
//         console.log(i);
//     } else {
//         continue;
//     }
// }
//
// for (let i = 0; i < 10; i++) {
//     if (i > 5) ? alert(i) : continue;
// }


// We need a way to stop the process if the user cancels the input.
//

// outer: for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//
//         let input = prompt(`Value at coords (${i},${j})`, '');
//
//         // if an empty string or canceled, then break out of both loops
//         if (!input) break outer; // (*)
//
//         // do something with the value...
//     }
// }
// alert('Done!');



// Summary
// 3 types of loops:
//     while – The condition is checked before each iteration.
//     do..while – The condition is checked after each iteration.
// for (;;) – The condition is checked before each iteration,
//     additional settings available.
//
//     To make an “infinite” loop,
//     usually the while(true) construct is used.
//     Such a loop, just like any other, can be stopped with
//     the break directive.
//
// If we don’t want to do anything in the current iteration
// and would like to forward to the next one,
// we can use the continue directive.
//
// break/continue support labels before the loop.
// A label is the only way for break/continue to escape a nested
// loop to go to an outer one.




// OBJECTS
// there are eight data types in JavaScript.
// Seven of them are called “primitive”,
// because their values contain only a single thing
// (be it a string or a number or whatever).


// let user = new Object();
// let user = {};

// let user = {     // an object
//     name: "John",  // by key "name" store value "John"
//     age: 30,
//     sayHello(){
//         alert(this.name)
//     }// by key "age" store value 30
// };
//
// console.log(user)
// delete user.age;
// console.log(user)



//     const user = {
//         name: "John",
//         age: 30,
//     };
// //
// //
// // console.log(user)
// // console.log(user.likes birds)
// // console.log(user["age"])
// //
// user.likeBirds = false;
// console.log(user.likeBirds)




// let place = 'area'
//
//     let user = {
//         name: "John",
//         age: 30,
//         [place]: 'Lviv'
//     };
//
// console.log(user);


// let user = {
//     name: "John",
//     age: 30,
//     [place + '_Ukraine']: 'Lviv'
// };
//
// console.log(user);


// Property names limitations
// As we already know, a variable cannot have a name
// equal to one of language-reserved words like
// “for”, “let”, “return” etc.
//
// But for an object property, there’s no such restriction:

// let obj = {
//     for: 1,
//     let: 2,
//     return: 3
// };
//
// console.log(obj)


// Other types are automatically converted to strings.
// a number 0 becomes a string "0" when used as a property key:

// let obj = {
//         0: "test" // same as "0": "test"
//     }


// both alerts access the same property
// (the number 0 is converted to string "0")

    // console.log( obj["0"] );
    // console.log( obj[0] );
    // console.log( obj.0);




// Property existence test, “in” operator

// "key" in object

// let user = { name: "John", age: 30 };
// //
// console.log( "age" in user ); // true, user.age exists
// console.log( "blabla" in user ); // false, user.blabla doesn't exist
//


// let user = { age: 30 };
// let user2 = { age: 30 };
//
// let key = "age";
// console.log( key in user2 )


// The “for…in” loop

// for (key in object) {
//     // executes the body for each key among object properties
// }

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
// };

// for (let a in user) {
//     console.log( a );
//     // console.log( user[key] );
// }


// let codes = {
//     "49": "Germany",
//     "41": "Switzerland",
//     "44": "Great Britain",
//     "1": "USA"
// };
//
// console.log(codes);
// for (let code in codes) {
//     console.log(code);
// }


// let codes = {
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+44": "Great Britain",
//     "+1": "USA"
// };
//
// console.log(codes);
// for (let code in codes) {
//     console.log(code);
// }





// Object references and copying
// One of the fundamental differences
// of objects versus primitives is that
// objects are stored and copied “by reference”,
// whereas primitive values: strings, numbers, booleans,
// etc – are always copied “as a whole value”.



// A variable assigned to an object stores not the object itself,
// but its “address in memory” – in other words “a reference” to it.

//     let user = {
//         name: "John",
//         age:3,
//     };
// let admin = user;
// // console.log(user)
// // console.log(admin)
//
//     // admin.name = "Ihor"
// delete user.age
// console.log(user)
// console.log(admin)


// Comparison by reference
// let a = {
//     name: "1"
// };
// let b = a;
// console.log( a == b );
// console.log( a === b );
//
//
// let a = {
//     name: "1"
// };
// let b = {
//     name: "1"
// }; // two independent objects

// console.log( a === b ); // false


// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
// };

// console.log(Object.keys(object1));


// Cloning and merging, Object.assign

// let user = {
//     name: "John",
//     age: 30,
//     info: {
//         gender: 'male'
//     }
// };
//
// let clone = {}; // the new empty object
// //
// //
// for (let key in user) {
//     clone[key] = user[key];
// }
// delete user.name;
// console.log(user);
// console.log(clone);
// console.log(user==clone)
// //
//
// // clone.name = "Pete"; // changed the data in it
// //
// // console.log(user);
// // console.log(clone);

// Object.assign(dest, [src1, src2, src3...])
//
// let user = { name: "John" };
// // // //
// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };
// //
// let newUser = Object.assign(user, permissions1, permissions2)
// //
// // console.log(newUser)
// //
// user.gender = 'male'
//
// console.log(user)
// console.log(newUser)



// let newUser2 = Object.assign({}, user, permissions1, permissions2)
// user.gender = 'male'
// console.log(user)
// console.log(newUser2)


// let user = {
//     name: "John",
//     age: 30
// };
//
// let clone = Object.assign({}, user);
//
// console.log(clone === user);
let a = {
    key: 'value'
}
//
// let b = a;
// b.name = 'John';


// let b = {key: a.key};
// b.key = 'John'


// //Spread operator ES6
// //https://www.youtube.com/playlist?list=PLNkWIWHIRwMGLJXugVvdK7i8UagGQNaXD
// let b = {
//     ...a,
// }
// console.log(a===b)
//
// // b.key = 'John'

// console.log(a)
// console.log(b)
//
// console.log(a.key)
// console.log(a['key'])


// Nested cloning

// let original={}
// let copy = JSON.parse(JSON.stringify(original));





// ARRAY
// Objects allow you to store keyed collections of values.
// That’s fine)))
//
// There exists a special data structure named Array,
// to store ordered collections.



// There are two syntaxes for creating an empty array:

// let arr = new Array();
// let arr2 = [];
//
// let arr = ["Apple", "Pear", "etc"]
// // It’s rarely used, because square brackets [] are shorter.
// console.log(arr)


// let arr = new Array(5)
// console.log(arr)
// new Array(number) creates an array with the given length,
// but without elements.


// let fruits = ["Apple", null, "Another fruit"];
// // console.log(fruits);
//
// // get to each element using index
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// //


//Simple way to add element to array
// fruits[2] = "Lemon"
// console.log(fruits);
// fruits[3] =1
// console.log(fruits);

// fruits[5] = "Lemon"
// //
// console.log(fruits);
//

// LENGTH
// The total count of the elements in the array is its length
// console.log(fruits.length);
//

// Values
// let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
//
// console.log(arr)
//
// console.log(arr[1].name)
//
// arr[3]()



// about “length”
// let arr = [1, 2, 3, 4, 5];
//
// arr.length = 2; // truncate to 2 elements
// console.log( arr );
// //
// arr.length = 5; // return length back
// // console.log( arr[3] ); // undefined: the values do not return
// console.log(arr);


// ARRAY METHODS

// Methods pop/push, shift/unshift
// It supports two operations:

    // push adds an element to the end.
    // pop takes an element from the end.

// POP
// let fruits = ["Apple", "Orange", "Pear"];
// //
// console.log( fruits )
// // fruits.pop();
// // console.log( fruits )
// let popped = fruits.pop() ; // remove "Pear" and alert it
// console.log(popped)
// console.log( fruits )


// PUSH

// let fruits = ["Apple", "Orange", "Pear"];
//
// // console.log( fruits )
// fruits.push('Lemon', "Apple");
// // console.log( fruits.push('Lemon') );
//
// console.log( fruits )




// Methods that work with the beginning of the array:

// let fruits = ["Apple", "Orange", "Pear"];
//
// console.log( fruits )
// // fruits.shift();
// console.log( fruits.shift() ); // remove "Pear" and alert it
// //
// console.log( fruits )


// let fruits = ["Apple", "Orange", "Pear"];
// console.log( fruits )
// fruits.unshift("01");
// // console.log( fruits.unshift("Apple") ); // remove "Pear" and alert it
//
// console.log( fruits )


// Methods push and unshift can add multiple elements at once:

// let fruits = ["Apple"];
// console.log(fruits)
//
// fruits.push("Orange", "Peach");
// console.log(fruits)
//
// fruits.unshift("Pineapple", "Lemon");
// console.log( fruits );









// Internals
// An array is a special kind of object.
// The square brackets used to access a property arr[0]
// actually come from the object syntax.
//
// That’s essentially the same as obj[key],
// where arr is the object, while numbers are used as keys.
//
//They extend objects providing special methods
// to work with ordered collections of data and
// also the length property.
// But at the core it’s still an object.
//
//!!! Remember, there are only eight basic data types
// in JavaScript

// Array is an object and thus behaves like an object.
// For instance, it is copied by reference:


// let fruits = ["Banana"]
// // // let arr = fruits; // copy by reference (two variables reference the same array)
// let arr = [...fruits];
// //
// console.log( arr === fruits );
// //
// arr.push("Pear");
//
// console.log( fruits );
// console.log( arr );



// let fruits = []; // make an array
// //
// fruits[2] = 5; // assign a property with the index far greater than its length
// //
// fruits.age = 25;
// //
// console.log(fruits)

// That’s possible, because arrays are objects at their base.
// We can add any properties to them.





// The ways to misuse an array:
//
// Add a non-numeric property like arr.test = 5.
// Make holes, like: add arr[0] and then arr[1000]
// Fill the array in the reverse order, like arr[1000],
// arr[999] and so on.
//
// Think of arrays as special structures to work with the
// ordered data. They provide special methods for that.
//
// Arrays are carefully tuned inside JavaScript engines to
// work with contiguous ordered data, please use them this way.
//
// And if you need arbitrary keys, chances are high that you
// actually require a regular object {}.



// Loops

// let arr = ["Apple", "Orange", "Pear"];
//
// for (let i = 0; i < arr.length; i++) {
//     console.log( arr[i] );
// }
// //
//
// //
// let fruits = ["Apple", "Orange", "Plum", 'sdgsg'];
//
// // iterates over array elements
// for (let user of fruits) {
//     console.log( user );
// }






// splice()

// arr.splice(start[, deleteCount, elem1, ..., elemN])


// let arr = ["I", "study", "JavaScript"];
// arr.splice(1, 41, ); // from index 1 remove 1 element
// console.log( arr );


// delete and insert

// let arr = ["I", "study", "JavaScript", "right", "now"];
// // remove 3 first elements and replace them with another
// arr.splice(0, 3, "Let's", "dance");
// console.log( arr )



// let arr = ["I", "study", "JavaScript", "right", "now"];
// // remove 2 first elements
// let removed = arr.splice(0, 2);
// console.log( removed );
// console.log( arr );


// The splice method is also able to insert the
// elements without any removals.

// let arr = ["I", "study", "JavaScript"];
// // from index 2
// // delete 0
// // then insert "complex" and "language"
// arr.splice(2, 0, "complex", "language");
// console.log( arr );


// slice() //IMMUTABLE

// arr.slice([start], [end])

// It returns a new array copying
// to it all items from index start to end

// let arr = ["t", "e", "s", "t"];
// // console.log( arr.slice(1, 3) ); // e,s (copy from 1 to 3)
// // arr.slice(1, 3) // e,s (copy from 1 to 3)
// console.log( arr ); // e,s (copy from 1 to 3)
// console.log( arr.slice(-2) ); // s,t (copy from -2 till the end)


// let arr2 = arr.slice();
// // arr2.push('2')
// console.log(arr)
// console.log(arr2)



// concat() //IM
// creates a new array that includes values from
// other arrays and additional items.

// arr.concat(arg1, arg2...)

// let arr = [1, 2];
// let arr2 = arr.concat([3, 4])
// // // create an array from: arr and [3,4]
// console.log( arr2 ); // 1,2,3,4
//
// let arr2 = arr.concat([3, 4])
// console.log(arr2)
//
// // create an array from: arr and [3,4] and [5,6]
// console.log( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6
//
// // create an array from: arr and [3,4], then add values 5 and 6
// console.log( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
//
//

// let arr = [1, 2];
// let arrayLike = {
//   0: "something",
//   length: 1
// };
// let arr2 = arr.concat(arrayLike)
// console.log( arr2)


//


// // Iterate: forEach() IM
// arr.forEach(function(item, index, array) {
//     // ... do something with item
// });

// let myArr = ["I", "study", "JavaScript", "right", "now"];
//
// let arr = myArr.forEach((item, index, array) => index)
// console.log(arr)



// Searching in array
// indexOf() / lastIndexOf() and includes()

// arr.indexOf(item, from) – looks for item
// starting from index from,
// and returns the index where it was found, otherwise -1.


// arr.lastIndexOf(item, from) – same,
// but looks for from right to left.
//
//
// arr.includes(item, from) – looks for item
// starting from index from, returns true if found.

// let arr = [1, 0, false];

// console.log( arr.indexOf(null) );
// console.log( arr.lastIndexOf(false) );
// console.log( arr.indexOf(null) );
// console.log( arr.includes(1) ); // true



// find() and findIndex() IM

// let result = arr.find(function(item, index, array) {
//     // if true is returned, item is returned and iteration is stopped
//     // for falsy scenario returns undefined
// });

// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
// ];
// //
// let user = users.find(item => item.id == 4);
//
// console.log(user);

// The arr.findIndex method is essentially the same,
// but it returns the index where the element was found
// instead of the element itself and -1 is returned
// when nothing is found.


// let users = ['Mary', 'John', 'Arnold'];
// let user = users.findIndex(item => item == 'Arnold');
// console.log(user);


// filter()
// filter returns an array of all matching elements

// let results = arr.filter((item, index, array) => {
//     // if true item is pushed to results and the iteration continues
//     // returns empty array if nothing found
// });

// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
// ];
//
// // // returns array of the first two users
// let filteredUsers = users.filter(item => item.id < 2);
// //
// console.log(filteredUsers);
//


// Transform an array

// // arr.map method is one of the most useful and often used.
// let result = arr.map(function(item, index, array) {
//     // returns the new value instead of item
// });
//
// let result2 = arr.map((item, index, array) => {
//     // returns the new value instead of item
// });

// let users = ["Bilbo", "Gandalf", "Nazgul"]
// let modified  = users.map((item, index) => index+8);
// console.log(users);
// console.log(modified);
//
//
//
// // sort() M
// // sorts the array in place, changing its element order.
//
// let arr = [ 1, 2, 15, 155 ];
// // // the method reorders the content of arr
// arr.sort();
// console.log( arr );
// // The items are sorted as strings by default.

// let num = [1, -2, 15, 2, 0, 8]
//     num.sort((a, b) => b-a );
// //
// // // ES6!!!!!!
// //
// console.log(num);


// let countries = ['Österreich', 'Andorra', 'Vietnam'];
// console.log(countries.sort( (a, b) =>
//     a.localeCompare(b)));




// reverse M
//
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log( arr );




// reduce/reduceRight
// let value = arr.reduce(function(accumulator, item, index, array) {
//     // ...
// }, [initial]);
//
// // Arguments:
//
// accumulator – is the result of the previous function call,
// equals initial the first time (if initial is provided).
// item – is the current array item.
// index – is its position.
// array – is the array.
// initial  - Optional
// A value to use as the first argument to the first call
// of the callback. If no initialValue is supplied,
// the first element in the array will be used as the initial
// accumulator value and skipped as currentValue.
// Calling reduce() on an empty array without an
// initialValue will throw a TypeError.

// let arr = [1, 2, 3, 4, 5];
// let result = arr.reduce((sum, current) =>
//     sum + current,100);
// console.log(result);


// const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
//     (accumulator, currentValue) => accumulator.concat(currentValue)
// );
// console.log(array1);


//
// const arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1.flat());

// let arr = [1, 2, 3, 4];
// let arr2 = arr.flatMap(x => [x, x * 2]);
// console.log(arr2)
// is equivalent to
// let arr3 = arr.reduce((acc, x) => acc.concat([x, x * 2]), []);
// console.log(arr3)

// Array.isArray()

// console.log(typeof {});
// console.log(typeof [])
// console.log(Array.isArray({}))
// console.log(Array.isArray([]))













// If you are not tired, here is some info about String methods ))
// Info about some methods of String

// split()
// const str = 'The quick brown fox jumps over the lazy dog.';
// const words = str.split(' '); // returns array of splited elements
// console.log(str);
// console.log(words);
//

// includes()

// const sentence = 'The quick brown fox jumps over the lazy dog.';
// const word = 'fox';
// console.log(sentence.includes(word))
// console.log(sentence.includes("the"))
// console.log(sentence.includes('me'))


// trim()
// const greeting = '   Hello world!   ';
// const trimmed = greeting.trim()
// console.log(greeting)
// console.log(trimmed)


//slice()

// const str = 'The quick brown fox jumps over the lazy dog.';
// console.log(str.slice(31));
// // expected output: "the lazy dog."
//
// console.log(str.slice(4, 19));
// // expected output: "quick brown fox"
//
// console.log(str.slice(-4));
// // expected output: "dog."
//
// console.log(str.slice(-9, -5));
// // expected output: "lazy"


// concat()
// const str1 = 'Hello';
// const str2 = 'World';
//
// console.log(str1.concat(' ', str2));
// console.log(str2.concat(', ', str1));
//


// charAt()
// var str = 'Хай йому грец ь';
//
//
// console.log(str.charAt());
// console.log(str.charAt(0));
// console.log(str.charAt(1));
// console.log(str.charAt(2));
//
// console.log(str.charAt(-1));
// console.log(str.charAt(99));

