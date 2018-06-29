import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})



export class PageNotFoundComponent implements OnInit {

  errorMessage = '';

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.errorMessage = this.activeRoute.snapshot.data['message'];


   this.activeRoute.data.subscribe((data) => {
    this.errorMessage = data['message'];

   });
  }
}
