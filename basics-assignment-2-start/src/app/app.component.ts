import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username = '';

  isButtonEnabled() {
    return (this.username !== '');
  }

  /*onValueChanged(event) {
    this.buttonEnabled = (event.target.value !== '');
  }*/

  onButtonClicked() {
    this.username = '';
  }
}
