import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  imports: [FormsModule],
  templateUrl: './date-input.html',
  styleUrl: './date-input.css',
})
export class DateInput {
  @Input() model = '';
  @Input() placeholder = '';

  @Output() modelChange = new EventEmitter<string>();
}
