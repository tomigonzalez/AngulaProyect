import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../../service/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit {
  currentUser: any;
  userEmail: string | null = null;
  constructor(private userService: UserService, private router: Router) {}

  async ngOnInit() {
    try {
      this.currentUser = await this.userService.loginNow();
      if (this.currentUser) {
        this.userEmail = this.currentUser.email.split('@')[0];

        console.log(this.userEmail);
      }
    } catch (error) {
      console.log(error);
    }
    // this.userService
    //   .getUserEmail()
    //   .then((email) => {
    //     // Verifica si el email está presente antes de realizar el split
    //     if (email) {
    //       this.userEmail = email.split('@')[0];
    //     }
    //     // Si no hay email, no se realiza ninguna acción
    //   })
    //   .catch((error) => {
    //     console.log('Error durante la recuperacion del user: ', error);
    //   });
  }

  logout() {
    this.userService
      .logout()
      .then(() => {
        console.log('Logout exitoso');
        this.userEmail = null;
        this.router.navigate(['/login']); // Redirige a la página de inicio de sesión
      })
      .catch((error) => {
        console.error('Error durante el logout', error);
      });
  }
}
