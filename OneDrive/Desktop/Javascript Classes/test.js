// Loose equality (==) does type coercion
console.log(5  == '5');       // true, because '5' is converted to number 5

// Strict equality (===) checks type + value
console.log(5  === '5');      // false, number vs string

// Another pair
console.log(null == undefined);   // true, special coercion rule
console.log(null === undefined);  // false, different types

var a=10
console.log(a=='10');
console.log(a==='10');