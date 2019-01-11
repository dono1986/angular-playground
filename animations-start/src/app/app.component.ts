import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal',
            style({'background-color': 'red',
                    transform: 'translateX(0)'})
            ),
      state('highlighted',
            style({'background-color': 'blue',
            transform: 'translateX(100px)'})
            ),
      transition('normal <=> highlighted', animate(300))
      // transition('highlighted => normal', animate(800)),
    ]),
    trigger('wildState', [
      state('normal',
            style({'background-color': 'red',
            transform: 'translateX(0px) scale(1)'})
            ),
      state('highlighted',
            style({'background-color': 'blue',
            transform: 'translateX(100px)scale(1)'})
            ),
      state('shrunken',
            style({'background-color': 'blue',
            transform: 'translateX(0px) scale(0.5)'})
            ),
      transition('highlighted => normal', animate(700)),
      transition('normal => highlighted', animate(400)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange'
        }),
        animate(1000, style({
          'border-radius': '50px'
        })),
        animate(500)
      ])
    ])
  ]
})
export class AppComponent {
  state = 'normal';
  wildState = 'normal';

  list = ['Milk', 'Sugar', 'Bread'];

    onAdd(item) {
      this.list.push(item);
    }

    onDelete(item) {
        this.list.splice(this.list.indexOf(item), 1);
    }

    onAnimate() {
      this.state = (this.state === 'normal' ? 'highlighted' : 'normal');
      this.wildState = (this.wildState === 'normal' ? 'highlighted' : 'normal');

    }

    onShrink() {
      this.wildState = (this.wildState === 'normal' ? 'shrunken' : 'normal');
    }
}
