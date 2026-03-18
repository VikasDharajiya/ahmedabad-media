import { Component } from '@angular/core';
import { TableColumn, Table } from '@shared/component/table/table';
import { TableFilter, TableFilterComponent } from '@shared/component/table-filter/table-filter';
import { MenuItem } from 'primeng/api';
import { NewsDetail, NewsItem } from '@shared/models/news.model';
import { PageHeader } from '@shared/component/page-header/page-header';
import { CommonModule } from '@angular/common';
import { NewsService } from 'app/core/services/news.service';

@Component({
  selector: 'app-live-news',
  imports: [CommonModule, PageHeader, TableFilterComponent, Table],
  templateUrl: './live-news.html',
  styleUrl: './live-news.css',
})
export class LiveNews {
  // data from service
  constructor(private newsService: NewsService) {}

  allNews: NewsItem[] = [];
  filteredNews: NewsItem[] = [];

  ngOnInit() {
    this.newsService.getAllNews().subscribe((res) => {
      this.allNews = res;
      this.filteredNews = res;
    });
  }

  // ── Columns ───────────────────────────────────────────────────────────────
  showPreviewModal = false;
  selectedNews: NewsDetail | null = null;
  columns: TableColumn[] = [
    { field: 'id', header: 'ID', headerClass: 'w-14 px-4' },
    { field: 'thumbnail', type: 'image', header: 'Thumbnail', headerClass: 'w-16' },
    {
      field: 'title',
      header: 'Title',
      headerClass: 'min-w-[250px] truncate',
      bodyClass: 'font-medium text-gray-700 ',
    },
    { field: 'category', header: 'Category', headerClass: 'w-32' },
    {
      field: 'status',
      header: 'Status',
      headerClass: 'w-28',
      type: 'badge',
      badgeMap: {
        Published: 'border-green-200 bg-green-100 text-green-700',
        // Draft: 'border-yellow-200 bg-yellow-100 text-yellow-700',
        Scheduled: 'border-blue-200 bg-blue-100 text-blue-700',
      },
    },
    {
      field: 'publishedDate',
      header: 'Published Date',
      type: 'date',
      dateFormat: 'dd/MM/yyyy hh:mm a',
      headerClass: 'w-40',
      bodyClass: 'lg:truncate',
    },
    { field: 'author', header: 'Author', headerClass: 'w-32' },
    { field: 'likes', header: 'Likes', headerClass: 'w-20', bodyClass: 'text-center' },
    { field: 'shares', header: 'Shares', headerClass: 'w-20', bodyClass: 'text-center' },
    { field: 'comments', header: 'Comments', headerClass: 'w-20', bodyClass: 'text-center' },

    { field: 'views', header: 'Views', headerClass: 'w-20 text-right', bodyClass: 'text-right' },
  ];

  // ── Filters ───────────────────────────────────────────────────────────────

  filters: TableFilter[] = [
    {
      key: 'category',
      label: 'Category',
      options: ['Crime', 'City', 'State', 'Business'],
    },

    {
      key: 'status',
      label: 'Status',
      options: ['Published', 'Scheduled'],
      type: 'select',
    },
    {
      key: 'author',
      label: 'Author',
      options: ['Admin Desk', 'City Desk', 'Editorial Team'],
      type: 'select',
    },
    {
      key: 'publishedDate',
      label: 'Date',
      type: 'date-range',
    },
  ];

  // ── Menu ──────────────────────────────────────────────────────────────────

  menuItems: MenuItem[] = [
    { label: 'View', icon: 'pi pi-eye', id: 'view' },
    { label: 'Edit', icon: 'pi pi-pencil', id: 'edit' },
    { label: 'Delete', icon: 'pi pi-trash', id: 'delete' },
    { label: 'Add News', icon: 'pi pi-plus-circle', id: 'add-news' },
    { label: 'Comment View', icon: 'pi pi-comments', id: 'comment-view' },
  ];

  activeRow: NewsItem | null = null;

  // ── Filter logic ──────────────────────────────────────────────────────────

  applyFilters(event: {
    searchText: string;
    selectedFilters: Record<string, string>;
    dateFrom: Date | null;
    dateTo: Date | null;
  }): void {
    const search = event.searchText.toLowerCase();

    const from = event.dateFrom;
    const to = event.dateTo ? new Date(event.dateTo) : null;

    if (to) {
      to.setHours(23, 59, 59, 999);
    }

    this.filteredNews = this.allNews.filter((row) => {
      const matchesSearch = this.columns.some((col) =>
        String(row[col.field as keyof NewsItem] ?? '')
          .toLowerCase()
          .includes(search),
      );

      const matchesFilters = this.filters.every((f) => {
        if (f.type === 'date-range') return true;

        const selected = event.selectedFilters[f.key];

        return !selected || String(row[f.key as keyof NewsItem] ?? '') === selected;
      });

      let matchesDate = true;

      if (from || to) {
        const rowDate = new Date(row.publishedDate);

        if (from && rowDate < from) matchesDate = false;
        if (to && rowDate > to) matchesDate = false;
      }

      return matchesSearch && matchesFilters && matchesDate;
    });
  }

  setActiveRow(row: NewsItem): void {
    this.activeRow = row;
  }

  handleMenuAction(event: any) {
    switch (event.item.id) {
      case 'view':
        this.openPreview(event.rowData);
        break;
      case 'edit':
        console.log('Edit', event.rowData);
        break;

      case 'delete':
        console.log('Delete', event.rowData);
        break;

      case 'comment-view':
        this.showCommentDialog = true;
        break;
    }
  }

  openPreview(news: NewsItem) {
    this.newsService.getNewsById(news.id).subscribe((res) => {
      this.selectedNews = res;
      this.showPreviewModal = true;
    });
  }

  closePreview() {
    this.showPreviewModal = false;
    this.selectedNews = null;
  }

  //
  showCommentDialog = false;

  comments = [
    { no: 1, comment: 'Great news coverage!', username: 'Rahul' },
    { no: 2, comment: 'Very informative article.', username: 'Priya' },
    { no: 3, comment: 'Waiting for more updates.', username: 'Amit' },
    { no: 4, comment: 'Great news coverage!', username: 'Rahul' },
    { no: 5, comment: 'Very informative article.', username: 'Priya' },
    { no: 6, comment: 'Waiting for more updates.', username: 'Amit' },
    { no: 7, comment: 'Great news coverage!', username: 'Rahul' },
    { no: 8, comment: 'Very informative article.', username: 'Priya' },
    { no: 9, comment: 'Waiting for more updates.', username: 'Amit' },
    { no: 10, comment: 'Great news coverage!', username: 'Rahul' },
    { no: 11, comment: 'Very informative article.', username: 'Priya' },
    { no: 12, comment: 'Waiting for more updates.', username: 'Amit' },
  ];
}
