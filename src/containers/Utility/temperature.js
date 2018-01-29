
export const convertTemperature = {
    toCelsius: (fahrenheit) => ((fahrenheit - 32) * 5 / 9),
    toFahrenheit: (celsius) => ((celsius * 9 / 5) + 32)
}

export const tryConvert = (value, convert) => {
    const input = parseFloat(value);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

export default {
    convertTemperature,
    tryConvert
}