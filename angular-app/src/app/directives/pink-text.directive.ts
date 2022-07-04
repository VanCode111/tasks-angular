import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appPinkText]',
})
export class PinkTextDirective {
  private isPinkText = false;

  @HostBinding('class.pinkText') get getIsPinkText() {
    return this.isPinkText;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.isPinkText = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.isPinkText = false;
  }

  constructor(private el: ElementRef) {}
}
