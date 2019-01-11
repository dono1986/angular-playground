import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    // Animation von Listenelementen beim Hinzufügen und Entfernen
    trigger('list1', [
      state('*', style({opacity: 1, transform: 'translateX(0px)'})),
      transition('void => *', [style({opacity: 0, transform: 'translateX(-100px)'}), animate(400)]),
      transition('* => void', animate(300, style({opacity: 0, transform: 'translateX(-100px)'})))
    ]),

    // Animation von Listenelementen beim Hinzufügen und Entfernen (mit Keyframes)
    trigger('list2', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})), 
      transition('void => *', [
        // Styleveränderungen während der Transition, also in diesem Fall innerhalb einer Sekunde
        animate(1000, keyframes([
          style({transform: 'translateX(-100px)', opacity: 0, offset: 0}),
          style({transform: 'translateX(-50px)', opacity:0.5, offset: 0.3}),
          style({transform: 'translateX(-20px)', opacity:1, offset: 0.8}),
          style({opacity: 1, offset: 1, transform: 'translateX(0px)'})
        ]))
      ]
      ),
      transition('* => void', animate(300, style({opacity: 0, transform: 'translateX(-100px)'})))
    ]),

    // Animation von Listenelementen beim Hinzufügen und Entfernen mit Grouping
    trigger('list3', [
      state('*', style({opacity: 1, transform: 'translateX(0px)'})),
      transition( 'void => *', 
                  [ 
                    style({
                      opacity: 0, 
                      transform: 'translateX(-100px)'}), 
                    animate(400)
                  ]),
      transition( '* => void', 
                  [
                    // Gruppierung der beiden Animationen, damit diese gleichzeitig ausgeführt werden
                    group([
                      animate(  300, 
                        style({
                          'color': 'red'}
                        )
                      ),
                      animate(  300, 
                              style({
                                opacity: 0, 
                                transform: 'translateX(-100px)'}
                              )
                      )
                    ])
                  ])
    ]),

    // Animation eines Div-Containers mit zwei States
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
    ]),

    // Animation eines Div-Containers mit drei States und Wildcard-Operator und Zwischenschritten
    trigger('wildState', [
      state('normal',
            style({'background-color': 'red',
            transform: 'translateX(0px) scale(1)'})
            ),
      state('highlighted',
            style({'background-color': 'blue',
            transform: 'translateX(100px) scale(1)'})
            ),
      state('shrunken',
            style({'background-color': 'blue',
            transform: 'translateX(0px) scale(0.5)'})
            ),
      transition('highlighted => normal', animate(700)),
      transition('normal => highlighted', animate(400)),
      transition('shrunken <=> *', [
        // Setze Farbe auf Orange, ...
        animate(1000, style({
          'background-color': 'orange'
        })),
        // Verändere den Rahmenradius
        animate(1000, style({
          'border-radius': '50px'
        })),
        // ... und animiere über eine halbe Sekunde bis zum Endstatus
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

    onAnimationStarted(event) {
      console.log(event);
    }


    onAnimationEnded(event) {
      console.log(event);
    }


    onShrink() {
      this.wildState = (this.wildState === 'normal' ? 'shrunken' : 'normal');
    }
}
