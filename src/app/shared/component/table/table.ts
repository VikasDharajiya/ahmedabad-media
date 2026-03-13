import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

export interface TableColumn {
  field: string;
  header: string;
  type?: 'badge' | 'text' | 'image' | 'date' | 'actions';
  badgeMap?: Record<string, string>;
  dateFormat?: string;
  headerClass?: string;
  bodyClass?: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, MenuModule],
  templateUrl: './table.html',
})
export class Table<T = any> implements OnChanges {
  @Input() columns: TableColumn[] = [];
  @Input() data: T[] = [];
  @Input() menuItems: MenuItem[] = [];
  @Input() rows = 10;
  @Input() showPaginator = true;
  @Input() showMenu = true;

  @Output() menuAction = new EventEmitter<{ item: MenuItem; rowData: T }>();
  @Output() menuOpen = new EventEmitter<T>();
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  first = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.first = 0;
    }
  }

  get totalRecords(): number {
    return this.data.length;
  }

  get lastRecord(): number {
    return Math.min(this.first + this.rows, this.totalRecords);
  }

  get pagedData(): T[] {
    return this.data.slice(this.first, this.first + this.rows);
  }

  prevPage(): void {
    if (this.first > 0) this.first -= this.rows;
  }

  nextPage(): void {
    if (this.lastRecord < this.totalRecords) this.first += this.rows;
  }

  onMenuOpen(rowData: T): void {
    this.menuOpen.emit(rowData);
  }

  onMenuAction(item: MenuItem, rowData: T): void {
    this.menuAction.emit({ item, rowData });
  }

  getBadgeClass(value: unknown, badgeMap?: Record<string, string>): string {
    return badgeMap?.[String(value)] ?? 'border-gray-200 bg-gray-100 text-gray-700';
  }
}
