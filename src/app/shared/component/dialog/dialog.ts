import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { Button } from '../button/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.html',
  imports: [DialogModule, Button, FormsModule],
})
export class Dialog {
  @Input() visible = false;
  @Input() title = '';

  @Input() showFooter = true;
  @Input() saveLabel = 'Save';
  @Input() cancelLabel = 'Cancel';

  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() save = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  close() {
    this.visible = false;
    this.visibleChange.emit(false);
    this.cancel.emit();
  }

  onSave() {
    this.save.emit();
  }
}
