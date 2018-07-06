import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'app';

  activeLink = 'recipe';


  constructor() { }

  ngOnInit() {
  }

  onLinkClicked(linkClicked: string) {
    this.activeLink = linkClicked;
  }

}
