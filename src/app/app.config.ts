import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { tokenInterceptor } from './Services/token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(),
  { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
  provideAnimations(), provideZoneChangeDetection({ eventCoalescing: true }),
  { provide: LOCALE_ID, useValue: 'en-US' },
  provideHttpClient(withInterceptors([tokenInterceptor])),
  provideRouter(routes), provideAnimationsAsync()]
};
