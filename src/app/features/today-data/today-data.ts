import { Component } from '@angular/core';
import { Table, TableColumn } from '@shared/component/table/table';
import { PageHeader } from '@shared/component/page-header/page-header';
import { todayData } from './today-data.model';
import { Dialog } from '@shared/component/dialog/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-today-data',
  imports: [Table, PageHeader, Dialog, ReactiveFormsModule],
  templateUrl: './today-data.html',
  styleUrl: './today-data.css',
})
export class TodayData {
  columns: TableColumn[] = [
    {
      field: 'date',
      header: 'Date',
      type: 'date',
      dateFormat: 'dd/MM/yyyy',
      headerClass: 'min-w-[140px]',
    },

    {
      field: 'sunrise',
      header: 'Sunrise',
      headerClass: 'min-w-[120px]',
    },

    {
      field: 'sunset',
      header: 'Sunset',
      headerClass: 'min-w-[120px]',
    },

    {
      field: 'bank',
      header: 'Bank',
      type: 'badge',
      badgeMap: {
        On: 'border-green-200 bg-green-100 text-green-700',
        Off: 'border-gray-200  bg-gray-100  text-gray-700',
      },
    },

    {
      field: 'zodiacSign',
      header: 'Zodiac Sign',
      headerClass: 'min-w-[140px]',
    },
    {
      field: 'season',
      header: 'Season',
      headerClass: 'min-w-[140px]',
    },

    {
      field: 'petrol',
      header: 'Petrol (₹)',
      headerClass: 'min-w-[120px]',
    },

    {
      field: 'diesel',
      header: 'Diesel (₹)',
      headerClass: 'min-w-[120px]',
    },

    {
      field: 'cng',
      header: 'CNG (₹)',
      headerClass: 'min-w-[120px]',
    },

    {
      field: 'lpg',
      header: 'LPG (₹)',
      headerClass: 'min-w-[120px]',
    },
  ];

  data: todayData[] = [
    {
      date: '2026-03-14',
      sunrise: '06:35 AM',
      sunset: '06:40 PM',
      bank: 'On',
      zodiacSign: 'Pisces',
      season: 'winter',
      petrol: 96.42,
      diesel: 92.15,
      cng: 78.9,
      lpg: 49.5,
    },
    {
      date: '2026-03-15',
      sunrise: '06:34 AM',
      sunset: '06:41 PM',
      bank: 'Off',
      zodiacSign: 'Pisces',
      season: 'summer',

      petrol: 96.55,
      diesel: 92.3,
      cng: 79.1,
      lpg: 49.8,
    },
    {
      date: '2026-03-16',
      sunrise: '06:33 AM',
      sunset: '06:41 PM',
      bank: 'On',
      zodiacSign: 'Aries',
      season: 'winter',

      petrol: 96.7,
      diesel: 92.45,
      cng: 79.4,
      lpg: 50.0,
    },
    {
      date: '2026-03-17',
      sunrise: '06:32 AM',
      sunset: '06:42 PM',
      bank: 'On',
      zodiacSign: 'Aries',
      season: 'winter',

      petrol: 96.8,
      diesel: 92.6,
      cng: 79.6,
      lpg: 50.2,
    },
    {
      date: '2026-03-18',
      sunrise: '06:31 AM',
      sunset: '06:42 PM',
      bank: 'Off',
      zodiacSign: 'Aries',
      season: 'Monsoon',

      petrol: 96.95,
      diesel: 92.75,
      cng: 79.8,
      lpg: 50.5,
    },
  ];

  thumbnailForm!: FormGroup;
  showThumbnailDialog = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.thumbnailForm = this.fb.group({
      image: [''],
      title: [''],
      description: [''],
    });
  }

  openThumbnailDialog() {
    this.showThumbnailDialog = true;
  }

  saveThumbnail() {
    console.log(this.thumbnailForm.value);

    this.thumbnailForm.reset();
    this.showThumbnailDialog = false;
  }

  //  image
  imagePreview: string | null = null;
  onImageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;

    const file = input.files[0];

    if (this.imagePreview) {
      URL.revokeObjectURL(this.imagePreview);
    }

    this.thumbnailForm.patchValue({
      image: file,
    });

    this.imagePreview = URL.createObjectURL(file);
  }

  removeImage() {
    if (this.imagePreview) {
      URL.revokeObjectURL(this.imagePreview);
    }

    this.thumbnailForm.patchValue({
      image: null,
    });
    this.imagePreview = null;
  }
}
