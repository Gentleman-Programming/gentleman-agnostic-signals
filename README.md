# Signals Manager

Hey there! 👋 Welcome to the Signals Manager documentation. This README will guide you through using the `SignalsManager` class and its related modules.

## Introduction

The Signals Manager is a powerful utility for managing signals within your application. Signals, also known as events or messages, allow components or modules to communicate and react to changes or actions in a decoupled manner.

## Installation

To use the Signals Manager in your project, follow these steps:

1. Clone or download the repository.
2. Install the required dependencies.
3. Import the necessary modules into your project.

## How to implement

```typescript
import { initSignalsManager, SignalsState } from "gentleman-agnostic-signals";
// Define the keys you want to use for your signals
const StateProperties = {
  COUNT: "count",
  TEST: "test",
} as const;

// Define the Default Signals State Type you will use
type DefaultState = SignalsState<{
  [StateProperties.COUNT]: number;
  [StateProperties.TEST]: string;
}>;

// Create the default state
const defaultState: SignalsState<DefaultState> = {
  // Define your state properties here with their default values
  count: 0,
  test: "",
};

// Create the Signals Manager instance and enjoy !!
const signalsManager = initSignalsManager(defaultState);

// Now you can add, retrieve, and update signals as needed
// But !! only the signals declared at the "defaultState" object, if you try to use any key that is not already provided an error will occur by typescript
```

## Usage

### Retrieving a Signal

To retrieve a signal from the manager, use the `getSignal` method:

```typescript
const mySignal = signalsManager.getSignal("propertyName");
```

### Updating a Signal

To update a signal in the manager, use the `updateSignal` method:

```typescript
signalsManager.updateSignal("propertyName", payload);
```

## Conclusion

And that's it! You're now ready to start using the Signals Manager in your project. If you have any questions or need further assistance, feel free to reach out. Happy coding! 🚀🔔
