const { logDayAndWeather } = require('./weather');

describe('logDayAndWeather', () => {
  it('returns the correct string for valid Monday and sunny', () => {
    const result = logDayAndWeather('Monday', 'sunny');
    expect(result).toBe('Today is Monday and the weather is sunny.');
  });

  it('is case-sensitive and rejects lowercase "monday"', () => {
    const result = logDayAndWeather('monday', 'sunny');
    expect(result).toBe('Invalid day or weather provided.');
  });

  it('returns an error message for an invalid day', () => {
    const result = logDayAndWeather('NotADay', 'sunny');
    expect(result).toBe('Invalid day or weather provided.');
  });

  it('returns an error message for invalid weather', () => {
    const result = logDayAndWeather('Monday', 'tornado');
    expect(result).toBe('Invalid day or weather provided.');
  });

  it('returns error message if both day and weather are invalid', () => {
    const result = logDayAndWeather('January', 'snowy');
    expect(result).toBe('Invalid day or weather provided.');
  });
});
