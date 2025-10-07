import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { serverErrorInterceptor } from './core/interceptors/server-error-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpRequestInterceptor } from './services/spinner-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [    
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    //[{provide:HTTP_INTERCEPTORS,useClass:serverErrorInterceptor,multi:true}],
    provideHttpClient(withInterceptorsFromDi()),    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: serverErrorInterceptor,
      multi: true,
    },
    importProvidersFrom(BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right'
    }),
    NgxSpinnerModule.forRoot({ type: 'square-jelly-box' })),
    
  ]
};
