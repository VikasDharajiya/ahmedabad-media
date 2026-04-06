import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dialog } from '@shared/components/dialog/dialog';
import { NewsComment } from '@shared/models/news.model';

@Component({
  selector: 'app-news-comment-dialog',
  standalone: true,
  imports: [CommonModule, Dialog],
  templateUrl: './news-comment-dialog.html',
})
export class NewsCommentDialog {
  @Input() visible = false;
  @Input() comments: NewsComment[] = [];
  @Output() visibleChange = new EventEmitter<boolean>();
}
