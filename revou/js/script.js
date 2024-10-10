function convertToFahrenheit() {
    let celsius = document.getElementById('celciusInput').value;
    
    if (isNaN(celsius) || celsius === '') {
        alert('Please enter a valid number for Celsius.');
        return;
    }

    let fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('fahrenheitOutput').value = fahrenheit.toFixed(1);
    document.getElementById('calculation').value = `${celsius}°C * (9/5) + 32 = ${fahrenheit.toFixed(1)}°F`;
}

function convertToCelsius() {
    let fahrenheit = document.getElementById('celciusInput').value;
    
    if (isNaN(fahrenheit) || fahrenheit === '') {
        alert('Please enter a valid number for Fahrenheit.');
        return;
    }

    let celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById('fahrenheitOutput').value = celsius.toFixed(1);
    document.getElementById('calculation').value = `${fahrenheit}°F - 32) * 5/9 = ${celsius.toFixed(1)}°C`;
}
