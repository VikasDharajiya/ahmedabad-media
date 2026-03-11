import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { PageHeader } from '../../shared/component/page-header/page-header';
import { TableFilterComponent } from '../../shared/component/table-filter/table-filter';
import { Table } from '../../shared/component/table/table';
import type { TableFilter } from '../../shared/component/table-filter/table-filter';
import type { TableColumn } from '../../shared/component/table/table';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, PageHeader, TableFilterComponent, Table],
  templateUrl: './news.html',
})
export class News {
  // ── Columns ───────────────────────────────────────────────────────────────

  columns: TableColumn[] = [
    { field: 'id', header: 'ID', headerClass: 'w-14 px-4' },
    {
      field: 'title',
      header: 'Title',
      headerClass: 'w-[300px]',
      bodyClass: 'font-medium text-gray-700',
    },
    { field: 'category', header: 'Category', headerClass: 'w-32' },
    { field: 'type', header: 'Type', headerClass: 'w-32' },
    {
      field: 'status',
      header: 'Status',
      headerClass: 'w-28',
      type: 'badge',
      badgeMap: {
        Published: 'border-green-200 bg-green-100 text-green-700',
        Draft: 'border-yellow-200 bg-yellow-100 text-yellow-700',
        Scheduled: 'border-blue-200 bg-blue-100 text-blue-700',
      },
    },
    { field: 'publishedDate', header: 'Published Date', headerClass: 'w-40' },
    { field: 'author', header: 'Author', headerClass: 'w-32' },
    { field: 'views', header: 'Views', headerClass: 'w-20', bodyClass: 'text-right' },
  ];

  // ── Filters ───────────────────────────────────────────────────────────────

  filters: TableFilter[] = [
    {
      key: 'category',
      label: 'Category',
      options: ['Crime', 'City', 'State', 'Business'],
    },
    {
      key: 'type',
      label: 'Type',
      options: ['Normal', 'Live', 'Sponsored'],
    },
    {
      key: 'status',
      label: 'Status',
      options: ['Draft', 'Published', 'Scheduled'],
    },
    {
      key: 'author',
      label: 'Author',
      options: ['Admin Desk', 'City Desk', 'Editorial Team'],
    },
  ];

  // ── Menu ──────────────────────────────────────────────────────────────────

  menuItems: MenuItem[] = [
    { label: 'Edit', icon: 'pi pi-pencil', id: 'edit' },
    { label: 'Delete', icon: 'pi pi-trash', id: 'delete' },
  ];

  activeRow: Record<string, unknown> | null = null;

  // ── Data ──────────────────────────────────────────────────────────────────

  private allNews: Record<string, unknown>[] = [
    {
      id: 101,
      title:
        'સાબરમતી રિવરફ્રન્ટ પર ઇન્ટરનેશનલ કાઈટ ફેસ્ટિવલ 2026: હેરિટેજ હવેલી ને પોળના સ્થાપત્યની થીમ, 1000 પતંગબાજો પેચ લડાવશે; નાઈટ ફ્લાઈંગ અને કિંજલ દવે લોકોને ડોલાવશે',
      category: 'Crime',
      type: 'Normal',
      status: 'Published',
      publishedDate: '26/01/2026 09:32 AM',
      author: 'Admin Desk',
      views: 1245,
    },
    {
      id: 102,
      title: 'Live Flood Coverage',
      category: 'City',
      type: 'Live News',
      status: 'Draft',
      publishedDate: '25 Feb 2026',
      author: 'News Reporter',
      views: 5320,
    },
    {
      id: 103,
      title: 'Election Campaign Begins',
      category: 'State',
      type: 'Sponsored',
      status: 'Scheduled',
      publishedDate: '24 Feb 2026',
      author: 'City Desk',
      views: 876,
    },
    {
      id: 104,
      title: 'અમદાવાદમાં ભારે વરસાદ: અનેક વિસ્તારોમાં પાણી ભરાયા',
      category: 'શહેર સમાચાર',
      type: 'Breaking',
      status: 'Published',
      publishedDate: '25/02/2026 07:45 PM',
      author: 'જય પટેલ',
      views: 2980,
    },
    {
      id: 105,
      title: 'જીવાદોરી કાપતી ચાઇનીઝ દોરી: આ તસવીરો તમને ડરાવવા માટે પણ નહીં બચાવવા માટે છે',
      category: 'State',
      type: 'Sponsored',
      status: 'Scheduled',
      publishedDate: '28 Feb 2026',
      author: 'City Desk',
      views: 876,
    },
    {
      id: 106,
      title: 'બ્રાઝિલની ફિરકીએ મચાવી ધૂમ, યુવાનોમાં Zen-Proનો ટ્રેન્ડ',
      category: 'City',
      type: 'Live News',
      status: 'Draft',
      publishedDate: '25 Feb 2026',
      author: 'મીત શાહ',
      views: 5320,
    },
    {
      id: 107,
      title:
        'સાબરમતી રિવરફ્રન્ટ પર ઇન્ટરનેશનલ કાઈટ ફેસ્ટિવલ 2026: હેરિટેજ હવેલી ને પોળના સ્થાપત્યની થીમ, 1000 પતંગબાજો પેચ લડાવશે; નાઈટ ફ્લાઈંગ અને કિંજલ દવે લોકોને ડોલાવશે',
      category: 'Politics',
      type: 'Breaking',
      status: 'Published',
      publishedDate: '26 Feb 2026',
      author: 'Editorial Team',
      views: 4521,
    },
    {
      id: 108,
      title: 'ગુજરાતમાં પેટ્રોલના ભાવમાં વધારો',
      category: 'રાજ્ય સમાચાર',
      type: 'Normal',
      status: 'Draft',
      publishedDate: '3 કલાક પહેલા',
      author: 'હિતેશ ત્રિવેદી',
      views: 1900,
    },
    {
      id: 109,
      title: 'Tech Startups Growing Rapidly in Ahmedabad',
      category: 'Business',
      type: 'Featured',
      status: 'Scheduled',
      publishedDate: '01 Mar 2026',
      author: 'Startup Desk',
      views: 2100,
    },
    {
      id: 110,
      title: 'ગરબા મહોત્સવ 2026 માટે તૈયારીઓ શરૂ',
      category: 'મનોરંજન',
      type: 'Normal',
      status: 'Published',
      publishedDate: '27/02/2026 06:20 PM',
      author: 'રવિ જોષી',
      views: 3400,
    },
    {
      id: 111,
      title: 'Stock Market Today: Sensex Closes in Red',
      category: 'Finance',
      type: 'Breaking',
      status: 'Draft',
      publishedDate: '26 Feb 2026',
      author: 'Market Analyst',
      views: 1789,
    },
    {
      id: 112,
      title: 'અમદાવાદ મેટ્રોનો નવો રૂટ જાહેર',
      category: 'શહેર સમાચાર',
      type: 'Normal',
      status: 'Scheduled',
      publishedDate: '02 Mar 2026',
      author: 'પ્રિયા દેસાઈ',
      views: 2675,
    },
  ];

  filteredNews = [...this.allNews];

  // ── Filter logic ──────────────────────────────────────────────────────────

  applyFilters(event: { searchText: string; selectedFilters: Record<string, string> }): void {
    const search = event.searchText.toLowerCase();

    this.filteredNews = this.allNews.filter((row) => {
      const matchesSearch = this.columns.some((col) =>
        String(row[col.field] ?? '')
          .toLowerCase()
          .includes(search),
      );

      const matchesFilters = this.filters.every((f) => {
        const selected = event.selectedFilters[f.key];
        return !selected || String(row[f.key] ?? '') === selected;
      });

      return matchesSearch && matchesFilters;
    });
  }

  setActiveRow(row: Record<string, unknown>): void {
    this.activeRow = row;
  }

  handleMenuAction(event: any) {
    switch (event.item.id) {
      case 'edit':
        console.log('Edit', event.rowData);
        break;

      case 'delete':
        console.log('Delete', event.rowData);
        break;
    }
  }
}
