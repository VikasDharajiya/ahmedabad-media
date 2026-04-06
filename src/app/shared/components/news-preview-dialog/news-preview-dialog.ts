import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dialog } from '@shared/components/dialog/dialog';
import { NewsDetail } from '@shared/models/news.model';

@Component({
  selector: 'app-news-preview-dialog',
  standalone: true,
  imports: [CommonModule, Dialog],
  templateUrl: './news-preview-dialog.html',
})
export class NewsPreviewDialog {
  @Input() visible = false;
  @Input() news: NewsDetail | null = null;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() cancel = new EventEmitter<void>();

  onCancel() {
    this.visible = false;
    this.visibleChange.emit(false);
    this.cancel.emit();
  }
}
