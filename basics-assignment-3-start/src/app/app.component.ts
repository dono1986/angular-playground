import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showPassword = false;

  log: string[] = [];

  ToggleDetails() {
    this.showPassword = !this.showPassword;

    this.log.push(new Date().toDateString());
  }

}
