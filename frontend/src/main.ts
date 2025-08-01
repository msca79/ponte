import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';
import { BASE_PATH } from './app/api-client';

bootstrapApplication(App, {
  providers: [
    { provide: BASE_PATH, useValue: '.' },
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
  ]
})
  .catch((err) => console.error(err));
