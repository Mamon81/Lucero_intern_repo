Jianna Monique M. Lucero

# Making API Calls with Axios

1. Why is it useful to create a reusable Axios instance?

Creating a reusable Axios instance is useful because it ensures that the app/system follows the DRY (Don’t Repeat Yourself) principle, making it more maintainable. This is achieved by defining the default configuration settings for the Axios instance, which includes the base URL, headers, and timeouts. When configuration settings are set, this ensures that developers do not have to repeat the configuration settings for each request. In addition, it provides a mechanism for managing interceptors for tasks such as authentication and error logging.

2. How does intercepting requests help with authentication?

Intercepting requests help with authentication because it acts as a central gatekeeper that can automatically manage credentials and authorization requests between the application and the server. Rather than having to manually append tokens to each request, an interceptor can obtain a token from local storage and append it to the Authorization header of each request. This approach allows a single piece of logic to manage authentication across the entire application. This includes scanning for security threats and monitoring session status. Additionally, intercepting requests enhance the user experience by catching 401 Unauthorized responses, initiating token refresh flows, and retrying failed requests.

3. What happens if an API request times out, and how can you handle it?

If an API request times out, it means that the client doesn't get a response within a given time limit to a particular request. This causes the client or an intermediary to drop the connection. Then the application making the request will usually get an error message or exception when an API request times out. Furthermore, the server might still be processing the request since it might be unaware that the client has given up on the request. This may be a problem when requests are made by clients that are set up to automatically repeat an action since it can result in incomplete actions, inconsistent states, duplicate transactions, or even data corruption.

As a developer, I can address the timeout issue by first setting a reasonable waiting time that is not too short to result in frequent failures and not too long to make my app freeze. I should also give my users feedback so that they know that a temporary problem occurred and that they can try again manually. For technical measures,I can implement retry logic for safe requests to prevent my app from repeatedly connecting to a failing server. Finally, maintaining optimized and monitored code will help me easily identify and address the slow areas of my code before they cause a timeout issue for everyone.
