import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../service/firestore/users.service';
import Cocktail from '../../interfaces/user.interface';
@Component({
  selector: 'app-cocktails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktails.component.html',
  styleUrl: './cocktails.component.css',
})
export class CocktailsComponent implements OnInit {
  currentUser: any;
  cocktails: any;
  constructor(private userLog: UserService, private userFire: UsersService) {}

  async ngOnInit() {
    this.currentUser = await this.userLog.loginNow();

    this.userFire.getCocktail().subscribe((cocktails) => {
      this.cocktails = cocktails;
      console.log(this.cocktails);
    });
  }
  async onClickDelete(cocktail: Cocktail) {
    const response = await this.userFire.deleteCocktail(cocktail);
    console.log(response);
  }
}
