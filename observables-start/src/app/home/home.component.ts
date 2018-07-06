import { Component, OnInit, OnDestroy } from '@angular/core';
import {Observable, Observer, Subscription, interval} from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor() { }

  numbersObservableSub: Subscription;
  myObservableSub: Subscription;


  ngOnDestroy() {
    this.numbersObservableSub.unsubscribe();
    this.myObservableSub.unsubscribe();
  }

  ngOnInit() {
    const myNumbers = interval(1000).pipe(map(
      (data: number) => {
        return data * 2;
      }
    ));

    this.numbersObservableSub = myNumbers.subscribe(
                  (number: number) => { console.log(number); },
                  (error) => {},
                  () => {}
    );



    const myObservable = Observable.create((observer: Observer<string>) => {

      setTimeout(() => {
        observer.next('first pacakge'); // Pusht den nächsten Inhalt
      }, 2000);
      setTimeout(() => {
        observer.next('second pacakge'); // Pusht den nächsten Inhalt
      }, 4000);
      setTimeout(() => {
        // Fail!
        // observer.error('this does not work');
        observer.complete();

      }, 5000);
      setTimeout(() => {
        observer.next('third pacakge'); // Pusht den nächsten Inhalt
      }, 6000);
    });

    this.myObservableSub = myObservable.subscribe(
      (data: string) => {console.log(data); } ,
      (error) => {console.log(error); },
      () => {console.log('Completed!'); }
    );
  }



}
