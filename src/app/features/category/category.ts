import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { PageHeader } from '@shared/component/page-header/page-header';
import { TableFilterComponent } from '@shared/component/table-filter/table-filter';
import { Table } from '@shared/component/table/table';
import type { TableFilter } from '@shared/component/table-filter/table-filter';
import type { TableColumn } from '@shared/component/table/table';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, PageHeader, TableFilterComponent, Table],
  templateUrl: './category.html',
})
export class Category {
  // ── Columns ───────────────────────────────────────────────────────────────

  columns: TableColumn[] = [
    { field: 'id', header: 'ID', headerClass: 'w-14 px-4' },
    {
      field: 'categoryName',
      header: 'Category Name',
      headerClass: 'w-[300px]',
      bodyClass: 'font-medium text-gray-700',
    },
    { field: 'sequence', header: 'Sequence', headerClass: 'w-32' },
    { field: 'newsCount', header: 'News Count', headerClass: 'w-32' },
    {
      field: 'status',
      header: 'Status',
      headerClass: 'w-28',
      type: 'badge',
      badgeMap: {
        Active: 'border-green-200 bg-green-100 text-green-700',
        Inactive: 'border-gray-200  bg-gray-100  text-gray-700',
      },
    },
  ];

  // ── Filters ───────────────────────────────────────────────────────────────

  filters: TableFilter[] = [{ key: 'status', label: 'Status', options: ['Active', 'Inactive'] }];

  // ── Menu ──────────────────────────────────────────────────────────────────

  menuItems: MenuItem[] = [
    { label: 'Edit', icon: 'pi pi-pencil' },
    { label: 'Delete', icon: 'pi pi-trash' },
  ];

  activeRow: Record<string, unknown> | null = null;

  // ── Data ──────────────────────────────────────────────────────────────────

  private allCategories: Record<string, unknown>[] = [
    {
      id: 101,
      categoryName: 'Election Campaign Begins',
      sequence: 1,
      newsCount: 1324,
      status: 'Active',
    },
    { id: 102, categoryName: 'શહેર સમાચાર', sequence: 2, newsCount: 234, status: 'Inactive' },
    { id: 103, categoryName: 'Tech Updates', sequence: 3, newsCount: 543, status: 'Active' },
    { id: 104, categoryName: 'Sports News', sequence: 4, newsCount: 876, status: 'Inactive' },
    { id: 105, categoryName: 'Politics', sequence: 5, newsCount: 321, status: 'Active' },
    { id: 106, categoryName: 'Business', sequence: 6, newsCount: 654, status: 'Active' },
    { id: 107, categoryName: 'World News', sequence: 7, newsCount: 777, status: 'Active' },
    { id: 108, categoryName: 'Education', sequence: 8, newsCount: 111, status: 'Inactive' },
    { id: 109, categoryName: 'Health', sequence: 9, newsCount: 4231, status: 'Active' },
    { id: 110, categoryName: 'Health', sequence: 10, newsCount: 543, status: 'Active' },
    { id: 111, categoryName: 'Health', sequence: 11, newsCount: 999, status: 'Active' },
    { id: 112, categoryName: 'Entertainment', sequence: 12, newsCount: 456, status: 'Inactive' },
  ];

  filteredCategories = [...this.allCategories];

  // ── Filter logic ──────────────────────────────────────────────────────────

  applyFilters(event: { searchText: string; selectedFilters: Record<string, string> }): void {
    const search = event.searchText.toLowerCase();

    this.filteredCategories = this.allCategories.filter((row) => {
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

  handleMenuAction(event: { item: MenuItem; rowData: Record<string, unknown> }): void {
    console.log('Action:', event.item.label, event.rowData);
  }
}
