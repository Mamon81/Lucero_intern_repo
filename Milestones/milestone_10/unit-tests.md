Jianna Monique M. Lucero

# Introduction to Unit Testing with Jest

## Sample Function

```javascript
export const add = (a, b) => {
  return a + b;
};
```

## Test File Containing Multiple Test Cases for Sample Function

```javascript
import { add } from './sum';

describe('add function', () => {
  it('should return the correct sum of two positive numbers', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });

  it('should return the correct sum of a positive and a negative number', () => {
    const result = add(5, -2);
    expect(result).toBe(3);
  });

  it('should return the correct sum of two negative numbers', () => {
    const result = add(-4, -6);
    expect(result).toBe(-10);
  });
});
```

## Testing a Simple Utility Function

![Screenshot of Testing a Simple Utility Function](../assets/LuceroUnitTest.jpg)

## Reflection

1. Why is automated testing important in software development?

Automated testing is important in software development because it not only guarantees that the code is correct but also guarantees the system's reliability. Furthermore, it also speeds up the process of software development. By using unit tests to ensure that the code behaves correctly in isolated situations and integration tests to ensure that the system behaves correctly in complex situations, developers are able to detect bugs in the system early in the process when they are easiest to fix. This not only makes it easier to refactor the code and design the system in modules but also makes it easier to document as it can explain how the system should behave. Ultimately, automated testing enables developers to move from repetitive testing to feature building, ensuring that the system not only behaves correctly but also scales well as it continues to grow.

2. What did you find challenging when writing your first Jest test?

While writing my first Jest test, what I found challenging was trying to configure and set up Jest correctly. In addition, this was my first time using Jest, so I had to understand its framework and how to use it when writing my first Jest test. However, after understanding its test structure such as using terms like `describe`, `test`, and `expect`, I was able to get a general flow on how to write my first Jest test. By using Jest to write a test for a simple sum function, I can be able to apply it on writing more complex tasks such as testing React/React Native components or mocking dependencies like conducting API calls.
