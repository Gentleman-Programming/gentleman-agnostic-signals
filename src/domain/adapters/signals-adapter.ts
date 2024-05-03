import { DomainSignal, SignalsDomain } from "../signals-domain";

export type Signal<T> = DomainSignal<T>;

export class SignalsAdapter<T extends { [K in keyof T]: any }> {
  constructor(private signalsDomain: SignalsDomain<T>) {}

  createSignal(payload: T[keyof T]) {
    return this.signalsDomain.createSignal(payload);
  }

  updateSignal(signal: Signal<T[keyof T]>, payload: T[keyof T]) {
    this.signalsDomain.updateSignal(signal, payload);
  }
}
