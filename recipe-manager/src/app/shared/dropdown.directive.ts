import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  open = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {  }

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') click(eventData: Event) {

    this.isOpen = !this.isOpen;

    /*
    if (!this.el.nativeElement.classList.contains('open')) {
      this.renderer.addClass(this.el.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'open');
    }
    */
    // if (!this.open) {
    // this.open = !this.open;

  }

}
