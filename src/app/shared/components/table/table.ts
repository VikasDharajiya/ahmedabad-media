import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  HostListener,
} from '@angular/core';
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

export type TableRow = Record<string, any>;
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, MenuModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table<T extends TableRow = TableRow> implements OnChanges {
  @Input() columns: TableColumn[] = [];
  @Input() data: T[] = [];
  @Input() menuItems: MenuItem[] = [];
  @Input() rows = 10;
  @Input() enableRows = false;
  @Input() rowsPerPageOptions: number[] = [5, 10, 15];
  @Input() showPaginator = true;
  @Input() showMenu = true;
  @Input() showAddButton = false;
  @Input() addButtonIcon = 'pi pi-plus';
  @Input() mobileView: 'table' | 'accordion' = 'table';
  @Input() mobileTitleField: string = 'title';
  @Input() mobileActions: {
    label: string;
    icon?: string;
    id: string;
  }[] = [];

  @Input() showMobileAddButton = false;
  @Input() mobileHiddenFields: string[] = [];

  @Output() mobileAddClick = new EventEmitter<any>();

  @Output() menuAction = new EventEmitter<{ item: MenuItem; rowData: T }>();
  @Output() menuOpen = new EventEmitter<T>();
  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() addClick = new EventEmitter<any>();

  first = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.first = 0;
      this.openedRow = null;
    }
  }

  get totalPages(): number {
    return Math.ceil(this.totalRecords / this.rows);
  }

  get currentPage(): number {
    return Math.floor(this.first / this.rows) + 1;
  }
  changeRows(event: Event) {
    const value = Number((event.target as HTMLSelectElement).value);
    this.rows = value;
    this.first = 0;
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

  openedRow: T | null = null;
  toggleRow(row: T) {
    this.openedRow = this.openedRow === row ? null : row;
  }

  isMobile = window.innerWidth < 768;

  // show accordian in mobile only else table (in news pages)
  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 768;
  }
}
