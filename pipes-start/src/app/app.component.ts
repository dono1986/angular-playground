import { Component, OnInit } from '@angular/core';
import { Subject, Observable, AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  valueSubject = new Subject<number>();

  /*valueSubject = new Observable<number>((observer) => {
    let i = 0;
    setInterval(() => {
      observer.next(i++);
    },2000)
  });*/

  ngOnInit(): void {
    setTimeout(() => {
      this.valueSubject.next(10);
    },2000);
    
  }

  filteredStatus: string;

  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    },2000);
  });

  servers = [
    {
      instanceType: 'medium rare mit soße',
      name: 'Production Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'large',
      name: 'User Database',
      status: 'stable',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Development Server',
      status: 'offline',
      started: new Date(15, 1, 2017)
    },
    {
      instanceType: 'small',
      name: 'Testing Environment Server',
      status: 'stable',
      started: new Date(15, 1, 2017)
    }
  ];
  getStatusClasses(server: {instanceType: string, name: string, status: string, started: Date}) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }
}
