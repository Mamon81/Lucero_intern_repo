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

## Preventing Unnecessary Renders with useCallback

1. What problem does useCallback solve?

The useCallback hook solves the problem of function recreation. In JavaScript, every time a component is re-rendered, it creates completely new copies of its functions with new memory locations, even though the code logic inside the functions remains the same. This becomes a problem when these functions are passed as props to other components or used as dependencies in other hooks. This is because React will pick up on the new memory location and think that a real change has occurred. The useCallback hook solves this problem by caching the function, so that its "identity" in memory is "frozen" and it always remains the same. This prevents other components who receives the function to not think that a real change has occurred.

2. How does useCallback work differently from useMemo?

The difference between useCallback and useMemo is what each hook stores in memory. useCallback memoizes or stores the function definition itself. While useMemo memoizes or stores the computed result of a function. When a function is wrapped with useCallback, React ensures that the same function reference is returned during re-renders. On the other hand, useMemo runs the function and stores its return value, which is then reused during subsequent renders to prevent expensive calculations. In conclusion, useCallback is applied to ensure a stable reference to a function, while useMemo ensures a stable reference to a computed value.

3. When would useCallback not be useful?

- During the first render

There is a slight overhead when using the hook for the first time a component is loaded. The performance benefits gained from using useCallback will only appear during subsequent re-renders when the function can be pulled fron the cache instead of being rebuilt.

- For simple, non - memoized components

If the child component is not wrapped with React.memo, it will re-render every time the parent component does, regardless of whether useCall is used.

- When performance gains are negligible

useCallback is unnecessary when it is used in simple components or functions that re-render quickly.

- For functions used only within the same component

If the function is not passed down as a prop to other components or used as a dependency in other hooks such as useEffect, there is no need to preserve the its memory identity.

- When dependencies change frequently

If the values in the dependency array change every single time there is a render, this results in the function be recalculated every time. This defeats the purpose of useCallback and instead affs unnecessary processing overhead to the application.

- For "native" Javascript operations

If useCallback is used on simple basic operations such as math or string concatenation, it produces more work for the browser/application than it is worth. Using useCallback on these simple operations adds unnecessary memory and processing overhead to my code.
