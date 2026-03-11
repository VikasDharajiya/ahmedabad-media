import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { TextEditor } from '../../../../../shared/component/text-editor/text-editor';
import { Button } from '../../../../../shared/component/button/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.html',
  imports: [DialogModule, TextEditor, Button, FormsModule],
})
export class Dialog {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() save = new EventEmitter<any>();

  @ViewChild('feedDetailsEditor') feedDetailsEditor?: TextEditor;

  feedForm = {
    date: '',
    time: '',
    details: '',
  };

  close() {
    this.visible = false;
    this.visibleChange.emit(false);
  }

  saveFeed() {
    this.save.emit(this.feedForm);
    this.close();
  }
}
