import {Component, Input, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';
import {Server} from '../server-element/server';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<Server>();
  @Output() serverBlueprintCreated = new EventEmitter<Server>();

  @ViewChild('newServerContentInputField') serverContentInputField: ElementRef;

  newServerName = '';
  newServerContent = '';

  // @Input() serverElements = [];

  constructor() { }

  ngOnInit() {
  }



  onAddServer() {

    this.serverCreated.emit(new Server('server', this.newServerName, this.serverContentInputField.nativeElement.value));

    /*this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });*/
  }

  onAddBlueprint() {
    this.serverBlueprintCreated.emit(new Server('blueprint', this.newServerName, this.newServerContent));

    /*this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });*/


  }



}
