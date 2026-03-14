import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  imports: [FormsModule, CommonModule],
  templateUrl: './date-input.html',
  styleUrl: './date-input.css',
})
export class DateInput {
  @Input() model: string | null = null;
  @Output() modelChange = new EventEmitter<string | null>();
  @Input() placeholder = '';

  @Input() inputClass: string = '';
}
