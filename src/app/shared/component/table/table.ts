import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

export interface TableColumn {
  field: string;
  header: string;
  type?: 'badge' | 'text';
  badgeMap?: Record<string, string>;
  headerClass?: string;
  bodyClass?: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, MenuModule],
  templateUrl: './table.html',
})
export class Table implements OnChanges {
  @Input() columns: TableColumn[] = [];
  @Input() data: Record<string, unknown>[] = [];
  @Input() menuItems: MenuItem[] = [];
  @Input() rows = 10;

  @Output() menuAction = new EventEmitter<{ item: MenuItem; rowData: Record<string, unknown> }>();
  @Output() menuOpen = new EventEmitter<Record<string, unknown>>();

  first = 0;

  ngOnChanges(changes: SimpleChanges): void {
    // Reset to page 1 whenever data changes (e.g. after filter applied by parent)
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

  get pagedData(): Record<string, unknown>[] {
    return this.data.slice(this.first, this.first + this.rows);
  }

  prevPage(): void {
    if (this.first > 0) this.first -= this.rows;
  }

  nextPage(): void {
    if (this.lastRecord < this.totalRecords) this.first += this.rows;
  }

  onMenuOpen(rowData: Record<string, unknown>): void {
    this.menuOpen.emit(rowData);
  }

  onMenuAction(item: MenuItem, rowData: Record<string, unknown>): void {
    this.menuAction.emit({ item, rowData });
  }

  getBadgeClass(value: unknown, badgeMap?: Record<string, string>): string {
    return badgeMap?.[String(value)] ?? 'border-gray-200 bg-gray-100 text-gray-700';
  }
}
