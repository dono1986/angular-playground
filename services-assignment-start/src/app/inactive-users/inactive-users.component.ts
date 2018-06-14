import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersService} from '../shared/users.service';
import {CounterService} from '../shared/counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})

export class InactiveUsersComponent implements OnInit {

  inactiveUsers = [];

  amountActivations = 0;

  constructor(private usersService: UsersService, private counterService: CounterService) { }

  ngOnInit(): void {
    this.inactiveUsers = this.usersService.inactiveUsers;
    this.counterService.inactiveToActiveCounterIncreased.subscribe((amount) => this.amountActivations = amount );

  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }
}
