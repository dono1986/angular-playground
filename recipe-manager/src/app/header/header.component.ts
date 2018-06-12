import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() linkClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeLinkClicked() {
    this.linkClicked.emit('recipe');
  }

  onShoppingListClicked() {
    this.linkClicked.emit('shoppinglist');
  }
}
