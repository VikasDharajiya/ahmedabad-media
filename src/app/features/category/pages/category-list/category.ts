import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { PageHeader } from '@shared/components/page-header/page-header';
import { TableFilterComponent } from '@shared/components/table-filter/table-filter';
import { Table } from '@shared/components/table/table';
import type { TableFilter } from '@shared/components/table-filter/table-filter';
import type { TableColumn } from '@shared/components/table/table';
import { CategoryItem } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, PageHeader, TableFilterComponent, Table],
  templateUrl: './category.html',
})
export class Category {
  private categoryService = inject(CategoryService);

  private allCategories: CategoryItem[] = [];
  filteredCategories: CategoryItem[] = [];

  ngOnInit() {
    this.categoryService.getAll().subscribe((res) => {
      this.allCategories = res;
      this.filteredCategories = res;
    });
  }

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
    { label: 'Edit', icon: 'pi pi-pencil', id: 'edit' },
    { label: 'Delete', icon: 'pi pi-trash', id: 'delete' },
  ];

  activeRow: CategoryItem | null = null;

  // ── Filter logic ──────────────────────────────────────────────────────────

  applyFilters(event: { searchText: string; selectedFilters: Record<string, string> }): void {
    const search = event.searchText.toLowerCase();

    this.filteredCategories = this.allCategories.filter((row) => {
      const matchesSearch = this.columns.some((col) =>
        String(row[col.field as keyof CategoryItem] ?? '')
          .toLowerCase()
          .includes(search),
      );

      const matchesFilters = this.filters.every((f) => {
        const selected = event.selectedFilters[f.key];
        return !selected || String(row[f.key as keyof CategoryItem] ?? '') === selected;
      });

      return matchesSearch && matchesFilters;
    });
  }

  setActiveRow(row: CategoryItem): void {
    this.activeRow = row;
  }

  handleMenuAction(event: { item: MenuItem; rowData: CategoryItem }): void {
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
