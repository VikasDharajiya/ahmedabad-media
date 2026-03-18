import { Component } from '@angular/core';
import { IconField } from '@shared/component/icon-field/icon-field';
import { PageHeader } from '@shared/component/page-header/page-header';
import { Table, TableColumn } from '@shared/component/table/table';
import { Button } from '@shared/component/button/button';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { Dialog } from '@shared/component/dialog/dialog';

type NewsItem = {
  id: number;
  title: string;
  thumbnail: string;
};
@Component({
  selector: 'app-today-news',
  imports: [IconField, Table, FormsModule, DialogModule, SelectModule, Dialog],
  templateUrl: './today-news.html',
  styleUrl: './today-news.css',
})
export class TodayNews {
  dropdownOpen = false;

  selectNews(item: NewsItem) {
    this.form.news = item;
    this.dropdownOpen = false;
  }

  newsList: NewsItem[] = [
    {
      id: 1,
      title: 'Breaking News 1',
      thumbnail: 'https://picsum.photos/200',
    },
    {
      id: 2,
      title: 'Breaking News 2',
      thumbnail: 'https://picsum.photos/300',
    },
    {
      id: 3,
      title: 'Breaking News 3',
      thumbnail: 'https://picsum.photos/100',
    },
    {
      id: 4,
      title: 'Breaking News 4',
      thumbnail: 'https://picsum.photos/400',
    },
    {
      id: 5,
      title: 'Breaking News 5',
      thumbnail: 'https://picsum.photos/500',
    },
    {
      id: 6,
      title: 'Breaking News 6',
      thumbnail: 'https://picsum.photos/600',
    },
  ];

  todayNewscol: TableColumn[] = [
    {
      field: 'id',
      header: 'No.',
      headerClass: 'w-14',
    },

    {
      field: 'news',
      header: 'News',
      headerClass: 'min-w-[300px]',
      bodyClass: 'font-medium text-gray-700',
    },

    {
      field: 'sequence',
      header: 'Sequence',
      headerClass: 'min-w-[120px]',
    },

    {
      field: 'actions',
      header: 'Actions',
      type: 'actions',
      headerClass: 'w-32',
    },
  ];

  todayNewsData = [
    {
      id: 1,
      news: 'Petrol prices increased today',
      sequence: 1,
    },
    {
      id: 2,
      news: 'Heavy rainfall expected in Gujarat',
      sequence: 2,
    },
    {
      id: 3,
      news: 'Stock market closed higher today',
      sequence: 3,
    },
    {
      id: 4,
      news: 'India wins cricket series',
      sequence: 4,
    },
    {
      id: 5,
      news: 'New metro line inaugurated',
      sequence: 5,
    },
    {
      id: 6,
      news: 'Gold prices drop slightly',
      sequence: 6,
    },
    {
      id: 7,
      news: 'Tech companies announce layoffs',
      sequence: 7,
    },
    {
      id: 8,
      news: 'Festival celebrations begin nationwide',
      sequence: 8,
    },
    {
      id: 9,
      news: 'Government announces new policy',
      sequence: 9,
    },
    {
      id: 10,
      news: 'Airline launches new routes',
      sequence: 10,
    },
  ];

  onEdit(row: any) {
    console.log('Edit', row);
  }

  onDelete(row: any) {
    console.log('Delete', row);
  }

  // dialog

  showDialog = false;

  openDialog() {
    this.showDialog = true;
    this.dropdownOpen = false;
  }

  closeDialog() {
    this.showDialog = false;
  }

  form: {
    news: NewsItem | null;
    sequence: number | null;
  } = {
    news: null,
    sequence: null,
  };

  addTodayNews() {
    if (!this.form.news || !this.form.sequence) return;

    this.todayNewsData.push({
      id: this.todayNewsData.length + 1,
      news: this.form.news.title,
      sequence: this.form.sequence,
    });

    this.dropdownOpen = false;
    this.closeDialog();

    this.form = {
      news: null,
      sequence: null,
    };
  }
}
