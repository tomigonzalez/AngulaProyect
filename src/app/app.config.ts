import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          projectId: 'cocktails-auth',
          appId: '1:941691306289:web:26b6d74ef0678617c57010',
          storageBucket: 'cocktails-auth.appspot.com',
          apiKey: 'AIzaSyBu0bkZrCXoLiQAIrNEwUojNZRmcBbjJBw',
          authDomain: 'cocktails-auth.firebaseapp.com',
          messagingSenderId: '941691306289',
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
  ],
};
