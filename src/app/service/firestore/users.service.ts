import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  deleteDoc,
} from '@angular/fire/firestore';
import User from '../../interfaces/user.interface';
import Cocktail from '../../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private firestore: Firestore) {}

  addUser(user: User) {
    const userRef = collection(this.firestore, 'Users');
    return addDoc(userRef, user);
  }
  getUser(): Observable<User[]> {
    const userRef = collection(this.firestore, 'Users');
    return collectionData(userRef, { idField: 'id' }) as Observable<User[]>;
  }

  addCocktail(cocktail: Cocktail) {
    const cocktailRef = collection(this.firestore, 'Cocktail');
    return addDoc(cocktailRef, cocktail);
  }

  getCocktail(): Observable<Cocktail[]> {
    const cocktailRef = collection(this.firestore, 'Cocktail');
    return collectionData(cocktailRef, { idField: 'id' }) as Observable<
      Cocktail[]
    >;
  }
  deleteCocktail(cocktail: Cocktail) {
    const cocktaildockRef = doc(this.firestore, `Cocktail/${cocktail.id}`);
    return deleteDoc(cocktaildockRef);
  }
}
