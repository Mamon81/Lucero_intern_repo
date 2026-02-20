Jianna Monique M. Lucero

# Setting Up A React Project

## Reflections on Setting Up A React Project

1. What challenges did you face during setup?

The main challenge that I faced during setup was trying to install Tailwind CSS and configure it to my React Project. What I was initially following during the setup when I searched online had made me encountered errors when setting up Tailwind. I didn't realize that there was already a latest version of Tailwind CSS which was Tailwind CSS v4 and that I was using older commands in setting up Tailwind CSS, resulting in the terminal logging crashes. Aside from that, I had no issues during the setting up of a React Project with Tailwind CSS.

## Understanding Components & Props

1. Why are components important in React?

Components are important in React as they serve as the basic building blocks needed to create your system. They allows developers to be able to break the complexity of their UI into smaller and manageable pieces. By utilizing components, it allows me to be able to create a specific item in my UI like a button and be able to reuse throughout the rest of my system. This not only saves me time but also prevents me from duplicated code. Lastly, it also makes the system easier to maintain. Since components consist of smaller pieces of your complex system, it makes updates to a specific part of the system easier to implement since it will only be applied to its corresponding component.

## Handling State & User Input

1. What happens if we modify state directly instead of using setState?

If we modify state directly instead of using setState, this will update the variable's value in memory but will not update the system's UI in real time. This will result in the UI of the system being out of sync. React can only refresh the system's UI with the new data when using setter functions like setState. If not used, it will result in the system being broken since its UI is displaying old information.

## Working with Lists & User Input

1. What are some common issues when working with lists in React?

- Key Prop Mismanagement

Using unstable or non-unique keys is a major issue in React when using lists. This often leads to significant UI issues where the system is displaying incorrect information or losing track of the state of the component while rendering the UI.

- Performance Degradation

Working with big lists of data often causes the browser to slow down due to the rendering of all the items in the list when the parent component changes. This is because React is rendering all the items in the list simultaneously. This causes the browser to slow down when the user is scrolling through the list of items.

- State Mutation Errors

Modifying the list's state directly by pushing new items to the list's array will prevent React from detecting the change. This means the UI will not update even when the state has changed. To update the UI correctly, the state must be immutable. This can be achieved using the spread operator or the .map() function to create a new list of state objects.

- UI Issues in Dynamic Lists

Not correctly handling the list of items by failing to wrap the list of items within a React Fragment or failing to provide a unique ID to the component causes issues where the UI is broken. This is because React is unable to correctly identify the state of the component. This is especially true when the user deletes an item in the list.

## Navigation with React Router

1. What are the advantages of client-side routing?

- Faster Performance and Responsiveness
  By eliminating full-page reloads, it makes navigating between views almost instantaneous. This is due to the browser loading only the required data for the next view, making the application more responsive and app-like.

- Improved User Experience
  Client-side routing enables smooth transitions and complex animations between pages, which cannot be achieved with traditional server-side reloads. This is especially useful for Single Page Applications (SPAs), where the primary goal is to deliver a fast user experience.

- Less Server Load
  The server is not burdened as much since it mostly deals with API data instead of full HTML page reloads for every request. This change in functionality makes backend development simpler and more efficient.

- Maintenance of Persistent State
  UI components such as headers, footers, and navigation menus stay intact during navigation. This enables the application to retain user information, such as scroll positions or input values, across different views.

- Facilitates Direct Linking and History
  Client-side routers can handle URL history to ensure that certain views can be bookmarked and shared. This enables the same level of navigation as a traditional website while retaining the performance of an app.
