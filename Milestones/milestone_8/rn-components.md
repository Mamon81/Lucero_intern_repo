Jianna Monique M. Lucero

# Understanding React Native Components vs. React Components

1. What are the key differences between `<View>` and `<div>`?

- Platform and Rendering

`<div>` is designed and used for web browsers while `<View>` is built and used for mobile applications. Furthermore, `<div>` represents as a "web element" in the browser window while `<View>` acts as a command that tells the mobile OS to build and display hardware components instead of simply being an element.

- Styling Syntax and Logic

Web developers style `<div>` elements using CSS files while mobile developers style `<View>` using JavaScript objects.

- Default Layout Behavior

A `<div>` uses a block layout by default and takes the entire width of the screen. However, it can’t center content without more CSS. On the other hand, `<View>` has flexbox by default and auto stacks its children (from top to bottom), which is considered the default for vertical mobile layouts.

- Interaction and Events

`<div>` can capture click/mouse hover events through the onClick attribute. Meanwhile, `<View>` is purely a layout and is not touchable (interactive) by default, so you will need to put it inside a `<TouchableOpacity>` to make it touchable (interactive).

2. How does Stylesheet.create() improve performance compared to inline styles?

Stylesheet.create improves performance compared to using inline styles because it builds my styles only one time when the app starts compared to inline styles that are created and built every time the component renders. Furthermore, Stylesheet.create assigns a unique ID to my styles, making it quicker for my phone to recognize and reuse existing designs instead of having to re-read a full list of instructions every time the screen updates. Ultimately, using Stylesheet.create saves memory and prevents my app from doing unnecessary re-renders

3. Why doesn't React Native use className like React web?

React Native does not use className like React web because it renders native mobile components instead of HTML elements. While websites use global "classes" to uniformly style different components on the website, developing and designing mobile apps require me to give specific instructions for each component to avoid the performance problems and styling conflicts that traditional CSS causes. Furthermore, React Native gives me more control over how each component looks, while helping me translate my designs into actual mobile components for different mobile platforms.
