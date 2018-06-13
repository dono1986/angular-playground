import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  @Input() evenNumber: number;

  name: string;

  constructor() { }

  ngOnInit() {

    setInterval( () => {this.name;} , 1000 );
    this.name = 'blubb';

  }

}
