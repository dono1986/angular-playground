import { Component, OnInit, Injectable } from '@angular/core';
import {UserService} from './user.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserService, DataService]
})
export class UserComponent implements OnInit {

  user: {name: string};
  isLoggedIn = false;
  data: string;

  constructor(private userService: UserService, private dataService: DataService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();
    this.dataService.getDetails().then((data) => this.data = data);
  }

  logInOrOff() {
    console.log(this.userService.getUserName());
    this.isLoggedIn = !this.isLoggedIn;
  }

}
