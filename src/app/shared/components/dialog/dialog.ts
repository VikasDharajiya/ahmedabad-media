import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { Button } from '../button/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.html',
  imports: [DialogModule, Button, FormsModule, CommonModule],
})
export class Dialog {
  @Input() visible = false;
  @Input() title = '';
  @Input() headerClass = '';
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

  @Input() showFooter = true;
  @Input() saveLabel = 'Save';
  @Input() cancelLabel = 'Cancel';

  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  getSizeClass() {
    switch (this.size) {
      case 'sm':
        return 'w-full max-w-sm sm:max-w-md';
      case 'md':
        return 'w-full max-w-md sm:max-w-lg';
      case 'lg':
        return 'w-full max-w-lg sm:max-w-2xl';
      case 'xl':
        return 'w-full max-w-2xl sm:max-w-4xl';

      default:
        return 'w-full max-w-md sm:max-w-lg';
    }
  }

  close() {
    this.visibleChange.emit(false);
    this.cancel.emit();
  }

  onSave() {
    this.save.emit();
  }
}
