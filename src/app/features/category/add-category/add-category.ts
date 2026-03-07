import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-category',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './add-category.html',
  styleUrl: './add-category.css',
})
export class AddCategory {
  categoryForm = {
    name: '',
    status: 'Active',
  };

  saveCategory() {
    console.log(this.categoryForm);
  }
}
