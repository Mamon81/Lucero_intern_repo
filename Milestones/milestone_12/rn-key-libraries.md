Jianna Monique M. Lucero

# Understanding Key Libraries Used in Focus Bear

## List of Key Libraries Used in Focus Bear

### Navigation & UI

- `@react-navigation/native`, `@react-navigation/stack`, `@react-navigation/bottom-tabs` - Handles navigation

- `react-native-vector-icons` - Provides custom icons

- `@rneui/themed` - UI component library

- `react-native-gesture-handler` - Improves gesture handling

### State Management & Data Handling

- `redux`, `redux-thunk`, `redux-persist` - Manages global state

- `react-native-async-storage/async-storage` - Stores user data locally

### Networking & API Calls

- `axios`, `axios-retry` - Handles API requests and retries

- `@pusher/pusher-websocket-react-native` - Manages real - time messaging

### Authentication & Security

- `react-native-auth0` - Handles authentication via Auth0

- `@invertase/react-native-apple-authentication` - Supports Sign in with Apple

### Performance & Background Services

- `react-native-background-fetch`, `react-native-background-timer` - Handles scheduled background tasks

- `react-native-reanimated` - Improves animations and performance

### Internationalisation & Accessibility

- `i18next`, react-i18next` - Handles translations and localisation

- `react-native-localize` - Detects device locale

### Logging, Crash Reporting & Analytics

- `@sentry/react-native` - Logs errors and crashes

- `posthog-react-native` - Collects analytics events

## Three Libraries with a Brief Explanation of their Purpose

1. `@react-navigation/native`

The @react-navigation/native library is used as the core library for handling the navigation and screen transition functionality mobile applications. It works in the same way as the history stack of a web browser, which allows the user to move between different features of the application smoothly, along with the support for platform-specific gestures and animations. Apart from the basic functionality of screen transition, the library also takes care of complex functionality, including deep linking and state persistence, so that the application is in the right state even after being closed.

2. `react-native-background-fetch`

The `react-native-background-fetch` library is a specialized library that ensures the data within an application remains fresh by running tasks silently in the background. This means that it fetches new data before the application is even opened, thus providing a seamless user experience where data is available to be shown immediately upon opening the application. In addition to this, it also ensures critical application maintenance tasks, including syncing local data with a server, processing any data that needs to be uploaded, and cleanup of the cache.

3. `redux`

Redux is a library that offers a single, global store that holds the full application state so that the app can keep data flow constant. By changing the state through only using pure reducer functions, Redux makes changes predictable, easy to trace, and simple to test. Ultimately, Redux is designed to make managing data, like user login and theme settings, easier, while maintaining a consistent user experience across the web, mobile, and server applications.

## Selected Library That I'm Unfamiliar with and How it Works

1. `@sentry/react-native`

`@sentry/react-native` is a tool for developers to see and solve issues with their applications when people are using them. It is similar to a safety net, as it will automatically organize error logs and crashes so they may be fixed as soon as possible. Additionally, it offers a "replay" feature, similar to a recording of the user’s screen, to make debugging easier, as well as clean up messy computer code into plain language and detect if the app is running slowly.

## Reflection

1. What is the purpose of Redux - Persist, and why is it useful?

The main purpose of Redux Persist is to prevent data loss when the page is refreshed or when the application is closed by directly storing the application’s state in the browser’s storage. This is extremely useful as it will automatically load the saved state back into Redux when the application is started again, ensuring that the user is logged in and the application’s settings are still preserved even after several sessions. Not only is Redux Persist useful for providing a better user experience, it also helps improve the application’s overall performance as it reduces the need for redundant API calls, as the application will simply load the saved data rather than having to fetch it again from a server.

2. How does `react-native-background-fetch` differ from a normal timer?

A normal timer is only active when I am actively using the app. This is because my phone is trying to preserve battery life, so it will usually suspend these types of timers as soon as I switch to another app or lock my phone. They should be used for small things that appear on my phone screen, such as a countdown or loading animation, while my app is still active.

On the other hand, `react-native-background-fetch` is meant to wake my app up even if it is closed or minimized. Rather than constantly running, it asks my phone's operating system to provide my app with power for a few seconds every 15 minutes or so, allowing it to do important background work such as checking for new messages. Although I have no control over exactly when it will wake up, it is the best way to guarantee my app stays updated without draining the user's battery.

3. Why does Focus Bear use Auth0 instead of handling authentication manually?

Focus Bear uses Auth0 to handle their authentication process, as it is a highly secure, production-ready solution that would be incredibly complex and risky to implement and handle manually. By offloading the authentication process to a third-party service, the developers are able to guarantee that their users' sensitive information, such as their passwords or their profiles, is protected with the highest level of encryption currently available. Furthermore, Auth0 offers the added benefit of providing a seamless Social Login experience to their users, allowing them to log in with their Google or Apple credentials, among others. Auth0 also handles complex processes such as password reset, two-factor authentication, or managing secure sessions across devices for their users. This allows the developers at Focus Bear to save time and focus on delivering and optimizing their features to their users.

4. How does PostHog help improve the user experience in Focus Bear?

In Focus Bear, the role of PostHog is critical in improving the app's user experience, as it gives the team a lot of insight into the way the user is using the application. For instance, by recording user sessions, it gives developers a visual idea of the way the user could get stuck or become frustrated with the application. Furthermore, the feature flags allow the team to experiment with new features and changes and see what is best for the community, ensuring that each change is helpful for the user when using the app.

5. What's the difference between Sentry and PostHog, and when would you use each?

Sentry and PostHog are different in what they try to achieve: Sentry is about solving technical issues whereas PostHog is about analyzing issues in the app's user experience. For instance, I would use Sentry to pinpoint where crashes or code issues happen, or where performance is lagging. It’s useful to identify the specific line of code that would be leading to an error and what the technical context is surrounding the error, including device type and network request data.

On the other hand, if I need to understand the user’s journey and how they are using my application’s features, then I will use PostHog. It is the best tool for performing A/B tests with feature flags and for obtaining qualitative feedback using in-app surveys. Although both tools offer session replays, which allow me to see what happened on the user’s screen, Sentry uses it for providing visual context for errors, whereas PostHog uses it for identifying issues with user experience.

6. How does `react-native-localize` work, and how does it interact with `i18next`?

`react-native-localize` acts as a bridge for accessing native platform APIs, enabling my app to access regional settings such as the user’s preferred language, country code, and time zone, among other settings. It fetches vital information directly from the user’s device, such as settings for date and currency formats, as well as support for RTL layouts.

It integrates with `i18next` by providing the initial "language signal" necessary for `i18next` to function. `i18next` does the heavy lifting of translating text from external files and handling complex rules such as pluralization, but it relies on `react-native-localize` to determine the user’s preferred language.

7. If you had to remove one library and replace it with an alternative, which one would you choose and why?

I would remove @react-navigation/native and replace it with Expo Router. Now that I have a bit of experience with setting up a React Native Project using Expo, it was much easier to navigate between the different app screens since its routing system is file-based meaning that the folder structure automatically defines the app's navigation paths. Furthermore, Expo Router is built on top of React Navigation which means that the team can still maintain the same high-performances while gaining a cleaner codebase that is easier for new developers to understand.
