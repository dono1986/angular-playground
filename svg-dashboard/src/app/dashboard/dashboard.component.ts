import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';
import { IMqttMessage, MqttService } from 'ngx-mqtt';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  kmh: number;

  private speedSubscription: Subscription;

  constructor(private mqttService: MqttService) {
    this.speedSubscription = this.mqttService
      .observe('car/Speed')
      .subscribe((message: IMqttMessage) => {
        this.kmh = parseInt(message.payload.toString(), 0);
      });


  }

  ngOnInit() {
    /* Mockup without MQTT connection */
    /*this.speedSubscription = Observable.interval(100).subscribe((kmh: number) => {
        this.kmh = kmh;
    });*/
  }

  ngOnDestroy() {
    this.speedSubscription.unsubscribe();
  }
}
