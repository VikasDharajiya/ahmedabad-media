import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Dialog } from '@shared/components/dialog/dialog';
import { TextEditor } from '@shared/components/text-editor/text-editor';

export interface LiveFeedForm {
  date: string;
  time: string;
  details: string;
}

@Component({
  selector: 'app-live-feed-dialog',
  standalone: true,
  imports: [CommonModule, Dialog, TextEditor, ReactiveFormsModule, FormsModule],
  templateUrl: './live-feed-dialog.html',
})
export class LiveFeedDialog {
  @ViewChild('feedDetailsEditor') feedDetailsEditor?: TextEditor;

  @Input() visible = false;
  @Input() title = 'Add Live News Feed';
  @Input() saveLabel = 'Save Feed';
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() save = new EventEmitter<LiveFeedForm>();
  @Output() cancel = new EventEmitter<void>();

  editorReset = false;

  feedForm: LiveFeedForm = { date: '', time: '', details: '' };

  onSave() {
    this.save.emit({ ...this.feedForm });
    this.reset();
  }

  onCancel() {
    this.cancel.emit();
    this.reset();
  }

  private reset() {
    this.feedForm = { date: '', time: '', details: '' };
    this.editorReset = true;
    setTimeout(() => (this.editorReset = false));
    this.visible = false;
    this.visibleChange.emit(false);
  }
}
