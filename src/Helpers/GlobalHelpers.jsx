// K to C converter
export const convertKelvinToCelcius = (tempInKelvin) => {
    const temp = tempInKelvin ?? 273.15
    return `${Math.round(temp - 273.15)} °C`
}
// Time Converter
export const tConvert = (time) => {
    // Check correct time format and split into components
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If time format correct
        time = time.slice(1);  // Remove full string match value
        time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return `${time.join('').split(":")[0]}:${time.join('').split(":")[2]}`; // return adjusted time or original string
}
// wind converter
export const windConverter = (wind) => {
    const w = wind ?? 0
    return `${w} m/sec`
}
