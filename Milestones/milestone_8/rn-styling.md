Jianna Monique M. Lucero

# React Native Stylesheets vs CSS-in-JS

1. Why does React Native use camelCase instead of traditional CSS properties?

React Native uses camelCase instead of traditional CSS properties because styles are written as JavaScript objects. Since JavaScript does not support hyphens in object names (such as background-color), camelCase (such as backgroundColor) ensures that the code is valid and cleaner to write. By using camelCase, this ensures that the styles written are consistent with the rest of my JavaScript code. This makes it easier for me and the rest of my team to read and write code in our app without the syntax errors that would be caused by CSS.

2. What are the benefits of using StyleSheet.create() over inline styles?

- Better Code Organization and Clean Code

StyleSheet.create() allows me to be able to easily separate my styling logic from my component's structural code. This makes it easier for me to read and maintain the different files in my app now that the styling logic is separated properly using StyleSheet.create().

- Improved Performance and Optimization

Since StyleSheet.create() creates the style object only once when the app loads, this prevents the app from doing unnecessary re-renders from recreating the style object every time there is a change to the app. This leads to smoother animations and better app performance. It also improves optimization since it allows the system to send style data to the phone's hardware more efficiently using a single reference ID.

- Early Error Detection and Validation

StyleSheet.create() performs style validation during development. This means that if I ever make a typo or use a property that isn't available or non-existent in React Native, the system can immediately catch the error rather than letting it fail when the app starts running. By catching errors early, this can save me a lot of time during debugging since I am immediately alerted to any mistakes as soon as I save my changes.

- Reusability and Consistency

By using StyleSheet.create(), it can allow me to define a style for only one time and be able to apply it to multiple elements throughout my app. This promotes the "Don't Repeat Yourself" (DRY) principle. ensuring that my fonts, colors defined once remains consistent across the different components in my app. This means that if ever my app continues to grow, it makes it easier for me to scale my UI without having to manage thousands of scattered inline style objects.

3. How would you handle different screen sizes in React Native?

In my Milestone 8 React Native Project, I handled different screen sizes by using the Dimensions API to dynamically get the width and height of the device. Then, instead of using pixel values, I sized components in percentages or ratios of the width and height to ensure that elements such as containers and text were scaled accordingly on different hardware. This makes it possible for the UI to scale smoothly on any screen size, from small Android phones to larger tablets.
