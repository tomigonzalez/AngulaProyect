import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import User from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private firestore: Firestore) {}

  addUser(user: User) {
    const userRef = collection(this.firestore, 'Users');
    return addDoc(userRef, user);
  }
}
