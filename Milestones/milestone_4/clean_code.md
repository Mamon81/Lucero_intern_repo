Jianna Monique M. Lucero

# Understanding Clean Code Principles

## Clean Code Principles

* Simplicity

Defined as the practice of keeping code as straightforward as possible. This is done by avoiding unnecessary complexity. One of the main focuses of the principle is the "Single Responsibility Principle", ensuring that each class or function does only one thing well. By keeping logic simple, there is a reduced risk of introducing bugs or errors and making the system easier during debugging/testing.

* Readability

Defined as the principle of keeping code easy to understand. This is done by using descriptive names for variables and functions that describe their purpose without the need for extra comments. By ensuring that code is readable, other team members can quickly understand the logic of the code without spending extra time mentally comprehending what every variable represents.

* Maintainability

Defined as the principle of writing code in a modular way so that future developers, including yourself and your team, can easily update or fix it without breaking other parts of the system. It involves reducing dependency between different components, ensuring that the codebase remains organized as it continues to grow. 

* Consistency

Defined as the principle of following established style guides and naming conventions throughout the entire codebase. Being consistent through indentation, file structure or variable casing can help your team move between different files in a project without the need to relearn the code and its "rules". It makes the project more united and cohesive instead of a collection of different coding styles and naming conventions.

* Efficiency

Defined as the principle of writing optimized code that makes the best use of system resources without compromising clarity. Works alongside clarity to ensure that the code is not only simple and easy to read, but also delivers the best performance as well. The goal of the principle is to write code that performs as fast as necessary while remaining simple and easy to understand as possible.

## Example of Messy Code Online

```javascript
// A messy function to determine the time of day and action
var day = "monday";
var weather = "sunny";

let daytime = function() {
    if (day == "monday") {
        if (weather == "sunny") {
            console.log(`this is a good sunny monday`);
        } else if (weather == "cloud") {
            console.log("this is a cloudy monday");
        } else if (weather == "storm") {
            console.log("this is a stormy monday")
        }
    } else if (day == "tuesday") {
        // ... more repetitive nested if-else statements
    }
}
daytime();
```

The code above is difficult to read because it's currently implementing deep nesting. Deep nesting refers to code that contains excessive and redundant control structures, resulting in the code being complex, difficult to maintain, and prone to errors. By placing if statements inside other if statements, it makes the logic of the function becoming tangled and repetitive. 

When running the example code provided, the logic of the code is forced to go through a long line of conditions just to determine the simple result of giving the day and weather. Furthermore, the sample code is not flexible since the days and weather types are hard-coded into the logic. This results in the code being difficult to maintain since the code will continue to grow longer as I continue to manually add more days and weather types.

## Rewritten Messy Code

```javascript
// A cleaner function to determine the day and weather

const VALID_DAYS = [
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thursday", 
    "Friday", 
    "Saturday", 
    "Sunday"
];

const VALID_WEATHER = [
    "sunny", 
    "windy", 
    "cloudy", 
    "rainy", 
    "stormy"
];

const logDayAndWeather = (day, weather) => {
    // Check for valid input first
    if (!VALID_DAYS.includes(day) || !VALID_WEATHER.includes(weather)) {
        console.error("Invalid day/weather provided");
        return;
    }
    
    console.log(`Today is ${day} and the weather is ${weather}.`);
};

// Example usage
logDayAndWeather("Monday", "sunny");
logDayAndWeather("Tuesday", "cloudy");
```

I have rewrote the messy code into a more cleaner and structured format. I have eliminated deep nesting and added a case that handles invalid data immediately. I also made the day and weather data into constants, making the code more maintainable and easier when adding new days or weather types as it no longer requires changing the core logic of the function.

