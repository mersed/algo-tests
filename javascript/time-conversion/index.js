/**
 * Given a time in -hour AM/PM format, convert it to military (24-hour) time.
 * Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. 
 * Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.
 * ---- Examples
 * timeConversion('07:05:45PM') === '19:05:45'
 * timeConversion('06:40:03AM') === '06:40:03'
 */

function timeConversion(s) {
    let arr = s.split(':');
    arr[2] = arr[2].replace(/\s+/g, '');
    let timeAbrr = arr[2].substring(2).toLowerCase();
    arr[2] = arr[2].substring(0,2);


    // Default am
    let hours = parseInt(arr[0]);

    // If its pm
    if(timeAbrr === 'pm') {
    	hours = 12 + parseInt(arr[0]);
    }

    arr[0] = hours.toString();

    if(arr[0] === '12') arr[0] = '00';
    if(arr[0] === '24') arr[0] = '12';
    if(arr[0].length === 1) arr[0] = '0' + arr[0];

    return arr.join(':');
}


module.exports = timeConversion;