import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Button } from '@shared/components/button/button';

import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    CommonModule,
    Button,
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // email: string = '';
  // password: string = '';

  // loginForm!: FormGroup<{
  //   email: FormControl<string>;
  //   password: FormControl<string>;
  // }>;

  private fb = inject(FormBuilder);
  private router = inject(Router);

  loginForm = this.fb.nonNullable.group({
    email: [''],
    password: [''],
  });

  get controls() {
    return this.loginForm.controls;
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, password } = this.loginForm.getRawValue();
    console.log('Login Data:', email, password);

    localStorage.setItem('isLoggedIn', 'true');
    this.router.navigate(['/dashboard']);
  }
}
