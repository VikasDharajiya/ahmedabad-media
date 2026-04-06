import { Component, inject } from '@angular/core';
import { PageHeader } from '@shared/components/page-header/page-header';
import { Table, TableColumn } from '@shared/components/table/table';
import { TableFilterComponent } from '@shared/components/table-filter/table-filter';
import { TodayNewsItem } from '../../models/today-news.model';
import { TodayNewsService } from '../../services/today-news.service';
import { NewsItem } from '@shared/models/news.model';
import {
  TodayNewsForm,
  AddTodayNewsDialog,
} from '../../components/add-today-news-dialog/add-today-news-dialog';

type NewsPicker = Pick<NewsItem, 'id' | 'title' | 'thumbnail'>;

@Component({
  selector: 'app-today-news',
  imports: [Table, PageHeader, TableFilterComponent, AddTodayNewsDialog],
  templateUrl: './today-news.html',
  styleUrl: './today-news.css',
})
export class TodayNews {
  private todayNewsService = inject(TodayNewsService);

  todayNewsData: TodayNewsItem[] = [];
  newsList: NewsPicker[] = [];
  showDialog = false;

  ngOnInit() {
    this.todayNewsService.getAll().subscribe((res) => {
      this.todayNewsData = res;
    });

    this.todayNewsService.getNewsPicker().subscribe((res) => {
      this.newsList = res;
    });
  }

  // ── Columns ───────────────────────────────────────────────────────────────

  todayNewscol: TableColumn[] = [
    { field: 'id', header: 'No.', headerClass: 'w-14' },
    {
      field: 'title',
      header: 'News',
      headerClass: 'min-w-[300px]',
      bodyClass: 'font-medium text-gray-700',
    },
    { field: 'sequence', header: 'Sequence', headerClass: 'min-w-[120px]' },
    { field: 'actions', header: 'Actions', type: 'actions', headerClass: 'w-32' },
  ];

  // ── Table actions ─────────────────────────────────────────────────────────

  onEdit(row: TodayNewsItem) {
    console.log('Edit', row);
  }

  onDelete(row: TodayNewsItem) {
    this.todayNewsService.delete(row.id).subscribe(() => {
      this.todayNewsData = this.todayNewsData.filter((n) => n.id !== row.id);
    });
  }

  // ── Dialog ────────────────────────────────────────────────────────────────

  openDialog() {
    this.showDialog = true;
  }

  onDialogSave(form: TodayNewsForm) {
    this.todayNewsService.create(form).subscribe(() => {
      this.showDialog = false;
    });
  }
}
