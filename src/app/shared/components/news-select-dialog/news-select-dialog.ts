import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dialog } from '@shared/components/dialog/dialog';
import { NewsItem } from '@shared/models/news.model';

@Component({
  selector: 'app-news-select-dialog',
  standalone: true,
  imports: [CommonModule, Dialog],
  templateUrl: './news-select-dialog.html',
})
export class NewsSelectDialog {
  @Input() visible = false;
  @Input() allNews: NewsItem[] = [];
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() save = new EventEmitter<NewsItem[]>();
  @Output() cancel = new EventEmitter<void>();

  selectedItems: NewsItem[] = [];

  onCheck(news: NewsItem, checked: boolean) {
    if (checked) {
      this.selectedItems.push(news);
    } else {
      this.selectedItems.splice(this.selectedItems.indexOf(news), 1);
    }
  }

  onSave() {
    this.save.emit(this.selectedItems);
    this.reset();
  }

  onCancel() {
    this.cancel.emit();
    this.reset();
  }

  private reset() {
    this.selectedItems = [];
    this.visible = false;
    this.visibleChange.emit(false);
  }
}
