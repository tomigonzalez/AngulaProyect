import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/firestore/users.service';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-cocktails',
  standalone: true,
  imports: [],
  templateUrl: './cocktails.component.html',
  styleUrl: './cocktails.component.css',
})
export class CocktailsComponent implements OnInit {
  currentUser: any;
  constructor(private userFire: UsersService, private userLog: UserService) {}

  ngOnInit(): void {
    //Usuario que esta logueado
    this.userLog.getUserEmail().then((email) => {
      //Usuario traido de la BD fire
      this.userFire.getUser().subscribe((user) => {
        this.currentUser = user.find((user) => user.email === email);
        console.log(this.currentUser);
      });
    });
  }
}
