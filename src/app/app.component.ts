import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './componentes/nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SobrenosotrosComponent } from './componentes/sobrenosotros/sobrenosotros.component';
import { CocktailsComponent } from './componentes/cocktails/cocktails.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LayoutComponent } from './componentes/layout/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    RouterOutlet,
    HomeComponent,
    SobrenosotrosComponent,
    CocktailsComponent,
    FooterComponent,
    LayoutComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-cocktails';
}
