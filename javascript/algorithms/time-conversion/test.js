const timeConversion = require('./index');

test('timeConversion is a function', () => {
  	expect(typeof timeConversion).toEqual('function');
});

test('Converting: 07:05:45PM', () => {
  	expect(timeConversion('07:05:45PM')).toEqual('19:05:45');
});

test('Converting: 04:55:11 PM', () => {
  	expect(timeConversion('04:55:11 PM')).toEqual('16:55:11');
});

test('Converting: 06:40:03AM', () => {
  	expect(timeConversion('06:40:03AM')).toEqual('06:40:03');
});

test('Converting: 09:25:00PM', () => {
  	expect(timeConversion('09:25:00PM')).toEqual('21:25:00');
});

test('Converting: 11:18:58AM', () => {
  	expect(timeConversion('11:18:58AM')).toEqual('11:18:58');
});

test('Converting: 12:00:00AM', () => {
  	expect(timeConversion('12:00:00AM')).toEqual('00:00:00');
});

test('Converting: 12:00:00PM', () => {
  	expect(timeConversion('12:00:00PM')).toEqual('12:00:00');
});