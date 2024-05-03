import { describe, it, expect } from "bun:test";
import { initSignalsManager } from "../src";

describe("should", () => {
  const signalsManager = initSignalsManager({ count: 0, test: "" });

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
    const countSignal = signalsManager.getSignal("count");
    expect(countSignal.value).toBe(0);
  });

  it("should update the signal value", () => {
    signalsManager.updateSignal("count", 1);
    const countSignal = signalsManager.getSignal("count");
    expect(countSignal.value).toBe(1);
  });
});
