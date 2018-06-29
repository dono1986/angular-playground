import { AuthService } from './../auth-service';
import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
@Injectable()
export class HomeComponent {

  constructor(private router: Router, private authService: AuthService) { }

  onLoadServer(id: number) {
    this.router.navigate(['/servers', id, 'edit'],
                        {queryParams: {allowEdit: '1'},
                        fragment: 'loading'});
  }

  onLogin() {
    this.authService.login();
  }

  onLogout() {
    this.authService.logout();
  }
}
