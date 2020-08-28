import { Directive, HostListener, HostBinding, Output, EventEmitter, OnChanges, SimpleChanges, Input } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnChanges {

  @Input() value;
  @HostBinding('class.focused') isFocused: boolean;

  @Output() changed = new EventEmitter();
  constructor() { }

  @HostListener('focus')
  onFocus(e) {
    this.isFocused = true;
  }

  @HostListener('blur')
  onBlur(e) {
    this.isFocused = false;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes.value.previousValue !== undefined &&
      changes.value.previousValue !== changes.value.currentValue ) {
        this.changed.emit(true);

      }
  }
}
