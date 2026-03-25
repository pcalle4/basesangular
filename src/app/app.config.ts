import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    // HashStrategy
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ]
};


//1. Su proyecto van a subirlo a Github
//2. agregar HashStrategy de angular
//3. generar un nuevo ng build y lo van a subir

//mandar al chat 
//1. el repositorio de github 
//2. el link de netlify