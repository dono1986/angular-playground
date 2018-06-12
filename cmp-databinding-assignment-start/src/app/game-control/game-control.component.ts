import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() numberIncremented = new EventEmitter<number>();

  incrementingNumber = 0;

  timer;

  constructor() { }

  ngOnInit() {

  }

  onStart() {
    this.timer = setInterval(
        () => {
          // this verweist nicht auf die Klasse in diesem Kontext
          // this.numberIncremented.emit(this.incrementingNumber++);

          this.numberIncremented.emit(this.incrementingNumber++);
          }
      , 1000);

  }

  onStop() {

    clearInterval(this.timer);

  }

  onSendValue() {
    this.numberIncremented.emit(this.incrementingNumber++);
  }


}

