import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { IconField } from '../icon-field/icon-field';

export interface TableFilter {
  key: string;
  label: string;
  options?: string[];
  type?: 'select' | 'date-range';
}

@Component({
  selector: 'app-table-filter',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, IconField],
  templateUrl: './table-filter.html',
})
export class TableFilterComponent implements OnInit, OnChanges {
  @Input() filters: TableFilter[] = [];
  @Input() searchPlaceholder = 'Search…';
  @Input() showDateRange = false;
  @Input() fromLabel = 'From';
  @Input() toLabel = 'To';

  /** Emits whenever search text or any dropdown changes */
  @Output() filterChange = new EventEmitter<{
    searchText: string;
    selectedFilters: Record<string, string>;
    dateFrom: Date | null;
    dateTo: Date | null;
  }>();
  @Output() reset = new EventEmitter<void>();

  dateFrom: Date | null = null;
  dateTo: Date | null = null;
  dateRange: Date[] = [];

  searchText = '';
  selectedFilters: Record<string, string> = {};
  filtersOpen = false;

  toggleFilters(): void {
    this.filtersOpen = !this.filtersOpen;
  }

  private initFilters() {
    this.filters.forEach((f) => {
      if (!(f.key in this.selectedFilters)) {
        this.selectedFilters[f.key] = '';
      }
    });
  }

  ngOnInit() {
    this.initFilters();
  }

  ngOnChanges() {
    this.initFilters();
  }

  onFilterChange(): void {
    this.filterChange.emit({
      searchText: this.searchText,
      selectedFilters: { ...this.selectedFilters },
      dateFrom: this.dateFrom,
      dateTo: this.dateTo,
    });
  }

  onReset(): void {
    this.searchText = '';
    this.dateFrom = null;
    this.dateTo = null;

    this.filters.forEach((f) => (this.selectedFilters[f.key] = ''));

    this.reset.emit();

    this.filterChange.emit({
      searchText: '',
      selectedFilters: { ...this.selectedFilters },
      dateFrom: null,
      dateTo: null,
    });
  }
}
