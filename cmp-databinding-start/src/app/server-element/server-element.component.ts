import {
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {Server} from './server';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'] // ,
  // encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit,
      OnChanges,
      DoCheck,
      AfterContentInit,
      AfterContentChecked,
      AfterViewInit,
      AfterViewChecked,
      OnDestroy {

  // {type: string, name: string, content: string};
  // @Input() element: Server;

  @Input() name: string;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {

    console.log('constructor called');

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);

  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('paragraph ist hier noch nicht da ' + this.paragraph.nativeElement.textContent);

  }

  ngDoCheck() {
    console.log('ngDoCheck called');

  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log('paragraph ist hier schon da ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');

  }


  ngAfterViewInit() {
    console.log('ngAfterViewInit called');

  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');

  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');

  }


}
