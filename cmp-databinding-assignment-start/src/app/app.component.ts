import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  onNumberIncremented(value: number) {
    if (value % 2 === 0) {
      this.evenNumbers.push(value);
    } else {
      this.oddNumbers.push(value);
    }
  }
}
