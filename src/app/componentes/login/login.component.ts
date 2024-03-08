import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  isLoading = false;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.myForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  hasErrors(controlName: string, errorType: string) {
    return (
      this.myForm.get(controlName)?.hasError(errorType) &&
      this.myForm.get(controlName)?.touched
    );
  }

  async onSubmit() {
    // Verifica si el formulario es válido
    if (this.myForm.value) {
      let email = this.myForm.get('email')!.value;
      let password = this.myForm.get('password')!.value;

      try {
        this.isLoading = true;
        const response = await this.userService.login({ email, password });
        console.log(response);
        this.isLoading = false;
        window.location.href = '/home';
      } catch (error) {
        this.isLoading = false;
        this.myForm.markAllAsTouched();
        console.log(error, 'ingresa algo');
      }
    } else {
      this.myForm.markAllAsTouched();
    }
  }
}
