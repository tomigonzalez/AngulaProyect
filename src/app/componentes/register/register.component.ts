import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from './../../service/user.service';
import { UsersService } from '../../service/firestore/users.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  myForm: FormGroup;
  isLoading = false;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private userServiceFirestore: UsersService
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
    if (this.myForm.valid) {
      let email = this.myForm.get('email')!.value;
      let password = this.myForm.get('password')!.value;

      try {
        //Registrar usuario con autenticación de Firebase (asumiendo un método en userService)
        const response = await this.userService.register({ email, password });

        // Extraer ID de usuario de la respuesta de autenticación
        const userId = response.user.uid;

        // Crear documento de usuario en Firestore (asumiendo un método en userServiceFirestore)
        await this.userServiceFirestore.addUser({
          ...this.myForm.value,
          id: userId,
          rol: '',
        });
        this.isLoading = false;
        window.location.href = '/home';
      } catch (error) {
        console.log(error, 'ingresa algo');
        this.myForm.markAllAsTouched();
        this.isLoading = false;
      }
    } else {
      // Marca todos los controles como tocados para que se muestren los mensajes de error
      this.myForm.markAllAsTouched();
    }
  }
}
