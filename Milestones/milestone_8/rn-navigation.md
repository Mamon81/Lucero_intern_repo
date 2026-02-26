Jianna Monique M. Lucero

# Navigation in React Native using React Navigation

1. What are the key differences between stack, tab, and drawer navigation?

- Stack

Stack navigation manages screen navigation by using LIFO (Last-In, First-Out). When I move to a new screen, the new screen is pushed onto the top of the stack. If I want to go back to the previous screen, it "pops" the current screen off to reveal the previous screen. This type of navigation is best for navigating deeper into the app such as clicking a post to see its details.

- Tab

Tab navigation provides a persistent bar, usually located at the bottom of the screen. This allows users to be able to switch instantly between sections of an app. This type of navigation is best suited for accessing frequently accessed app sections such as Home and Profile.

- Drawer

Drawer navigation provides a hidden slide panel that can be slid out from the edge of the screen and is used to prevent cluttering of the main UI. This is usually triggered by a swipe gesture and is designed to house secondary options of the app such as app settings.

2. How does React Navigation handle screen transitions?

React Navigation handles screen transitions by utilizing a stack-based architecture where screens are pushed onto or popped off a stack. When I navigate to a new screen, my app "pushes" a new card on top of the stack, and when I go back, it "pops" that card off to reveal what's underneath. To make this process smooth and natural, it relies on professional animations that match my phone's operating system, such as screens sliding in from the side on an iPhone or fading in on an Android. Although it does this automatically, it also allows me and other developers to have the "remote control" to control how quickly they animate and if they should slide in from the bottom like a popup window.

3. How would you implement deep linking in a React Native app?

To achieve deep linking, I first declare a special URL scheme (such as milestone8://) in my app’s config file so that the phone recognizes that when this link is clicked, it should open my app. Furthermore, with using modern tools such as Expo Router, which relies on file-based routing, the URL path will automatically correspond to my folder structure; for instance, a link ending in /learn-more will immediately open my learn-more.tsx file. This means that regardless of whether my app is closed or running in the background, a single link can be a “portal” that drops the user exactly where they need to be.
