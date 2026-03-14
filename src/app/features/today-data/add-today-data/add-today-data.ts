import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from '@shared/component/button/button';
import { PageHeader } from '@shared/component/page-header/page-header';

@Component({
  selector: 'app-add-today-data',
  imports: [Button, FormsModule, PageHeader],
  templateUrl: './add-today-data.html',
  styleUrl: './add-today-data.css',
})
export class AddTodayData {
  todayForm = {
    date: '',
    sunrise: '',
    sunset: '',
    bank: false,
    zodiacSign: '',
    season: '',
    petrol: null,
    diesel: null,
    cng: null,
    lpg: null,
  };

  seasons = ['Winter', 'Summer', 'Monsoon', 'Autumn', 'Spring'];

  saveTodayData() {
    console.log(this.todayForm);
  }
}
