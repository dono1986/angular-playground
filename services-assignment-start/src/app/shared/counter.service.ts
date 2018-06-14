import {EventEmitter, Injectable, Output} from '@angular/core';

export class CounterService {

  activeToInactive = 0;
  inactiveToActive = 0;

  constructor() { }

  @Output() activeToInactiveCounterIncreased = new EventEmitter<number>();
  @Output() inactiveToActiveCounterIncreased = new EventEmitter<number>();

  increaseCounter(action: string) {
    if (action === 'activate') {
      this.inactiveToActive++;
      this.inactiveToActiveCounterIncreased.emit(this.inactiveToActive);
    } else {
      this.activeToInactive++;
      this.activeToInactiveCounterIncreased.emit(this.activeToInactive);
    }
  }
}

