import { Component, inject } from '@angular/core';
import { Table, TableColumn } from '@shared/components/table/table';
import { PageHeader } from '@shared/components/page-header/page-header';
import { todayData } from '../../models/today-data.model';
import { TodayDataService } from '../../services/today-data.service';
import { ThumbnailDialog } from '../../components/thumbnail-dialog/thumbnail-dialog';

@Component({
  selector: 'app-today-data',
  imports: [Table, PageHeader, ThumbnailDialog],
  templateUrl: './today-data.html',
  styleUrl: './today-data.css',
})
export class TodayData {
  private todayDataService = inject(TodayDataService);

  data: todayData[] = [];
  showThumbnailDialog = false;

  ngOnInit() {
    this.todayDataService.getAll().subscribe((res) => {
      this.data = res;
    });
  }

  columns: TableColumn[] = [
    {
      field: 'date',
      header: 'Date',
      type: 'date',
      dateFormat: 'dd/MM/yyyy',
      headerClass: 'min-w-[140px]',
    },
    { field: 'sunrise', header: 'Sunrise', headerClass: 'min-w-[120px]' },
    { field: 'sunset', header: 'Sunset', headerClass: 'min-w-[120px]' },
    {
      field: 'bank',
      header: 'Bank',
      type: 'badge',
      badgeMap: {
        On: 'border-green-200 bg-green-100 text-green-700',
        Off: 'border-gray-200  bg-gray-100  text-gray-700',
      },
    },
    { field: 'zodiacSign', header: 'Zodiac Sign', headerClass: 'min-w-[140px]' },
    { field: 'season', header: 'Season', headerClass: 'min-w-[140px]' },
    { field: 'petrol', header: 'Petrol (₹)', headerClass: 'min-w-[120px]' },
    { field: 'diesel', header: 'Diesel (₹)', headerClass: 'min-w-[120px]' },
    { field: 'cng', header: 'CNG (₹)', headerClass: 'min-w-[120px]' },
    { field: 'lpg', header: 'LPG (₹)', headerClass: 'min-w-[120px]' },
  ];

  openThumbnailDialog() {
    this.showThumbnailDialog = true;
  }

  onThumbnailSave(data: { title: string; description: string; image: File | null }) {
    this.todayDataService.saveThumbnail(data).subscribe(() => {
      console.log('Thumbnail saved');
    });
  }
}
