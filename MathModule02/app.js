var mathfuncs = require('./mathlib');

var myMathObj = mathfuncs();
console.log(mathfuncs);
console.log(mathfuncs());
console.log(myMathObj.add(3,4));
console.log(myMathObj.multiply(3,5));
console.log(myMathObj.square(3));
console.log(myMathObj.exp(3,3));
