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

// Validates the input
const isValid = (value, list) => list.includes(value);

const logDayAndWeather = (day, weather) => {
  if (!isValid(day, VALID_DAYS) || !isValid(weather, VALID_WEATHER)) {
    return 'Invalid day or weather provided.';
  }

  return `Today is ${day} and the weather is ${weather}.`;
};

module.exports = { logDayAndWeather };
