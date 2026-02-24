export const COUNTER_MESSAGES = {
  0: 'Start Counting!',
  10: "You've reached 10!",
  20: "You've reached 20!",
  '-10': "You've reached -10!",
  '-20': "You've reached -20!",
};

export const getCounterMessage = (value) => COUNTER_MESSAGES[value] || '';
