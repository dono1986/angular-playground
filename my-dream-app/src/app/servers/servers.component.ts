import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css'],

})
export class ServersComponent implements OnInit {

  servers = ['Testserver', 'Testserver 2'];


  allowNewServer = false;

  serverCreationStatus = 'No server was created!';

  serverName = '';

  serverCreated = false;

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(event: any) {
    console.log(event);
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created" Name is ' + this.serverName;
    this.serverCreated = true;


  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = event.target.value;
  }

}
