Jianna Monique M. Lucero

# Handling Deep Linking and Routing

## Configuring Deep Linking with React Navigation

## Sample Code Snippets of Configuring Deep Linking with React Navigation for Android w/o using Expo

### Android Configuration (AndroidManifest.xml)

```xml
<activity
  android:name=".MainActivity"
  android:launchMode="singleTask"
  android:exported="true">

  <intent-filter>
      <action android:name="android.intent.action.VIEW" />
      <category android:name="android.intent.category.DEFAULT" />
      <category android:name="android.intent.category.BROWSABLE" />
      <data android:scheme="myapp" />
  </intent-filter>
</activity>
```

### React Navigation Configuration (App.js)

```javascript
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// 1. Define the linking configuration
const linking = {
  prefixes: ['myapp://', 'https://www.mywebsite.com'],
  config: {
    screens: {
      Home: 'home',
      Profile: 'user/:id',
    },
  },
};

export default function App() {
  return (
    // 2. Pass the configuration to the container
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

The configuration process is split into two parts: Android Configuration and React Native Configuration In my AndroidManifest.xml file, I am adding an Intent Filter, which can be considered as the app's "ears." By setting the action to 'VIEW' and the categories to 'DEFAULT' and 'BROWSABLE,' I am informing the Android operating system that my app is capable of viewing web-style links. In addition, the data tag is where I am defining my app's unique address. So, when a user clicks on a link with myapp://, Android recognizes it and wakes up my app. Finally, the launchMode="singleTask" is significant in my app because it allows Android to bring the current window to the front if my app is already running instead of starting a second, confusing version of my app.

In my JavaScript file, the linking object is my app's "Router." The prefixes array is where I am defining what incoming addresses my app will listen for. Inside my config, I can then specify what URL paths correspond to my screen names; for example, setting Profile: 'user/:id' tells my app that if it sees 'user/123' in the URL, it should navigate to my Profile screen and automatically provide 123 as a piece of data (a param) to this screen. Finally, by passing this linking object into my NavigationContainer, my app is now "link-aware" and can take care of my app's deep links the moment my app is opened or when it is running in the background.

## Sample Code Snippets of Configuring Deep Linking with React Navigation for Android using Expo (milestone10Project)

### Configuration on app.json

```json
"android": {
  "package": "com.milestone10.lucero",
  "intentFilters": [
    {
      "action": "VIEW",
      "autoVerify": true,
      "data": [
        {
          "scheme": "milestone10project"
        }
      ],
      "category": ["BROWSABLE", "DEFAULT"]
    }
  ]
}
```

### TypeScript Code (\_layout.tsx)

```tsx
import * as Linking from 'expo-linking';

const prefix = Linking.createURL('/');

export const linking = {
  prefixes: [prefix, 'milestone10project://', 'exp://'],
  config: {
    screens: {
      '(tabs)': '',
      'api-demo': 'api-demo',
      'gesture-demo': 'gesture-demo',
      modal: 'modal',
    },
  },
};
```

In Android using React Navigation and Expo, it is quite easier to set up a deep linking feature. I don’t need to manually change the AndroidManifest.xml file. Instead, I can directly add a scheme and intentFilters in app.json, which is basically a command center for my app. Then, Expo takes care of converting this simple JSON configuration into something that can be directly executed by a native platform in the background. This approach is much easier and secure compared to the non-Expo approach because Expo takes care of all the heavy work in terms of registering my app on Android, and the expo-router plugin takes care of routing incoming links directly to the correct screen without me having to add extra code for routing.

Meanwhile, the following code snippet in my `layout.tsx` file is the "GPS" system of my application because it indicates the exact way the incoming URLs should be treated and routed. By using `Linking.createURL('/')`, the code is generating a prefix that is dynamic and will work regardless of the environment in which the application is running. This is important because the application will be able to recognize its own URL whether it is still in the stages of development or has already been deployed. In the `prefixes` array, I have added my own custom `milestone10project://`, while the `config` section is providing a "translation map" that will map the URL paths to the specific screens in the navigation tree of my application. This is important because if a user clicks on a specific link, the application will not simply open blindly but will instead go directly to the desired feature, whether it is the API or Gesture demo, while still providing a "NotFound" feature for the URLs that it does not recognize.

## Testing Deep Links For milestone10Project

I first ensured that the Expo server was running and ensured that my physical device is fully connected to the Expo server. I then tested the following routes to see if it navigates to the correct screen:

- exp://[YOUR_LOCAL_IP]:8081 -> Root/Home screen
- exp://[YOUR_LOCAL_IP]:8081/api-demo -> API Demo
- exp://[YOUR_LOCAL_IP]:8081/gesture-demo -> Gesture Demo

Note: I removed my local IP address in the documentation for safety and security purposes.

Results show that milestone10Project was able to navigate to the correct screen instantly.

## Handling Deep Links while milestone10Project is in different states (open, background, closed)

### use-deep-linking.ts file

```ts
import { useEffect, useRef } from 'react';
import * as Linking from 'expo-linking';
import { useRouter } from 'expo-router';

type AppRoute = '/' | '/api-demo' | '/gesture-demo' | '/modal';

function getRouteFromUrl(url: string | null): AppRoute | null {
  if (!url) return null;

  const parsed = Linking.parse(url);
  const rawPath = (parsed.path ?? '').replace(/^\/+/, '');
  const normalizedPath = rawPath.replace(/^--\//, '');

  if (!normalizedPath || normalizedPath === 'home') return '/';
  if (normalizedPath === 'api-demo') return '/api-demo';
  if (normalizedPath === 'gesture-demo') return '/gesture-demo';
  if (normalizedPath === 'modal') return '/modal';

  return null;
}

export function useDeepLinking() {
  const router = useRouter();
  const isInitialLinkHandled = useRef(false);
  const lastHandledUrl = useRef<string | null>(null);

  useEffect(() => {
    const handleUrlNavigation = (url: string | null) => {
      if (!url || lastHandledUrl.current === url) return;

      const route = getRouteFromUrl(url);
      if (!route) return;

      lastHandledUrl.current = url;
      router.push(route);
    };

    // Handle closed state (app launched from a deep link).
    const getInitialLink = async () => {
      if (isInitialLinkHandled.current) return;

      const initialUrl = await Linking.getInitialURL();
      handleUrlNavigation(initialUrl);
      isInitialLinkHandled.current = true;
    };

    getInitialLink();

    // Handle foreground/background state (incoming link while app is running).
    const subscription = Linking.addEventListener('url', ({ url }) => {
      handleUrlNavigation(url);
    });

    return () => {
      subscription.remove();
    };
  }, [router]);
}
```

This custom hook, useDeepLinking, acts as a navigation controller that securely manages how my Expo application behaves in terms of deep linking in all states of the application. From when it is completely closed to when it is in the background or when it is active. To manage the closed state, it uses the getInitialLink function, which at the moment of starting an app will check whether a particular URL was used to start the app and will automatically redirect the user to the corresponding screen rather than the default home page. To manage the open and background states, it contains a live event listener to the url which intercepts the incoming links the moment they are clicked inside the app as long as it is in memory.Through the use of a single "handleUrlNavigation" function, which validates the URL and employs "refs" to prevent unnecessary app triggering, the hook ensures a seamless transition to the required page, regardless of whether the app was launched in the closed, open, or background state.

### Testing the Deep Links while milestone10Project is in different states (open, background, closed)

#### Closed State

- URL Used: exp://192.168.1.6:8081/api-demo

- Process:

1. Started Metro using `npx expo start --go`

2. Confirmed device sessions are running the project

3. Fully closed the app

4. Opened URL provided

- Expected Result: Was able to successfully navigate to the expected screen

### Background State

- URL Used: exp://192.168.1.6:8081/gesture-demo

- Process:

Repeat Steps 1-2 from Closed State

3. Pressed Home button to ensure the app goes to background

4. Opened URL provided

- Expected Result: App returns to foreground and proceeds to expected screen

### Open State

- URL Used: exp://192.168.1.6:8081/api-demo

- Process:

Repeat Steps 1-2 from Closed State

3. Opened URL provided while app is open

- Expected Result: App immediately navigates to expected screen

## Reflection

1. What are the benefits of deep linking in mobile apps?

- Enhanced User Experience

By taking the user directly to the product, content, or feature they clicked on, they don’t have to go through the hassle of searching through the app themselves. This not only cuts down the steps the user has to go through but makes the app extremely responsive to the user.

- Boosted Retention and Re-Engagement

By providing the user with a direct link to something they’re already interested in, I'm increasing the chances of the user staying active in the long run.

- Seamless Cross - Platform Transitions

Deep linking is the bridge that ties the mobile web and the native app together. It allows the user to go directly from clicking on a link in the mobile search engine or a web ad into the native app environment without hitting any bumps.

2. How does React Navigation handle deep linking?

React Navigation acts as an automated traffic controller for my application. It does this by using the linking prop on the NavigationContainer to link the external URL and my internal screen hierarchy together. Furthermore, it is smart enough to handle different scenarios, such as when the link is opened while the application is closed, as well as when the link is pressed and the application is running in the background. To get it to work, I simply need to provide the application with its 'nickname,' which is the prefix, and a list that shows which link is which. This way, I do not have to worry about the messy technical details about how phones handle links and can simply focus on making sure that my user is landing on the correct page every time.

3. What challenges might arise when implementing deep linking?

- Technical and Platform Discrepancies

Both iOS and Android utilize different link systems (Universal Links and App Links, respectively), which means developers must manage two different configurations for linking. This can cause confusion and different results on different platforms, especially Android, as different Android brands might not support the App Links protocol.

- Security and Hijacking Risks

If the links are not verified with system files, my app can be "hijacked" by malicious apps using the same URL scheme. Also, if I don't sanitize the data in my link, it can leave my app vulnerable to injection attacks, where hackers can try to access my users' personal data through the link parameters.

- Context Loss

If my app is opened from a "cold start," it can experience a "race condition" where the home screen is loaded before the link is processed. This will cause the user to end up on the wrong screen, which is a jarring experience and defeats the purpose of the link in the first place.

- Maintenance and Human Error

Manually changing the deep link configurations in system files, such as AndroidManifest.xml, can take time and is often prone to simple typos, which can cause my app to malfunction. Furthermore, as my app evolves and its internal architecture is modified, these links can become "broken" if they are not constantly monitored and updated to reflect the changing screen paths in my app.

- In-App Browser Interference

Some apps, like Facebook, Twitter, or Chrome, might have their own internal browsers for opening links, which can prevent my phone from opening my app in the first place. This means my user will have to stay in a limited mobile web experience instead of entering the rich app experience I designed for them.
