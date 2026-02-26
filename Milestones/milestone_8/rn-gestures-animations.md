Jianna Monique M. Lucero

# Handling Gestures and Animations in React Native

1. What are the differences between `Animated` and `react-native-reanimated`?

- Thread Execution and Performance

Animated: This is normally executed on the JavaScript thread. Although setting useNativeDriver to true distributes some tasks to the native thread, it has limitations on which properties can be animated.

react-native-reanimated: This library is fully executed on the Native UI thread and ensures that the animation is always running at a smooth 60+ FPS even when the application logic (JS thread) is completely blocked or busy.

- API Architecture and Coding Style

Animated: This API uses an imperative approach which requires me to have to manually create values and invoke specific commands such as .start() or .stop(). This can become very messy if I have complex animations involving multiple steps in a single component.

react-native-reanimated: This library is built on a modern declarative API using React Hooks such as useSharedValue and useAnimatedStyle. This is much cleaner and follows the logical flow of React.

- Gesture Integration

Animated: This API is extremely difficult to integrate with complex touch gestures

react-native-reanimated: This library is built specifically to integrate with react-native-gesture-handler. This means that since the gestures and animations are both running on the Native thread, this results in the interaction in the app feeling instant and natural to the user.

- Setup and Capabilities

Animated: This API is built directly into React Native, which means that there is no setup required and no additional overhead to your app size. However, it is quite inflexible and only really good for simple "one-and-done" animations such as a fade-in or a loading spinner.

react-native-reanimated: This is a third-party library that must be set up and managed separately. However, I am able to gain access to advanced tools such as withSpring, withSequence, and withDelay, which enables me to use a much wider range of creative animations.

2. How does `react-native-gesture-handler` improve gesture performance?

`react-native-gesture-handler` can improve gesture performance by moving the entire process of gesture recognition and tracking from the Javascript thread to the native UI thread. By shifting it to the native UI thread, it prevents unresponsive UIs and dropped frames since any gesture interactions are no longer forced to wait for the JS thread to complete heavy processing app logic. Furthermore, by managing all kinds of gestures and animations natively, the library ensures that it is able to achieve high FPS interactions and gestures. This ensures that even when the app is experiencing heavy processing or load, its UI is able to maintain its responsiveness and fluidity without experiencing latency issues.

3. When would you use gestures instead of buttons in a UI?

I should use gestures when I want to have a clean design wherein there is no distracting buttons present and the main focus of the page is its content. By using gestures, it ensures that my apps feel more modern and natural, especially for one-handed use on larger phones or for fast repetitive actions such as swiping and scrolling. Even though buttons can provide the new user with additional context, using gestures makes it quicker and easier for experienced users to accomplish complex tasks just by using simple but quick motions to navigate my app.

4. Why is InteractionManager.runAfterInteractions necessary?

Using InteractionManager.runAfterInteractions is necessary because its acts as a traffic controller to a JavaScript thread, wherein heavy non-urgent tasks does not interfere with active animations or user interaction on the app. It prevents stutters and dropped frames during overloaded use of the thread by scheduling heavy tasks such as data fetching, complex rendering or state updates to run only after transitions and interactions have completed processing. This is particularly important during screen transitions in libraries such as react-navigation, where delaying background logic enables the app to continue running smoothly at 60 FPS. Ultimately, by using InteractionManager.runAfterInteractions, it prioritizes the visuals of the app, ensuring that the interface is still performing smoothly before doing the heavy lifting in the background.
