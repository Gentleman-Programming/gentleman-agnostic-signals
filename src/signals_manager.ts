import { Signal, SignalsAdapter, SignalsDomain } from "./domain";

export class SignalsManager<T extends { [K in keyof T]: any }> {
  signalsCollection = new Map<keyof T, Signal<T[keyof T]>>();
  signalsAdapter: SignalsAdapter<T>;

  constructor(defaultState: T) {
    this.signalsAdapter = new SignalsAdapter(new SignalsDomain<T>());

    for (const key in defaultState) {
      if (defaultState.hasOwnProperty(key)) {
        this.signalsCollection.set(
          key,
          this.signalsAdapter.createSignal(defaultState[key]),
        );
      }
    }
  }

  getSignal<U extends T[keyof T]>(key: keyof T): Signal<U> {
    const foundSignal = this.signalsCollection.get(key);

    if (!foundSignal) {
      throw new Error(`Signal ${String(key)} not found`);
    }

    return foundSignal;
  }

  updateSignal(key: keyof T, payload: T[keyof T]) {
    const foundSignal = this.getSignal(key);

    this.signalsAdapter.updateSignal(foundSignal, payload);
  }
}
