import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Dialog } from '@shared/components/dialog/dialog';
import { NewsItem } from '@shared/models/news.model';

type NewsPicker = Pick<NewsItem, 'id' | 'title' | 'thumbnail'>;

export interface TodayNewsForm {
  title: string;
  sequence: number;
}

@Component({
  selector: 'app-add-today-news-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule, Dialog],
  templateUrl: './add-today-news-dialog.html',
})
export class AddTodayNewsDialog {
  @Input() visible = false;
  @Input() newsList: NewsPicker[] = [];
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() save = new EventEmitter<TodayNewsForm>();

  dropdownOpen = false;
  searchText = '';
  filteredNewsList: NewsPicker[] = [];

  form: { news: NewsPicker | null; sequence: number | null } = {
    news: null,
    sequence: null,
  };

  // keep filteredNewsList in sync when newsList input changes
  ngOnChanges() {
    this.filteredNewsList = this.newsList;
  }

  selectNews(item: NewsPicker) {
    this.form.news = item;
    this.dropdownOpen = false;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    if (this.dropdownOpen) {
      this.searchText = '';
      this.filteredNewsList = this.newsList;
    }
  }

  filterNews() {
    const search = this.searchText.toLowerCase();
    this.filteredNewsList = this.newsList.filter((item) =>
      item.title.toLowerCase().includes(search),
    );
  }

  onSave() {
    if (!this.form.news || !this.form.sequence) return;

    this.save.emit({
      title: this.form.news.title,
      sequence: this.form.sequence,
    });

    this.reset();
  }

  onCancel() {
    this.reset();
  }

  private reset() {
    this.form = { news: null, sequence: null };
    this.dropdownOpen = false;
    this.searchText = '';
    this.visible = false;
    this.visibleChange.emit(false);
  }
}
