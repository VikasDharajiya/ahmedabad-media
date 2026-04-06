import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Button } from '@shared/components/button/button';
import { PageHeader } from '@shared/components/page-header/page-header';
import { SEASONS } from '../../../../core/mock/today-data.mock';
import { TodayDataService } from '../../services/today-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-today-data',
  imports: [Button, FormsModule, PageHeader, ReactiveFormsModule],
  templateUrl: './add-today-data.html',
  styleUrl: './add-today-data.css',
})
export class AddTodayData {
  private todayDataService = inject(TodayDataService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  todayForm!: FormGroup;
  ngOnInit() {
    this.todayForm = this.fb.group({
      date: [''],
      sunrise: [''],
      sunset: [''],
      bank: [false],
      zodiacSign: [''],
      season: [''],
      petrol: [null],
      diesel: [null],
      cng: [null],
      lpg: [null],
    });
  }

  seasons = [...SEASONS];

  saveTodayData() {
    if (this.todayForm.invalid) return;

    this.todayDataService.create(this.todayForm.value).subscribe(() => {
      this.todayForm.reset({ bank: false });
      this.router.navigate(['/today-data']);
    });
  }
}
