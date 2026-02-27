Jianna Monique M. Lucero

# Handling API Calls in React Native using Axios & Axios-Retry

1. Why is Axios preferred over fetch in some cases?

Axios is chosen over fetch in some cases because it can perform many repetitive tasks automatically and offer a more robust experience for me and other developers. If I use the fetch API, I have to manually convert the data to JSON and check if the request failed. By using Axios, data conversion is done automatically, and any server error (such as 404 or 500) is considered a rejected promise that I can easily catch. Axios also provides very powerful features such as request timeouts, global configurations, and more, making it much more efficient for building complex applications without having to write extra boilerplate code.

2. How does Axios-Retry improve network reliability?

Axios-Retry can improve network reliability by automatically retrying failed requests that are caused by temporary issues like poor Wi-Fi signals or server crashes instead of allowing the app to crash. This is done through the use of "intelligent conditions", which prevents it from retrying errors that cannot be fixed like a missing page. Furthermore, it also prevents the server from being overwhelmed with requests by using a strategy called "exponential backoff". This strategy involves gradually increasing the time between each retry attempt. Thanks to Axios-Retry's seamless handling of temporary issues, it ensures that the application becomes more robust and provides a better user experience.

3. How would you handle API failures gracefully in a React Native app?

I would implement different layers for handling API failures to keep my app stable while making the user aware of what's currently going on. I will first apply Axios interceptors to offer a safety net to intercept server errors or retry failed requests using Axios-Retry the API failures are visible in my app's UI. Next, in the different screens of my app, I would apply try-catch blocks and state variables to show loading spinners or user-friendly error messages instead of showing error messages full of technical terms.By using tools and libraries like Axios-Retry, it helps me to make sure that my app is stable and always able to give useful feedback to users in case something goes wrong.
