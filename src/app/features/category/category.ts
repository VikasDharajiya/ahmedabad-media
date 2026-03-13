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
    { id: 101, categoryName: 'Election Campaign Begins', newsCount: 1324, status: 'Active' },
    { id: 102, categoryName: 'શહેર સમાચાર', newsCount: 234, status: 'Inactive' },
    { id: 103, categoryName: 'Tech Updates', newsCount: 543, status: 'Active' },
    { id: 104, categoryName: 'Sports News', newsCount: 876, status: 'Inactive' },
    { id: 105, categoryName: 'Politics', newsCount: 321, status: 'Active' },
    { id: 106, categoryName: 'Business', newsCount: 654, status: 'Active' },
    { id: 107, categoryName: 'World News', newsCount: 777, status: 'Active' },
    { id: 108, categoryName: 'Education', newsCount: 111, status: 'Inactive' },
    { id: 109, categoryName: 'Health', newsCount: 4231, status: 'Active' },
    { id: 110, categoryName: 'Health', newsCount: 543, status: 'Active' },
    { id: 111, categoryName: 'Health', newsCount: 999, status: 'Active' },
    { id: 112, categoryName: 'Entertainment', newsCount: 456, status: 'Inactive' },
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
