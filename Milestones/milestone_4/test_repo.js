/* eslint-disable no-console */
//Avoiding Code Duplications
//Sample Messy Code
// A messy function to determine the time of day and action
const day = 'monday';
const weather = 'sunny';

const daytime = function () {
  if (day == 'monday') {
    if (weather == 'sunny') {
      console.log(`this is a good sunny monday`);
    } else if (weather == 'cloud') {
      console.log('this is a cloudy monday');
    } else if (weather == 'storm') {
      console.log('this is a stormy monday');
    }
  } else if (day == 'tuesday') {
    // ... more repetitive nested if-else statements
  }
};
daytime();

//Refactored Code of the above code
const VALID_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];
const VALID_WEATHER = ['sunny', 'windy', 'cloudy', 'rainy', 'stormy'];

//Validates the input
const isValid = (value, list) => list.includes(value);

const logDayAndWeather = (day, weather) => {
  if (!isValid(day, VALID_DAYS) || !isValid(weather, VALID_WEATHER)) {
    return console.error('Invalid day or weather provided.');
  }

  console.log(`Today is ${day} and the weather is ${weather}.`);
};

// Example usage
logDayAndWeather('Monday', 'sunny');
logDayAndWeather('Tuesday', 'cloudy');
