Jianna Monique M. Lucero

# Setting Up a React Native Development Environment (Expo & Metro Server)

1. What is the role of Metro in React Native?

- Acts as an "engine" that works in the background and helps in making my React Native app run.

- Its primary function is to compile all my different code files, images, and fonts into a single package that a mobile phone can understand.

- Provides development server that works in the background where it is able to send the code that I'm working from my desktop directly to my phone or emulator while I am working.

- Contains a feature called Fast Refresh that allows me to see the changes I make in my code as soon as I save my work without having to restart the entire app.

- Optimizes my code to make the final app as fast and small as possible for download by the user when I am done with my project.

2. How does Expo simplify React Native Development?

- Fast and Easy Setup

I can easily and quickly create a new project using only one command without requiring me to install and configure heavy software like Android Studio

- Automatic Folder Management

Due to Expo's managed workflow, it takes care of creating the Android and iOS folders for me. This makes it much simpler for me to making my project and its files organized as well as easier for me to update to newer versions of React Native in future updates.

- Built - in Phone Tools

Expo also comes with a library of tools that let me use common features in my phone like the camera, GPS and notifications using only Javascript. This means that I don't have to write native code like Swift or Kotlin to access these features.

- Instant Wireless Testing

By using the Expo Go app, I can immediately see the work I've done in my code from my desktop on my actual phone immediately. This is done easily by scanning a QR code. This means that I don't need to plug in a cable or wait for a long build process every time I make a change to my app.

3. What issues did you encounter, and how did you resolve them?

Before setting up my React Native Project with Expo and Metro Server, I was initially installing the necessary dependencies for React Native development. I first tested if the necessary dependencies for React Native were available by initially making a React Native project without Expo and Metro server first. During the testing, I noticed that it was not detecting my Android SDK in my desktop and initially thought that it was needed for setting up the React Native project with Expo and Metro server. It took me a while to figure out that I didn't need Android Studio or Android SDK to properly set up the React Native project with Expo and Metro Server. Aside from that, the process of setting up the project was smooth and seamless and I was amazed at how I could easily see the changes from my phone immediately without needing a cable or a virtual emulator.
