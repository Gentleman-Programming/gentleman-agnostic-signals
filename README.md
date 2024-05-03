# Signals Manager

Hey there! 👋 Welcome to the Signals Manager documentation. This README will guide you through using the `SignalsManager` class and its related modules.

## Introduction

The Signals Manager is a powerful utility for managing signals within your application. Signals, also known as events or messages, allow components or modules to communicate and react to changes or actions in a decoupled manner.

## Installation

To use the Signals Manager in your project, follow these steps:

1. Clone or download the repository.
2. Install the required dependencies.
3. Import the necessary modules into your project.

## Usage

### `SignalsManager` Class

The `SignalsManager` class provides methods for creating, retrieving, and updating signals. Here's how you can use it:

```typescript
import { SignalsManager } from "./signals_manager";

// Define your default state
const defaultState = {
  // Define your state properties here with their default values
  count: 0,
};

// Initialize the Signals Manager
const signalsManager = new SignalsManager(defaultState);

// Now you can add, retrieve, and update signals as needed
// But !! only the signals declared at the "defaultState" object, if you try to use any key that is not already provided an error will occur by typescript
```

### Initialization

You can initialize the Signals Manager using the `initSignalsManager` function:

```typescript
import { initSignalsManager } from "./init";

// Define your default state
const defaultState = {
  // Define your state properties here
};

// Initialize the Signals Manager
const signalsManager = initSignalsManager(defaultState);

// Now you can start using the Signals Manager
```

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
