import { Component } from '@angular/core';
import { NewsItem } from '@shared/models/table.model';
import { MenuItem } from 'primeng/api';
import { TableFilter, TableFilterComponent } from '@shared/component/table-filter/table-filter';
import { TableColumn, Table } from '@shared/component/table/table';
import { PageHeader } from '@shared/component/page-header/page-header';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sponsored-news',
  imports: [CommonModule, Table, TableFilterComponent, PageHeader],
  templateUrl: './sponsored-news.html',
  styleUrl: './sponsored-news.css',
})
export class SponsoredNews {
  // ── Columns ───────────────────────────────────────────────────────────────
  showPreviewModal = false;
  selectedNews: NewsItem | null = null;

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
    { label: 'Comment View', icon: 'pi pi-comments', id: 'comment-view' },
    { label: 'Select Other News', icon: 'pi pi-check-square', id: 'select-other' },
  ];

  activeRow: NewsItem | null = null;

  // ── Data ──────────────────────────────────────────────────────────────────

  allNews: NewsItem[] = [
    {
      id: 101,
      thumbnail: 'assets/images/logo.png',
      title:
        'સાબરમતી રિવરફ્રન્ટ પર ઇન્ટરનેશનલ કાઈટ ફેસ્ટિવલ 2026: હેરિટેજ હવેલી ને પોળના સ્થાપત્યની થીમ, 1000 પતંગબાજો પેચ લડાવશે; નાઈટ ફ્લાઈંગ અને કિંજલ દવે લોકોને ડોલાવશે',
      category: 'Crime',
      type: 'Normal',
      status: 'Published',
      publishedDate: '2026-01-26T09:32:00',
      author: 'Admin Desk',
      likes: 120,
      shares: 45,
      comments: 312,
      views: 1245,
    },
    {
      id: 102,
      thumbnail: 'https://picsum.photos/200',

      title: 'Live Flood Coverage',
      category: 'City',
      type: 'Live News',
      status: 'Published',
      publishedDate: '2026-02-25T10:00:00',
      author: 'News Reporter',
      likes: 120,
      shares: 45,
      comments: 422,

      views: 5320,
    },
    {
      id: 103,
      thumbnail: 'https://picsum.photos/100',

      title: 'Election Campaign Begins',
      category: 'State',
      type: 'Sponsored',
      status: 'Scheduled',
      publishedDate: '2026-02-24T09:00:00',
      author: 'City Desk',
      likes: 120,
      shares: 45,
      comments: 53,

      views: 876,
    },
    {
      id: 104,
      thumbnail: 'https://picsum.photos/50',

      title: 'અમદાવાદમાં ભારે વરસાદ: અનેક વિસ્તારોમાં પાણી ભરાયા',
      category: 'શહેર સમાચાર',
      type: 'Breaking',
      status: 'Published',
      publishedDate: '2026-02-25T19:45:00',
      author: 'જય પટેલ',
      likes: 10,
      shares: 415,
      comments: 753,

      views: 2980,
    },
    {
      id: 105,
      thumbnail: 'https://picsum.photos/600',

      title: 'જીવાદોરી કાપતી ચાઇનીઝ દોરી: આ તસવીરો તમને ડરાવવા માટે પણ નહીં બચાવવા માટે છે',
      category: 'State',
      type: 'Sponsored',
      status: 'Scheduled',
      publishedDate: '2026-02-28T12:00:00',
      author: 'City Desk',
      likes: 12110,
      shares: 325,
      comments: 8621,

      views: 876,
    },
    {
      id: 106,
      thumbnail: 'https://picsum.photos/300',

      title: 'બ્રાઝિલની ફિરકીએ મચાવી ધૂમ, યુવાનોમાં Zen-Proનો ટ્રેન્ડ',
      category: 'City',
      type: 'Live News',
      status: 'Published',
      publishedDate: '2026-02-25T11:00:00',
      author: 'મીત શાહ',
      likes: 1120,
      shares: 415,
      comments: 633,

      views: 5320,
    },
    {
      id: 107,
      thumbnail: 'assets/images/NewsThumb/news1.avif',

      title:
        'સાબરમતી રિવરફ્રન્ટ પર ઇન્ટરનેશનલ કાઈટ ફેસ્ટિવલ 2026: હેરિટેજ હવેલી ને પોળના સ્થાપત્યની થીમ, 1000 પતંગબાજો પેચ લડાવશે; નાઈટ ફ્લાઈંગ અને કિંજલ દવે લોકોને ડોલાવશે',
      category: 'Politics',
      type: 'Breaking',
      status: 'Published',
      publishedDate: '2026-02-26T15:00:00',
      author: 'Editorial Team',
      views: 4543221,
      shares: 3445,
      comments: 474,
      likes: 43120,
    },
    {
      id: 108,
      thumbnail: 'assets/images/NewsThumb/n2.avif',

      title: 'ગુજરાતમાં પેટ્રોલના ભાવમાં વધારો',
      category: 'રાજ્ય સમાચાર',
      type: 'Normal',
      status: 'Scheduled',
      publishedDate: '2026-01-26T09:32:00',
      author: 'હિતેશ ત્રિવેદી',
      likes: 12310,
      shares: 41325,
      comments: 3535,

      views: 19100,
    },
    {
      id: 109,
      thumbnail: 'assets/images/NewsThumb/n3.avif',

      title: 'Tech Startups Growing Rapidly in Ahmedabad',
      category: 'Business',
      type: 'Featured',
      status: 'Scheduled',
      publishedDate: '2026-01-26T09:32:00',
      author: 'Startup Desk',
      likes: 1210,
      shares: 32145,
      comments: 3432,

      views: 213200,
    },
    {
      id: 110,
      thumbnail: 'assets/images/NewsThumb/n4.avif',

      title: 'ગરબા મહોત્સવ 2026 માટે તૈયારીઓ શરૂ',
      category: 'મનોરંજન',
      type: 'Normal',
      status: 'Published',
      publishedDate: '2026-03-01T10:00:00',
      author: 'રવિ જોષી',
      likes: 1210,
      shares: 415,
      comments: 3421,

      views: 34100,
    },
    {
      id: 111,
      thumbnail: 'assets/images/NewsThumb/n6.avif',

      title: 'Stock Market Today: Sensex Closes in Red',
      category: 'Finance',
      type: 'Breaking',
      status: 'Scheduled',
      publishedDate: '2026-02-27T18:20:00',
      author: 'Market Analyst',
      likes: 12320,
      shares: 4215,
      comments: 64335,

      views: 17891,
    },
    {
      id: 112,
      thumbnail: 'assets/images/NewsThumb/n5.avif',

      title: 'અમદાવાદ મેટ્રોનો નવો રૂટ જાહેર',
      category: 'શહેર સમાચાર',
      type: 'Normal',
      status: 'Scheduled',
      publishedDate: '2026-02-26T13:00:00',
      author: 'પ્રિયા દેસાઈ',
      likes: 11220,
      shares: 4115,
      comments: 536351,

      views: 211675,
    },
  ];

  filteredNews: NewsItem[] = [...this.allNews];

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
  showCommentDialog = false;
  showSelectOtherDialog = false;

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
      case 'select-other':
        this.showSelectOtherDialog = true;
        break;
    }
  }

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

  selectedNew: any[] = [];

  addSelectedNews() {
    console.log('Selected News:', this.selectedNews);
    this.showSelectOtherDialog = false;
  }
  openPreview(news: NewsItem) {
    this.selectedNews = news;
    this.showPreviewModal = true;
  }

  closePreview() {
    this.showPreviewModal = false;
    this.selectedNews = null;
  }
}
