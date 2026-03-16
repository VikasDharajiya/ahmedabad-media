import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-input.html',
  styleUrl: './form-input.css',
})
export class FormInput {
  @Input() label!: string;
  @Input() controlName!: string;
  @Input() type: string = 'text';
  @Input() form!: FormGroup;
  @Input() required: boolean = false;
}
