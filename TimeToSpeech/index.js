/**
 * Solution for problem from here:
 * https://www.reddit.com/r/dailyprogrammer/comments/6jr76h/20170627_challenge_321_easy_talking_clock/
 */
const numbers = {
  0: 'twelve',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'fourty',
  50: 'fifty',
};

const handleMins = mm => {

}

const getSuffix = hh => hh >= 12 ? 'pm' : 'am';

const getHour = hh => numbers[hh % 12];

const getMinutes = mm => {
  if (mm === 0) {
    return null;
  } else if (mm < 10) {
    return `oh ${numbers[mm]}`;
  } else if (mm < 20) {
    return `${numbers[mm]}`;
  } else {
    return `${numbers[Math.floor(mm / 10) * 10]}${mm % 10 !== 0 ? ` ${numbers[mm % 10]}` : ''}`;
  }
}

/**
 * @param {array} string
 * @returns {string}
 */
exports.default = function(time) {
  const [hours, minutes] = time.split(':').map(str => parseInt(str));
  const formattedHours = getHour(hours);
  const formattedMinutes = getMinutes(minutes);
  const formattedSuffix = getSuffix(hours);

  return `${formattedHours} ${formattedMinutes ? `${formattedMinutes} ` : '' }${formattedSuffix}`;
}
