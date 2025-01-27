const convertToCelsius = function(val) {
  let conversion = (val-32) * 5/9;

  return Math.round(conversion * 10) / 10;
};

const convertToFahrenheit = function(val) {
  let conversion = (val * 9/5) + 32;

  return Math.round(conversion * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
