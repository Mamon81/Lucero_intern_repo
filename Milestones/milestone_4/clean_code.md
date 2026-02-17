Jianna Monique M. Lucero

# Understanding Clean Code Principles

## Clean Code Principles

- Simplicity

Defined as the practice of keeping code as straightforward as possible. This is done by avoiding unnecessary complexity. One of the main focuses of the principle is the "Single Responsibility Principle", ensuring that each class or function does only one thing well. By keeping logic simple, there is a reduced risk of introducing bugs or errors and making the system easier during debugging/testing.

- Readability

Defined as the principle of keeping code easy to understand. This is done by using descriptive names for variables and functions that describe their purpose without the need for extra comments. By ensuring that code is readable, other team members can quickly understand the logic of the code without spending extra time mentally comprehending what every variable represents.

- Maintainability

Defined as the principle of writing code in a modular way so that future developers, including yourself and your team, can easily update or fix it without breaking other parts of the system. It involves reducing dependency between different components, ensuring that the codebase remains organized as it continues to grow.

- Consistency

Defined as the principle of following established style guides and naming conventions throughout the entire codebase. Being consistent through indentation, file structure or variable casing can help your team move between different files in a project without the need to relearn the code and its "rules". It makes the project more united and cohesive instead of a collection of different coding styles and naming conventions.

- Efficiency

Defined as the principle of writing optimized code that makes the best use of system resources without compromising clarity. Works alongside clarity to ensure that the code is not only simple and easy to read, but also delivers the best performance as well. The goal of the principle is to write code that performs as fast as necessary while remaining simple and easy to understand as possible.

## Example of Messy Code Online

```javascript
// A messy function to determine the time of day and action
var day = 'monday';
var weather = 'sunny';

let daytime = function () {
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
```

The code above is difficult to read because it's currently implementing deep nesting. Deep nesting refers to code that contains excessive and redundant control structures, resulting in the code being complex, difficult to maintain, and prone to errors. By placing if statements inside other if statements, it makes the logic of the function becoming tangled and repetitive.

When running the example code provided, the logic of the code is forced to go through a long line of conditions just to determine the simple result of giving the day and weather. Furthermore, the sample code is not flexible since the days and weather types are hard-coded into the logic. This results in the code being difficult to maintain since the code will continue to grow longer as I continue to manually add more days and weather types.

## Rewritten Messy Code

```javascript
// A cleaner function to determine the day and weather

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

const logDayAndWeather = (day, weather) => {
  // Check for valid input first
  if (!VALID_DAYS.includes(day) || !VALID_WEATHER.includes(weather)) {
    console.error('Invalid day/weather provided');
    return;
  }

  console.log(`Today is ${day} and the weather is ${weather}.`);
};

// Example usage
logDayAndWeather('Monday', 'sunny');
logDayAndWeather('Tuesday', 'cloudy');
```

I have rewrote the messy code into a more cleaner and structured format. I have eliminated deep nesting and added a case that handles invalid data immediately. I also made the day and weather data into constants, making the code more maintainable and easier when adding new days or weather types as it no longer requires changing the core logic of the function.

# Naming Variables & Functions

## Best Practices for Naming Variables and Functions

\*Be Descriptive

Names should clearly convey the purpose. Avoid using generic terms like "temp" or "x".

\*Use Consistent Conventions

Apply a uniform style (e.g., numberMonth, number_year) based on the standards on the language or framework used in the project.

\*Avoid Abbreviations

Spell out words fully unless the abbreviation is universally accepted throughout the codebase, such as img.

\*Use English

Ensure the names are all in English as it is likely a common language for global developers.

\*Make Names Searchable

Avoid single-letter names or common words as it can be difficult to search them up to modify or review them.

\*Avoid Misleading Names

Ensure the names accurately reflects the data/entity in order to avoid any misunderstandings.

## Example of Unclear Variables Names

```javascript
// Unclear variable names on data on days and weather type
const d = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const w = ['sunny', 'windy', 'cloudy', 'rainy', 'stormy'];
```

The section of code provided above is an example of unclear variable names as it uses only single-letter variables like d and w. By using single-letter variables, it fails to communicate the intent on the type of data being stored, and cannot immediately be searched up in a large codebase.

## Refactored Example of Unclear Variable Names

```javascript
// Refactored variable names on data on days and weather type
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
```

I replaced the single letter variables into names that clearly reveal their intent or purpose. I changed the data conveying days into 'VALID_DAYS' and weather types into VALID_WEATHER in order to clearly communicate what kind of data is being stored without the need to add extra comments.

## Reflection on Naming Variables & Functions

1. What makes a good variable or function name?

A good variable or function name is one that can clearly convey their intent. This means that it is able to communicate why this variable or function exists, what it does, and how its used without the need for extra comments. It should also be descriptive to provide enough context such as using nouns for variables/data and verbs for functions. Lastly, a good variable or function name should follow established naming conventions based on the programming language or framework used for the project, to ensure that the code remains consistent and professional for the entire team.

2. What issues can arise from poorly named variables?

Using poorly named variables forces developers to constantly remember the hidden meaning behind those variables since they are unable to clearly convey the intent behind them. It also increases the risk to introducing logic errors or bugs during maintenance. For example, if a variable is renamed to a different purpose but forgot to change its name can result to difficult to find bugs. Furthermore, unclear names make it difficult to navigate and search, especially in a large codebase.

3. How did refactoring improves code readability?

Refactoring improves code readability as it restructures the code to a cleaner and organized without altering its purpose for the user. By applying techniques such as renaming variables and functions for clarity and breaking down large methods into smaller single-purpose functions, it results in the code becoming more easier for me and my team to navigate and understand. Furthermore, this also reduces the need for developers to be able to decipher my code and more time contributing to the project's development.
