# Object-oriented programming to Functional programming

## Introduction

Last session we looked at Object-oriented programming (OOP) and we walked through the following concepts:

- What is OOP?
- 4 Pillars of OOP
- What are examples of “good” Classes and how do they differ from “Bad” Classes?

While OOP offers a lot of benefits, it's valuable to explore another paradigm known as functional programming (FP). OOP emphasizes encapsulation, inheritance, polymorphism, and abstraction, however, FP takes a different approach with its own set of pros and cons.

One notable advantage of functional programming (FP) is its emphasis on immutability and pure functions, which plays a crucial role in a concept called 'tree-shaking.' Tree-shaking is a technique used during the build process to eliminate unused code or dead code from the final bundle.

In the context of JavaScript, which is often used for web development, tree-shaking helps optimize the size of the JavaScript bundle that gets sent to the browser. Tree-shaking results in a smaller and more efficient production bundle, leading to faster load times for web applications. It also aligns well with the functional programming paradigm because it encourages developers to write small, focused, and pure functions, which are easier to analyze and optimize.

## Your custom library

The shift from Object-Oriented Programming (OOP) to Functional Programming (FP) in the JavaScript ecosystem is an interesting one. For many years, OOP was the dominant paradigm in JavaScript, and as a result, most libraries and frameworks were built with OOP principles in mind. However, there has been a gradual transition towards FP, and this transition has important implications for modern JavaScript development.

You are tasked with creating two distinct versions of a library, each adhering to a different programming paradigm: Object-Oriented Programming (OOP) and Functional Programming (FP). We have written a scaffold for you to get started but your objective is to write the one library with OOP principles and the other with FP principles.

Take a look at the `/oop` folder for the scaffold for the Object-Oriented Programming (OOP) paradigm and `/tree-shaking` for the scaffold for the Functional Programming (FP) paradigm.

### Your task

You will be tasked with creating a versatile library that interacts with a workspace environment, catering to various functionalities and interactions. This library will empower developers with a set of methods, each serving a specific purpose within the workspace context.

**Library Methods:**

1. **`greetNewUser(userId: string): string`**

   - This method extends a warm welcome to new users when they join the workspace. It accepts a user ID as input and returns a greeting message as a string.

2. **`sayHello(): string`**

   - A simple method that responds with the string "hello" when called. It provides a straightforward greeting for any application or interaction.

3. **`generateRandomNumber(min: number, max: number): number`**

   - For applications that require randomness, this method generates and returns a random number within a specified range (between `min` and `max`).

4. **`selectRandomUser(userIds: string[]): string`**

   - This utility method takes in a list of user IDs and selects a random user from the provided list. It returns the ID of the chosen user, enabling random user selection for various workspace interactions.

5. **`sayGoodbye(): string`**

   - Similar to the `sayHello()` method, this function returns the string "goodbye" when called. It serves as a simple farewell message.

6. **`connectToSlackAPI(apiKey: string): void`**

   - A crucial method that establishes a connection to Slack's external API. It accepts an API key as input, enabling the library to interact with Slack's features and data.

7. **`initializeApp(config: object): boolean`**

   - This method initializes the application with a provided configuration object. It prepares the library to operate within the specific context of the workspace, allowing developers to customize its behaviour. For this function, a properly initialized app returns a `true` boolean and a incorrectly initialized app returns a `false` boolean. This function is not needed for OOP -- use the constructor method instead.

8. **`disconnectApp(): void`**
   - The final method in the library, `disconnectApp()`, serves to gracefully terminate the library's connection to the workspace. It ensures that the application releases resources and cleanly exits its interactions with the workspace environment.

Here is the same for the config object in the `initializeApp` function.

```ts
type config = {
  token: string;
  signingSecret: string;
  socketMode: boolean;
  appToken: string;
  port: number;
};
```
