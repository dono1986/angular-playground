import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  errorMessage = '';

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.errorMessage = this.activeRoute.snapshot.data['message'];
    this.activeRoute.data.subscribe((data) => {
    this.errorMessage = data['message'];
   });
  }
}
