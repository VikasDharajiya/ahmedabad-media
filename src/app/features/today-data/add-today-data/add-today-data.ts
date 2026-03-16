import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Button } from '@shared/component/button/button';
import { PageHeader } from '@shared/component/page-header/page-header';

@Component({
  selector: 'app-add-today-data',
  imports: [Button, FormsModule, PageHeader, ReactiveFormsModule],
  templateUrl: './add-today-data.html',
  styleUrl: './add-today-data.css',
})
export class AddTodayData {
  todayForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

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

  seasons = ['Winter', 'Summer', 'Monsoon', 'Autumn', 'Spring'];

  saveTodayData() {
    if (this.todayForm.invalid) return;

    console.log('Today Data:', this.todayForm.value);

    // API call here

    this.todayForm.reset({
      bank: false,
    });
  }
}
