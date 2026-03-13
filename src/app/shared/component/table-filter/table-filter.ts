import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

export interface TableFilter {
  key: string;
  label: string;
  options?: string[];
  type?: 'select' | 'date-range';
}

@Component({
  selector: 'app-table-filter',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule],
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
    dateFrom: string;
    dateTo: string;
  }>();
  @Output() reset = new EventEmitter<void>();

  dateFrom = '';
  dateTo = '';
  dateRange: Date[] = [];

  searchText = '';
  selectedFilters: Record<string, string> = {};

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['filters']) {
      this.filters.forEach((f) => {
        if (!(f.key in this.selectedFilters)) {
          this.selectedFilters[f.key] = '';
        }
      });
    }
  }

  ngOnInit(): void {
    this.filters.forEach((f) => (this.selectedFilters[f.key] = ''));
  }

  // onFilterChange(): void {
  //   this.filterChange.emit({
  //     searchText: this.searchText,
  //     selectedFilters: { ...this.selectedFilters },
  //     dateFrom: this.dateFrom,
  //     dateTo: this.dateTo,
  //   });
  // }

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
    this.dateFrom = '';
    this.dateTo = '';
    this.dateRange = [];

    this.filters.forEach((f) => (this.selectedFilters[f.key] = ''));

    this.reset.emit();

    this.filterChange.emit({
      searchText: '',
      selectedFilters: { ...this.selectedFilters },
      dateFrom: '',
      dateTo: '',
    });
  }
}
