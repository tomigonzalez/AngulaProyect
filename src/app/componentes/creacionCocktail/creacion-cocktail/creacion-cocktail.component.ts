import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { UsersService } from '../../../service/firestore/users.service';

@Component({
  selector: 'app-creacion-cocktail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './creacion-cocktail.component.html',
  styleUrl: './creacion-cocktail.component.css',
})
export class CreacionCocktailComponent implements OnInit {
  myForm: FormGroup;
  isLoading = false;
  constructor(private fb: FormBuilder, private usersService: UsersService) {
    this.myForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      ingredientes: ['', Validators.required],
      preparacion: ['', Validators.required],
      img: ['', Validators.required],
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
      try {
        this.isLoading = true;
        // Split based on comma or period
        // Dividir la cadena de ingredientes en un array usando comas o puntos como delimitadores
        const ingredientesArray = await this.myForm.value.ingredientes.split(
          /[.|,]/
        );

        const preparacionesArray = await this.myForm.value.preparacion.split(
          /[.|,]/
        );

        // Ahora, actualiza el valor de ingredientes en el formulario con el array resultante
        this.myForm.patchValue({
          ingredientes: ingredientesArray,
          preparacion: preparacionesArray,
        });
        await this.usersService.addCocktail({
          ...this.myForm.value,
          id: uuidv4(),
        });
        this.isLoading = false;
        window.location.href = '/layout';
      } catch (error) {
        this.isLoading = false;
        console.log(error, 'ingresa algo');
        this.myForm.markAllAsTouched();
      }
    } else {
      // Marca todos los controles como tocados para que se muestren los mensajes de error
      this.myForm.markAllAsTouched();
    }
  }
}
