import { Component, OnInit } from '@angular/core';

import { UserService } from '../../service/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktails.component.html',
  styleUrl: './cocktails.component.css',
})
export class CocktailsComponent implements OnInit {
  currentUser: any;
  constructor(private userLog: UserService) {}

  async ngOnInit() {
    this.currentUser = await this.userLog.loginNow();

    // //Usuario que esta logueado
    // this.userLog.getUserEmail().then((email) => {
    //   //Usuario traido de la BD fire
    //   this.userFire.getUser().subscribe((user) => {
    //     this.currentUser = user.find((user) => user.email === email);
    //   });
    // });
  }
}
