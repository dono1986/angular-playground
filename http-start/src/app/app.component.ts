import { Component } from '@angular/core';
import { ServerService } from './servers.service';
import {Observable} from 'rxjs';
import {Response} from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service: ServerService) {

  }

  serversAsync = this.service.getServersTransformed();

  servers = [];

  onSave() {
    this.service.storeServers(this.servers).subscribe((res) => {
      console.log(res);
    }, (error) => { console.log(error);
    });
  }

  onGetServers() {
    this.service.getServersTransformed().subscribe((data: any[]) => {
        this.servers = data;
    }, (error) => {
      console.log(error);
    });
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }
}
