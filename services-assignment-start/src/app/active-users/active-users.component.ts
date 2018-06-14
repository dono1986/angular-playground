import {Component, OnInit} from '@angular/core';
import {CounterService} from '../shared/counter.service';
import {UsersService} from '../shared/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  activeUsers = [];

  amountDeactivations = 0;

  constructor(private usersService: UsersService, private counterService: CounterService) {}

  ngOnInit(): void {
    this.activeUsers = this.usersService.activeUsers;
    this.counterService.activeToInactiveCounterIncreased.subscribe(
      (amount) => this.amountDeactivations = amount );
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }
}
