var algo = require('./index.js');

var test1 = ['a', 'b', 'b', 'b'];
var result1 = algo(test1);
console.assert(result1.hasMajority === true && result1.majorityChar === 'b');

var test2 = ['a', 'b', 'c', 'd'];
var result2 = algo(test1);
console.assert(result2.hasMajority === false);

var test3 = [];
var result3 = algo(test3);
console.assert(result3.hasMajority === false);

var test4 = ['a'];
var result4 = algo(test4);
console.assert(result4.hasMajority === true && result4.majorityChar === 'a');

var test5 = ['a', 'a', 'a', 'b', 'c', 'd', 'a'];
var result5 = algo(test5);
console.assert(result5.hasMajority === true && result5.majorityChar === 'a');

var test6 = ['a', 'a', 'a', 'a', 'a', 'a', 'f', 'f', 'f', 'f'];
var result6 = algo(test6);
console.assert(result6.hasMajority === true && result5.majorityChar === 'a');
