function round_to_nearest_tenth(num) {
  return Math.round(num * 10) / 10;
}

const convertToCelsius = function(degrees_F) {
  let exact_answer = (degrees_F - 32) / 9 * 5;
  return round_to_nearest_tenth(exact_answer);
};

const convertToFahrenheit = function(degrees_C) {
  let exact_answer = degrees_C / 5 * 9 + 32;
  return round_to_nearest_tenth(exact_answer);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
