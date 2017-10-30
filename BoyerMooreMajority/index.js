/**
 * @param {array} list
 * @returns {object} with key "hasMajority" and "majorityChar" (optional)
 */
exports.default = function(list) {
  var char = null;
  var counter = 0;
  list.forEach((el) => {
    if (counter === 0) {
      counter = 1;
      char = el;
    } else if (char === el) {
      counter += 1;
    } else {
      counter -= 1;
    }
  });

  return {
    hasMajority: counter > 0,
    majorityChar: counter > 0 ? char : undefined,
  };
}
