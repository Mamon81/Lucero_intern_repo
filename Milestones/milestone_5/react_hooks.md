Jianna Monique M. Lucero

## Understanding React Hooks: useEffect

1. When should you use useEffect instead of handling logic inside event handlers?

useEffect should be used when you want logic to happen automatically. This usually occurs when a component has appeared on the screen or its data has changed. It is a tool that helps in synchronization that helps me keep my app in sync with external things, such as a database, a timer, or a browser window. In contrast, event handlers are used for logic that should happen only when the user actually does something, such as clicking a button or submitting a form.

2. What happens if you don't provide a dependency array?

If I don’t pass in a dependency array, my useEffect will run after every single render of the component. This means that the code inside the hook will execute when the component is first rendered, and then will run again every time any state or prop changes. This creates a never ending run of useEffect. Without providing a dependency array, I could potentially create infinite loops where updating state triggers another render, which then triggers the effect again as well as cause performance issues because the app is re-running logic that doesn’t need to be re-run.

3. How can improper use of useEffect cause performance issues?

When useEffect is used incorrectly, it can cause performance issues such as my application slowing down or even crash. This is due to unnecessary re-renders and infinite loops. This is usually caused by forgetting to provide a dependency array as mentioned in the previous question, or when an effect updates a state that triggers said effect repeatedly. Furthermore, when a cleanup function is not used, it can cause memory leaks. This is because the application continues to run tasks in the background even after a page has been closed.
