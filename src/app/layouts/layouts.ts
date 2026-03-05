import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './sidebar/sidebar';

@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [RouterOutlet, Sidebar],
  templateUrl: './layouts.html',
  styleUrls: ['./layouts.css'],
})
export class Layouts {}
