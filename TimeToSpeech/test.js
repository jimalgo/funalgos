var algo = require('./index.js').default;

var tests = [
  ['00:00', 'twelve am'],
  ['01:30', 'one thirty am'],
  ['12:05', 'twelve oh five pm'],
  ['14:01', 'two oh one pm'],
  ['20:29', 'eight twenty nine pm'],
  ['21:00', 'nine pm'],
  ['23:41', 'eleven fourty one pm'],
];

tests.forEach(test => {
  console.log(algo(test[0]), test[1])
  console.assert(algo(test[0]) === test[1]);
});
