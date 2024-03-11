import { Injectable } from '@angular/core';
import {
  createUserWithEmailAndPassword,
  Auth,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { UsersService } from './firestore/users.service';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private auth: Auth, private userFire: UsersService) {}

  register({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  logout() {
    return signOut(this.auth);
  }

  getUserEmail(): Promise<string | null> {
    return new Promise((resolve, reject) => {
      const auth = getAuth(); // Recupere el objeto Auth para el uso actual

      onAuthStateChanged(
        auth,
        (user) => {
          if (user) {
            resolve(user.email); // Si hay un usuario, resuelve con el correo electrónico
          } else {
            resolve(null); // Si no hay usuario, resuelve con null
          }
        },
        (error) => {
          reject(error); // Rechaza la promesa en caso de error
        }
      );
    });
  }

  async loginNow(): Promise<any> {
    try {
      const userEmail = await this.getUserEmail();
      const email = userEmail as string;
      const user = await this.UserBD(email); // Use 'user' for clarity
      return user;
    } catch (error) {
      throw error; // Re-throw for proper error handling
    }
  }

  async UserBD(email: string): Promise<any> {
    try {
      const users = await firstValueFrom(this.userFire.getUser());
      return users.find((user) => user.email === email);
    } catch (error) {
      throw error; // Re-throw for proper error handling
    }
  }
}
