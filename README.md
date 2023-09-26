# Mobile Testing README

## Introduction
This README provides a comprehensive guide for mobile testing, focusing on testing root navigation within a mobile application. It includes step-by-step instructions and screenshots to help you understand the testing process.

![Mobile Testing](/src/assets/images/menu.png)

## Prerequisites
Before starting mobile testing, make sure you have the following prerequisites in place:

- A mobile device or emulator.
- The mobile application installed on the device/emulator.
- Testing credentials or data, if required.
- A stable testing environment, including network connectivity.

## Testing Setup
To begin mobile testing, follow these setup steps:

1. **Launch the Application**: Open the mobile application on your device or emulator.

2. **Identify Test Cases**: Identify the root navigation paths that need testing, such as navigating from the home screen to various sections or accessing user profiles and settings.

3. **Prepare Test Data**: If your test cases require specific data or user credentials, ensure you have them ready.

4. **Capture Screenshots**: Use the screenshot functionality on your device/emulator to capture screens before and after navigation for comparison.

## Tech Stack
This mobile application is built using the following technologies and libraries:

- **React Native**: A JavaScript framework for building mobile applications.

- **Expo**: An open-source platform for building and deploying React Native applications.

- **Tailwind CSS**: A utility-first CSS framework for styling components.

- **React Native Vector Icons**: A library for using vector icons in your React Native application.

- **Async Storage**: A simple, built with custom encryption allowance, asynchronous, persistent, key-value storage system for React Native.

- **Expo Router**: File-based router for React Native and web applications. It allows you to manage navigation between screens in your app, allowing users to move seamlessly between different parts of your app's UI, using the same components on multiple platforms (Android, iOS, and web).

- **Expo Image**: A module for handling images in Expo applications.

- **Grid Viewer**: A custom component or library for displaying grid-based content.

- **Custom Components**: Custom React Native components developed for specific functionality within the app.

## Testing Root Navigation

### Test Case 1: Navigating from Menu to Single Product
1. Start at the home screen.
2. Tap on the "Menu" icon in the bottom navigation menu.
3. Verify that the app navigates to the menu page.


### Test Case 2: Product to Checkout
1. Start at the menu screen.
2. Tap on the "Checkout" icon in the bottom navigation menu.
3. Verify that the app navigates to the checkout screen.

## Screenshots
To illustrate the test cases, here are the corresponding screenshots:

| Before Navigation (Menu Screen) | After Navigation (Single Product Page) |
|---------------------------------|-----------------------------|
| ![Home Screen](/src/assets/images/menu.png) | ![Menu Page](/src/assets/images/product-image.png) |

| Before Navigation (Product Screen) | After Navigation (Checkout Page) |
|---------------------------------|---------------------------------|
| ![Menu Screen](/src/assets/images/product-image.png) | ![Checkout Page](/src/assets/images/checkout-page.png) |

## How to Run the Application
To run the mobile application on your device or emulator, follow these steps:

1. Clone the GitHub repository to your local machine: 
7 / 7

Certainly, I've added a section explaining how to run the mobile application. Here's the updated README:

markdown
Copy code
# Mobile Testing README

## Introduction
This README provides a comprehensive guide for mobile testing, focusing on testing root navigation within a mobile application. It includes step-by-step instructions and screenshots to help you understand the testing process.

![Mobile Testing](/src/assets/images/menu.png)

## Prerequisites
Before starting mobile testing, make sure you have the following prerequisites in place:

- A mobile device or emulator.
- The mobile application installed on the device/emulator.
- Testing credentials or data, if required.
- A stable testing environment, including network connectivity.

## Testing Setup
To begin mobile testing, follow these setup steps:

1. **Launch the Application**: Open the mobile application on your device or emulator.

2. **Identify Test Cases**: Identify the root navigation paths that need testing, such as navigating from the home screen to various sections or accessing user profiles and settings.

3. **Prepare Test Data**: If your test cases require specific data or user credentials, ensure you have them ready.

4. **Capture Screenshots**: Use the screenshot functionality on your device/emulator to capture screens before and after navigation for comparison.

## Tech Stack
This mobile application is built using the following technologies and libraries:

- **React Native**: A JavaScript framework for building mobile applications.

- **Expo**: An open-source platform for building and deploying React Native applications.

- **Tailwind CSS**: A utility-first CSS framework for styling components.

- **React Native Vector Icons**: A library for using vector icons in your React Native application.

- **Async Storage**: A simple, built with custom encryption allowance, asynchronous, persistent, key-value storage system for React Native.

- **Expo Router**: File-based router for React Native and web applications. It allows you to manage navigation between screens in your app, allowing users to move seamlessly between different parts of your app's UI, using the same components on multiple platforms (Android, iOS, and web).

- **Expo Image**: A module for handling images in Expo applications.

- **Grid Viewer**: A custom component or library for displaying grid-based content.

- **Custom Components**: Custom React Native components developed for specific functionality within the app.

## Testing Root Navigation

### Test Case 1: Navigating from Menu to Single Product
1. Start at the home screen.
2. Tap on the "Menu" icon in the bottom navigation menu.
3. Verify that the app navigates to the menu page.

### Test Case 2: Product to Checkout
1. Start at the menu screen.
2. Tap on the "Checkout" icon in the bottom navigation menu.
3. Verify that the app navigates to the checkout screen.

## Screenshots
To illustrate the test cases, here are the corresponding screenshots:

| Before Navigation (Menu Screen) | After Navigation (Single Product Page) |
|---------------------------------|-----------------------------|
| ![Home Screen](/src/assets/images/menu.png) | ![Menu Page](/src/assets/images/product-image.png) |

| Before Navigation (Product Screen) | After Navigation (Checkout Page) |
|---------------------------------|---------------------------------|
| ![Menu Screen](/src/assets/images/product-image.png) | ![Checkout Page](/src/assets/images/checkout-page.png) |

## How to Run the Application
To run the mobile application on your device or emulator, follow these steps:

1. Clone the GitHub repository to your local machine: git clone https://github.com/Manzi-Cedrick/stunning-tribble-mobile-test.git

2. Navigate to the project directory.

3. Install the project dependencies: npm install or use yarn

4. Start the development server: npm run dev or use yarn run dev

5. Follow the instructions provided by Expo in the terminal to launch the app on your device or emulator.

6. Test the application's root navigation as described in the "Testing Root Navigation" section of this README.

## Conclusion
Mobile testing is essential to ensure the functionality and user experience of your mobile application. By following the steps outlined in this README, you can effectively test root navigation and other critical aspects of your app. Document any issues encountered during testing and collaborate with your development team to resolve them.

For additional testing scenarios and advanced techniques, consult the app's documentation or your QA team.

Happy testing!
