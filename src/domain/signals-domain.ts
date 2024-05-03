import { signal, Signal } from "@preact/signals-core";

export type DomainSignal<T> = Signal<T>;

export class SignalsDomain<T extends { [K in keyof T]: any }> {
  createSignal(payload: T[keyof T]) {
    return signal(payload);
  }

  updateSignal<U extends T[keyof T]>(signal: DomainSignal<U>, payload: U) {
    signal.value = payload;
  }
}
