function transformFahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

// Teste de mesa
const fahrenheit = 212;
const celsius = transformFahrenheitToCelsius(fahrenheit);

console.log(`Fahrenheit: ${fahrenheit}°F`);
console.log(`Celsius: ${celsius.toFixed(2)}°C`);
