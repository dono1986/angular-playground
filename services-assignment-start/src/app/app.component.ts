import {Component, OnInit} from '@angular/core';
import {UsersService} from './shared/users.service';
import {CounterService} from './shared/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent {

}

