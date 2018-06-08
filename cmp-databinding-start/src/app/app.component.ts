import { Component } from '@angular/core';
import {Server} from './server-element/server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [new Server('server', 'Testserver', 'Just a test')];


  onServerElementAdded(serverElement: Server) {
    this.serverElements.push(serverElement);
  }


}
