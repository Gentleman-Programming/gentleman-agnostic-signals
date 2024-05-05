import { SignalsManager } from "./signals_manager";

let signalsManager: SignalsManager<any>;
export type SignalsState<T = {}> = { [K in keyof T]: T[K] };

export function initSignalsManager<T extends SignalsState<T>>(
  defaultState: T,
): SignalsManager<T> {
  if (signalsManager) {
    throw new Error("SignalsManager already initialized");
  }

  signalsManager = new SignalsManager<T>(defaultState);
  return signalsManager;
}
