import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

function whoCalled() {
  if (arguments.caller == null)   //Noncompliant
    console.log('I was called from the global scope.');
  else
    console.log(arguments.caller + ' called me!');  // Noncompliant

  console.log(whoCalled.caller);  // Noncompliant
  console.log(whoCalled.arguments);  // Noncompliant
}
