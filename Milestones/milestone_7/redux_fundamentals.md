Jianna Monique M. Lucero

# Introduction to Redux Toolkit

1. When should you use Redux instead of useState?

I should use Redux when the data of my app/system needs to be shared globally across the app's different pages or sections. By using Redux, this also saves me a lot of time of passing along data through a long chain of components using useState. Furthermore, Redux is used for handling complex data that many people on a team need to work with at once. If I need to save data so that it doesn't disappear when I move between different pages of the app, then I should use Redux instead of useState. useState is best used for private data that is only used for one component in my app/system only.

# Using Selectors in Redux Toolkit

1. What are the benefits of using selectors instead of directly accessing state?

Instead of directly accessing state, using selectors is a much better way of handling your app because it ensures that everything stays fast, organized, and accurate. Selectors utilize a technique called memoization, which involves the selectors remembering the last calculation and will only recalculate it if the actual data they are watching changes. This prevents my app from slowing down with unnecessary updates. They also provide a shield between my data and my components since if ever I decide to change how my data is stored, I only have to change it in one place rather than searching through every file in my project. Selectors also allow me to reuse the same logic on different pages and keep my main data simple by only calculating additional information when I need it.
