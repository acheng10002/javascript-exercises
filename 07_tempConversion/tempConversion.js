const convertToCelsius = function(fahrenheit) {
  let f = fahrenheit;
  let c = (f - 32) * (5/9);
  c = c.toFixed(1);
  c = parseFloat(c);
  return c;

};

const convertToFahrenheit = function(celsius) {
  let c = celsius;
  let f = c * (9/5) + 32;
  f = f.toFixed(1);
  f = parseFloat(f);
  return f;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
