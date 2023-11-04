document.addEventListener("DOMContentLoaded", function () {
    const celsiusInput = document.querySelector(".celsius input");
    const fahrenheitInput = document.querySelector(".fahrenheit input");
    const kelvinInput = document.querySelector(".kelvin input");
    const clearButton = document.querySelector(".button button");
  
    function convertTemperature() {
      const celsius = parseFloat(celsiusInput.value);
      const fahrenheit = (celsius * 9 / 5) + 32;
      const kelvin = celsius + 273.15;
  
      if (!isNaN(celsius)) {
        fahrenheitInput.value = fahrenheit.toFixed(2);
        kelvinInput.value = kelvin.toFixed(2);
      } else {
        fahrenheitInput.value = "";
        kelvinInput.value = "";
      }
    }
  
    function convertFahrenheit() {
      const fahrenheit = parseFloat(fahrenheitInput.value);
      const celsius = (fahrenheit - 32) * 5 / 9;
      const kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;
  
      if (!isNaN(fahrenheit)) {
        celsiusInput.value = celsius.toFixed(2);
        kelvinInput.value = kelvin.toFixed(2);
      } else {
        celsiusInput.value = "";
        kelvinInput.value = "";
      }
    }
  
    function convertKelvin() {
      const kelvin = parseFloat(kelvinInput.value);
      const celsius = kelvin - 273.15;
      const fahrenheit = (kelvin - 273.15) * 9 / 5 + 32;
  
      if (!isNaN(kelvin)) {
        celsiusInput.value = celsius.toFixed(2);
        fahrenheitInput.value = fahrenheit.toFixed(2);
      } else {
        celsiusInput.value = "";
        fahrenheitInput.value = "";
      }
    }
  
    celsiusInput.addEventListener("input", convertTemperature);
    fahrenheitInput.addEventListener("input", convertFahrenheit);
    kelvinInput.addEventListener("input", convertKelvin);
  
    clearButton.addEventListener("click", () => {
      celsiusInput.value = "";
      fahrenheitInput.value = "";
      kelvinInput.value = "";
    });
  });
  