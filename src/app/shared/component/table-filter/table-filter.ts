import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

export interface TableFilter {
  key: string;
  label: string;
  options: string[];
}

@Component({
  selector: 'app-table-filter',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule],
  templateUrl: './table-filter.html',
})
export class TableFilterComponent implements OnInit {
  @Input() filters: TableFilter[] = [];
  @Input() searchPlaceholder = 'Search…';

  /** Emits whenever search text or any dropdown changes */
  @Output() filterChange = new EventEmitter<{
    searchText: string;
    selectedFilters: Record<string, string>;
  }>();

  /** Emits when Reset is clicked */
  @Output() reset = new EventEmitter<void>();

  searchText = '';
  selectedFilters: Record<string, string> = {};

  ngOnInit(): void {
    this.filters.forEach((f) => (this.selectedFilters[f.key] = ''));
  }

  onFilterChange(): void {
    this.filterChange.emit({
      searchText: this.searchText,
      selectedFilters: { ...this.selectedFilters },
    });
  }

  onReset(): void {
    this.searchText = '';
    this.filters.forEach((f) => (this.selectedFilters[f.key] = ''));
    this.reset.emit();
    this.filterChange.emit({ searchText: '', selectedFilters: {} });
  }
}
