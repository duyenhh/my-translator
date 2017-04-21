import { Directive, ElementRef,HostListener, Input } from '@angular/core';
@Directive({ selector: '[favorite-directive]' })
export class FavoriteDirective {
  constructor( private el: ElementRef) {
 //   el.nativeElement.style.backgroundColor = 'yellow';
  }
  @Input('isFavorite') backgroundColor: string;
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#607D8B');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
