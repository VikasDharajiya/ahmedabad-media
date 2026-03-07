import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

interface CategoryItem {
  id: number;
  categoryName: string;
  newsCount: number;
  status: 'Active' | 'Inactive';
}
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [TableModule, CommonModule, RouterModule, MenuModule, ButtonModule, FormsModule],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {
  category: CategoryItem[] = [
    { id: 101, categoryName: 'Election Campaign Begins', newsCount: 1324, status: 'Active' },
    { id: 102, categoryName: 'શહેર સમાચાર', newsCount: 234, status: 'Inactive' },
    { id: 103, categoryName: 'Tech Updates', newsCount: 543, status: 'Active' },
    { id: 104, categoryName: 'Sports News', newsCount: 876, status: 'Inactive' },
    { id: 105, categoryName: 'Politics', newsCount: 321, status: 'Active' },
    { id: 106, categoryName: 'Business', newsCount: 654, status: 'Inactive' },
    { id: 107, categoryName: 'World News', newsCount: 777, status: 'Active' },
    { id: 108, categoryName: 'Education', newsCount: 111, status: 'Inactive' },
    { id: 109, categoryName: 'Health', newsCount: 999, status: 'Active' },
    { id: 110, categoryName: 'Health', newsCount: 999, status: 'Active' },
    { id: 111, categoryName: 'Health', newsCount: 999, status: 'Active' },
    { id: 112, categoryName: 'Entertainment', newsCount: 456, status: 'Inactive' },
  ];

  filteredCategory: CategoryItem[] = [...this.category];
  filters = [
    {
      key: 'status',
      label: 'Status',
      options: ['Active', 'Inactive'],
    },
  ];

  selectedFilters: any = {
    status: '',
  };
  searchText: string = '';

  resetFilters() {
    this.selectedFilters = {
      status: '',
    };
    this.searchText = '';
    this.filteredCategory = [...this.category];
    this.totalRecords = this.category.length;
  }

  applyFilters() {
    this.filteredCategory = this.category.filter((item) => {
      const statusMatch =
        !this.selectedFilters.status || item.status === this.selectedFilters.status;

      const searchMatch =
        !this.searchText || item.categoryName.toLowerCase().includes(this.searchText.toLowerCase());

      return statusMatch && searchMatch;
    });

    this.totalRecords = this.filteredCategory.length;
    this.first = 0;
  }
  rows: number = 10;
  first: number = 0;

  totalRecords: number = this.category.length;

  nextPage() {
    if (this.first + this.rows < this.totalRecords) {
      this.first += this.rows;
    }
  }

  prevPage() {
    if (this.first > 0) {
      this.first -= this.rows;
    }
  }

  getLastRecord(): number {
    return Math.min(this.first + this.rows, this.totalRecords);
  }

  // menu
  menuItems: MenuItem[] = [
    {
      label: 'Edit Category',
      icon: 'pi pi-pencil',
    },
    {
      label: 'Delete Category',
      icon: 'pi pi-trash',
    },
  ];
}
