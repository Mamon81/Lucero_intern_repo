Jianna Monique M. Lucero

# Using Native Modules and Bridging in React Native

## Reflection

1. Why would you need to use native modules in a React Native app?

I need to use native modules in a React Native app, because the main purpose of native modules is to act as a bridge between my JavaScript code and the mobile OS, avoiding the limitations of the standard JavaScript environment. Native modules are also necessary in my app need direct access to platform-specific features such as NFC, or biometric sensors which do not have an embedded JavaScript API. Furthermore, they are also the ideal choice used to integrate third-party SDKs which solely provide native code (like integrated payment processors), reusing existing native codebases to save development time, and to offload CPU workload to the native layer, avoiding UI jitter such as complex image processing or encryption. By moving these heavy operations in Java, Kotlin, Swift, or C++, I can be sure that my app is responsive, and that the device's native power are being used in full.

2. How does React Native communicate with native code?

React Native communicates with native code by using native modules and native components. This allows JavaScript to trigger platform-specific functions and render Native UI views. In the legacy architecture of React Native, all of this happens over a bridge that asynchronously serializes data and sends them across the JavaScript and native threads, causing performance bottlenecks if the bridge is heavily loaded. However, in the new architecture, it uses the JavaScript Interface (JSI), which is a C++ layer that provides the JavaScript runtime direct access to native objects, providing the capability for direct, synchronous calls. This architecture change allows the first use of Turbo Modules, which provide efficient, lazy-loaded logic, and Fabric, which provides a better pipeline for UI rendering, as well as the JavaScript's flexibility to interface directly with the powerful APIs of Android and iOS.

3. What are some challenges of maintaining native bridges?

- Performance Overhead

The legacy bridge acts as a communication bottleneck since all the information must be converted into a JSON string and then deserialized. This asynchronous communication can result in a delay, causing the app to experience stuttering especially during high-frequency operations such as scrolling through a list of items.

- Debugging Complexity

It is much more difficult to trace the origin of an error since it can either exist in JavaScript code, the native module of the code or any of the native bridges. To help them trace silent runtime errors which do not always surface in standard JavaScript tools, developers have to be familiar with various debugging environments like Xcode (iOS) or Android Studio (Android).

- Version Compatibility and Updates

React Native is constantly evolving, and the updates, although minor, can cause incompatibility with the native modules or third-party plugins. Therefore the native code must always be kept compatible with the updates of the framework and the operating systems from Apple and Google.

- Memory Management Issues

Native resources such as event listeners or large media assets, will need to be explicitly released by the developer since they are not automatically collected by the JavaScript garbage collector. A lack of proper management of these closures may result in the existence of zombie objects that may then remain in memory eventually causing the application to crash or slow down.

- Limited API Access

Although React Native supports numerous common features, newer hardware features such as specific biometric sensors are generally not available in the core framework immediately. This then pushes developers to create their own custom native modules which creates yet another layer of complexity and a long term maintenance liability to the codebase.

- Reliance on Third-Party Libraries

Numerous applications rely on libraries that are maintained by a third party; which may not always updated on a regular basis. This can result in my app being unable to continue with a version of React Native that is out of date, or exposed to security threats, in case a library maintainer no longer supports that package.

## Example of React Native Library

The `@brighthustle/react-native-usage-stats-manager` is a specialized Android-specific library that allows developers to connect the React Native platform with the UsageStatsManager API. This library can then be be utilized to track screen time, app launch time, and app usage patterns. What I find interesting about its implementation is that instead of providing developers with a summary of the data, it offers them the "raw data" directly from the Android system. This allows the developer to be able to accurately measure every single second of screen time using their app. However, since the data is quite sensitive in nature, the library is designed to work with a high-level Android permission, where users are asked to toggle a setting in their device's system settings to utilize the app.

## Challenge or Issue Encountered while Learning about `@brighthustle/react-native-usage-stats-manager`

One such challenge I have found out while looking at the library is that there was an issue posted on their GitHub regarding on how the "raw" data from the phone does not exactly correlate with the official data provided by looking at my phone settings for my official screen time data. When working with something like this library to listen for every instance when an app opens or closes, it can be easy for the connection to miss these "hidden" moments when my phone screen turns off suddenly or when an app is forced to close in the background. Since the official Digital Wellbeing tracker for my phone has special, deeper access to my phone's hardware, it is able to filter out these tiny errors, whereas something like this library can get confused by these events. This results in my app reporting significantly less time than what was actually spent, making it hard for developers to provide 100% accurate data to their users without doing extra manual math to account for these gaps in data.

## Sample Code

### Usage

```javascript
import {
  EventFrequency,
  checkForPermission,
  queryUsageStats,
  showUsageAccessSettings,
} from '@brighthustle/react-native-usage-stats-manager';

Time needs to be in millisecond for function queryUsageStats

const startDateString = '2023-06-11T12:34:56';
const endDateString = '2023-07-11T12:34:56';

const startMilliseconds = new Date(startDateString).getTime();
const endMilliseconds = new Date(endDateString).getTime();

const result = await queryUsageStats(
      EventFrequency.INTERVAL_DAILY,
      startMilliseconds,
      endMilliseconds
    )
```

The code snippet provided shows how to access and use the usage statistics for Android applications. This is done by bridging JavaScript and the native UsageStatsManager API. First, it converts the standard calendar dates into millisecond timestamps, which the phone uses to keep track of time. Afterwards, it then makes a request to the phone's internal system to retrieve a daily report of app activity such as total time spent in the foreground within that specific timeframe.

### Check Permission & Open Permission Activity

```javascript
checkForPermission().then((res: any) => {
  if (!res) {
    showUsageAccessSettings('');
  }
});
```

As this is personal data, this code snippet checks to ensure that the user has enabled the app to access these data records. If it is not enabled, it opens the phone’s settings menu to make it easy for the user to turn it on so that it can access the data it requires to show accurate screen time.
