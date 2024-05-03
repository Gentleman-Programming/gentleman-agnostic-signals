import { describe, it, expect } from "bun:test";
import { SignalsState, initSignalsManager } from "../src";

describe("should", () => {
  const StateProperties = {
    COUNT: "count",
    TEST: "test",
  } as const;

  type DefaultState = SignalsState<{
    [StateProperties.COUNT]: number;
    [StateProperties.TEST]: string;
  }>;

  const defaultState: SignalsState<DefaultState> = {
    // Define your state properties here with their default values
    count: 0,
    test: "",
  };

  const signalsManager = initSignalsManager(defaultState);

  it("should create a new instance of SignalsManager", () => {
    expect(signalsManager).toBeDefined();
  });

  it("should throw an error if the instance already exists", () => {
    try {
      expect(initSignalsManager({ count: 0 })).toThrow(
        "SignalsManager already initialized",
      );
    } catch (error) {}
  });

  it("should have been initialized with the default state", () => {
    const countSignal = signalsManager.getSignal(StateProperties.COUNT);
    expect(countSignal.value).toBe(0);
  });

  it("should update the signal value", () => {
    signalsManager.updateSignal(StateProperties.COUNT, 1);
    const countSignal = signalsManager.getSignal(StateProperties.COUNT);
    expect(countSignal.value).toBe(1);
  });
});
