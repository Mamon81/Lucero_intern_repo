Jianna Monique M. Lucero

## Understanding React Hooks: useEffect

1. When should you use useEffect instead of handling logic inside event handlers?

useEffect should be used when you want logic to happen automatically. This usually occurs when a component has appeared on the screen or its data has changed. It is a tool that helps in synchronization that helps me keep my app in sync with external things, such as a database, a timer, or a browser window. In contrast, event handlers are used for logic that should happen only when the user actually does something, such as clicking a button or submitting a form.

2. What happens if you don't provide a dependency array?

If I don’t pass in a dependency array, my useEffect will run after every single render of the component. This means that the code inside the hook will execute when the component is first rendered, and then will run again every time any state or prop changes. This creates a never ending run of useEffect. Without providing a dependency array, I could potentially create infinite loops where updating state triggers another render, which then triggers the effect again as well as cause performance issues because the app is re-running logic that doesn’t need to be re-run.

3. How can improper use of useEffect cause performance issues?

When useEffect is used incorrectly, it can cause performance issues such as my application slowing down or even crash. This is due to unnecessary re-renders and infinite loops. This is usually caused by forgetting to provide a dependency array as mentioned in the previous question, or when an effect updates a state that triggers said effect repeatedly. Furthermore, when a cleanup function is not used, it can cause memory leaks. This is because the application continues to run tasks in the background even after a page has been closed.

## Optimizing Performance with useMemo

1. How does useMemo improve performance?

The useMemo hook is improves performance by utilizing a technique called memoization. which involves caching the result of a calculation so that the computer doesn’t have to calculate it twice. It allows me to save a value and only recalculate it if the actual data that it depends on has changed, as opposed to recalculating every time the screen is updated. This is especially useful for things that are computationally expensive, such as math or filtering large lists, and it also helps by ensuring that the "identity" of objects and arrays is preserved so that other parts of your application don’t accidentally end up re-rendering. By telling React that a value only needs to be recalculated if the values it depends on have changed, you can cut down on the amount of work that needs to be done, making the application feel much faster.

2. When should you avoid using useMemo?

The useMemo hook should not be used for small, or not heavy computational tasks such as simple math calculations or simple string updates, since the memory required to keep track of the hook may actually be slower than performing the calculation. This is also unnecessary if the data changes with every single render or if the data is only used within the same component and is not passed down to other components. This is often referred to as "premature optimization," which can actually make your code more cluttered and may actually slow down the initial loading of your application. In other words, you should not use it unless you have a performance bottleneck and are working with heavy data or complex objects.

3. What happens if you remove useMemo from your implementation?

If I remove useMemo from my UseMemo.js file, the costly calculation will have to be performed from scratch every single time the component re-renders, no matter what the reason is. For example, if I click on the "Re-render Count" button, the application will freeze for a split second because the CPU has to re-count to one billion before it can change the text on the screen. Without the useMemo part of the code, my computer will forget the answer to the question, making a simple button click a costly, repetitive process that slows down the entire experience.
