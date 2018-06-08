import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Server} from './server';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'] // ,
  // encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {

  @Input() element: Server; // {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}
