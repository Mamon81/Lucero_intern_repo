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

# Code Formatting & Style Guides

## Reflection on Code Formatting & Style Guides

1. Why is code formatting important?

Code formatting is important because it ensures that the code is readable and maintainable for a long period of time. By having readable code, it allows for me and my other team members to be able to quickly understand the code thanks to code formatting. By enforcing a consistent style throughout the entire entire codebase, developers won't need to spend extra time and effort interpreting the different coding styles by their other team members. Furthermore, having a uniform coding style improves collaboration during code reviews, facilitates faster onboarding for new developers into the team, and significantly reduces the likelihood of introducing bugs during refactoring.

2. What issues did the linter detect?

When running the linter, the linter was unable to detect any issues since my project repository mostly contained markdown documentation files instead of Javascript code. Instead I was able to use Prettier as a code formatter to check if there are any formatting inconsistencies across the different markdown files in my Milestones directory. It was able to detect these formatting inconsistencies and instantly applied changes to them. This included standardizing line length, spacing, text wrapping and overall document structure. By applying these changes, the markdown files had greatly improved its readability as well as applied the professional standards when it comes to documenting markdown files.

3. Did formatting the code make it easier to read?

After using Prettier to format my markdown files, it made it significantly easier for me to read and navigate through the documentation. Thanks to Prettier, it was not only able to apply a consistent appearance throughout the different markdown files but also maintained a professional appearance that is up to company standards. By properly formatting the code and apply a uniform style throughout my markdown files, it was able to eliminate any visual distractions or inconsistencies with the formatting such as inconsistent line breaks and irregular spacing. This allowed me to be able to focus on writing the actual content for each markdown file instead of focusing on formatting. Furthermore, it also made it easier for me to scan through the different markdown files, locating specific information quickly now that the markdown files are more organized and its information is easily accessible.

# Writing Small, Focused Functions

## Best Practices

- Single Responsibility Principle

A function should perform exactly only one task and be able to do it well. A functions that focuses on a singular task makes it easier to name, test and reuse across the entire codebase. If you can describe what your function does with "and", then it's doing too many things at once and should be broken down into smaller sub-functions.

- Follow a Consistent Naming Convention

Function names should be descriptive and immediately provide context as to what the function does. Furthermore, being consistent with casing and abbreviations throughout the codebase ensures that any developer can easily navigate the codebase without having to spend time interpreting the code.

- Avoid using Magic Numbers and Strings

Magic values are hard coded values that cannot immediately be identified or defined. Instead, they should be replaced with named constants to easily identify them. Furthermore, this also eliminates confusion for developer who are unfamiliar with the specific meaning of the values, making the code much easier to navigate.

- Follow the Don't Repeat Yourself (DRY) Principle

Avoid copy-pasting code as it's harder to maintain and update, and can lead to inconsistencies and bugs. Instead, extract shared code and resuse it by creating functions or modules that can be reused across the codebase. This ensures that a single update to that reused code can automatically be applied to every part of the app/system that uses it.

- Minimize or Eliminate Side Effects

A function should be able to return an output based on its inputs wihtout changing any variables outside its own scope. Avoid functions that change global states/variables or modify external objects as it can create "hidden" behavior that is difficult to track. Ensure that functions are independent to ensure that the application is stable and easier during debugging.

- Use Fewer Parameters

Try to limit the number of inputs a function needs to reduce cognitive load. The fewer inputs a function has, the easier it is to call and test it.

- Write Automated Unit Tests

Writing automated unit tests ensure that the code can remain robust as you continue to new features. By writing tests for each function, you create a safety net that can easily catch regressions or errors immediately.

## Example of a Long, Complex Function

```javascript
var day = 'monday';
var weather = 'sunny';

let determineDayAndWeather = function (d, w) {
  let dFormatted = d.toLowerCase().trim();
  let wFormatted = w.toLowerCase().trim();

  if (dFormatted === 'monday' || dFormatted === 'tuesday' || dFormatted === 'wednesday' || dFormatted === 'thursday' || dFormatted === 'friday') {
    if (wFormatted === 'sunny') {
      console.log('It is a' + wFormatted 'weekday. The day is ' + dFormatted + '.');
    } else {
      if (wFormatted === 'cloudy') {
        console.log('It is a' + wFormatted 'weekday. The day is ' + dFormatted + '.');
      } else {
        if (wFormatted === 'stormy') {
          console.log('It is a' + wFormatted 'weekday. The day is ' + dFormatted + '.');
        } else {
          console.log('It is a standard ' + dFormatted + ' with ' + wFormatted + ' weather.');
        }
      }
    }
  } else {
    if (dFormatted === 'saturday' || dFormatted === 'sunday') {
      if (wFormatted === 'sunny') {
        console.log('It is a' + wFormatted 'weekend. The day is ' + dFormatted + '.');
      } else if (wFormatted === 'stormy') {
        console.log('Weekend storm alert on ' + dFormatted + '.');
      } else {
        console.log('It is ' + dFormatted + ' and the weather is ' + wFormatted + '.');
      }
    } else {
      console.log('Error: The value ' + d + ' is not a valid day of the week.');
    }
  }
  return 'Process finished for ' + dFormatted;
};

determineDayAndWeather(day, weather);
```

This function is long and complex, because it violates the single responsibility principle. The function handles a lot of tasks at once like cleaning the inputs provided, determing what day it is, and checking the weather. Because of multiple things being done all at once, it results in the logic of the function containing deep and confusing layers of if-else statements. This results in the code being difficult to read and understand with an increased chance of bugs occurring due to its messy and repetitive code.

## Refactored Code

```javascript
const WEEKDAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
const WEEKEND_DAYS = ['saturday', 'sunday'];

const isWeekday = day => WEEKDAYS.includes(day);

const isWeekend = day => WEEKEND_DAYS.includes(day);

const determineDayAndWeather = (day, weather) => {
  const formattedDay = day.toLowerCase().trim();

  if (!isWeekday(formattedDay) && !isWeekend(formattedDay)) {
    throw new Error(`Invalid day: ${day}`);
  }

  const type = isWeekday(formattedDay) ? 'weekday' : 'weekend';

  return `It is a ${weather} ${type}. The day is ${formattedDay}.`;
};

// Example
console.log(determineDayAndWeather('Monday', 'sunny'));
console.log(determineDayAndWeather('Saturday', 'stormy'));
```

The refactored code is much more simpler and cleaner compared to the messy example provided. It now breaks down the different tasks of determining the day and weather into smaller and simpler steps. There is now a separate function for identifying the type of day, making the main function no longer containing nested if-else statements. Furthermore, the hard coded values are now arranged in an array to avoid any confusion and for proper identification of the constants. Lastly, it ensures that errors are handled immediately at the top of the function, making it faster to catch errors as soon as possible.

## Reflection on Writing Small, Focused Functions

1. Why is breaking down functions beneficial?

Breaking down functions are beneficial because it transforms complex code into a more modular structure, making the code easier to understand and comprehend for developers. By ensuring that the function is specially designed for only one task as well as clearly defining the intent of the function, it allows team to easily understand the purpose of the function without getting easily lost in it. This practice not only improves the readability of the code but also improves the debugging and testing process as it can isolate any potential issues or bugs easily.

2. How did refactoring improve the structure of the code?

As mentioned before, refactoring can improve the structure of the code as it transforms long and complex code into a more flexible and modular approach without altering its intent. By breaking down complex code logic into smaller, single-purpose functions, the codebase not only becomes more significantly readable but also easier to navigate for developers. Furthermore, practicing good naming conventions on variables, constants and functions ensures that other developers clearly understand their intent/purpose. In conclusion, thanks to refactoring, it can transform your entire codebase into a cleaner foundation where it is less likely to break when new changes and features are added while ensuring it is easy for other developers to understand.

# Avoiding Code Duplication

## Research "Don't Repeat Yourself" (DRY) principle

The DRY principle aims to ensure that every piece of logic or function in a codebase only represents a single, unique intent/purpose within a system. Aside from promoting the action of copy-pasting code, it also aims to eliminate the duplication of code logic, meaning that a specific process should only be defined in one area in your codebase. By ensuring that a specific code logic is centered under one function only, the DRY principle promotes the minimization of errors during updates, ensuring that the entire codebase remains readable and easily maintainable.

## Sample Code of Unnecessary Repetition vs Refactored Version

The sample code can be found in test_repo.js.

## Reflections on Avoiding Code Duplication

1. What were the issues with duplicated code?

When there is duplicated code present in your project, it makes it harder for you and the rest of your team to manage and maintain. When the same logic is repeated and duplicated in different places in my codebase, it forces me and the rest of my team to manually find and update every single place where that logic is used if there is change to it. By having duplicated code present in the system, there is an increased chance of bugs and inconsistent behavior occurring since there is a chance I might forget changing a certain spot in my code while updating the duplicated code logic. Aside from that, it also makes it difficult to comprehend the codebase due to its redundant information, hindering its readability and modularity. Ultimately, having duplicated code causes a lot of issues that negatively impacts the project's development especially when it comes to maintaining the project or working in a team.

2. How did refactoring improve maintainability?

By applying refactoring in my code, it greatly improves maintainability since it was able to transform my messy code with repetitive information into a more cleaner and structured format. By eliminating duplicated logic, it breaks down long, repetitive lines of code into smaller, defined components, ensuring that changes are only made in one place and not in different places in my code base. Refactoring also reduces the risk of introducing errors or bugs since a specific code logic is now located in one area of my code base instead of multiple places, making it easier and more streamlined to apply any updates/changes. In conclusion, refactoring greatly improves a code's maintainability since it allows the project to experience a faster development, allowing new features and changes to be easily added onto the project without hindering the entire system itself.
