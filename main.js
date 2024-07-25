// Today's forcast is 293 degrees kelvin
const kelvin = 293;
// Celcius is 273 degrees less than kelvin, to find celsius, subtract 273 from the kelvin temperature.
var celsius = kelvin - 273;
// The below equation converts celsius to farenheit, then rounds down to the nearest degree.
var farenheit = (Math.floor(celsius * (9 / 5) + 32));

console.log(`The temperature is ${farenheit} degrees Farenheit`);
