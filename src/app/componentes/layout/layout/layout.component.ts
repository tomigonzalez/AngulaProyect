import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../../../home/home.component';
import { SobrenosotrosComponent } from '../../sobrenosotros/sobrenosotros.component';
import { CocktailsComponent } from '../../cocktails/cocktails.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    SobrenosotrosComponent,
    CocktailsComponent,
    FooterComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
