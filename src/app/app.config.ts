import { ApplicationConfig } from '@angular/core';
import { provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';  // Asegúrate de definir correctamente las rutas
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppComponent } from './app.component';  // Componente raíz autónomo
import { bootstrapApplication } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({
      eventCoalescing: true, // Reduce la frecuencia de eventos, mejorando el rendimiento
      runCoalescing: true    // Combina cambios de estado para minimizar ciclos de detección
    }),
    provideRouter(routes),  // Configura las rutas
    provideClientHydration(), // Soporte para SSR
    provideAnimationsAsync(), // Habilita animaciones asincrónicas
    provideHttpClient(withInterceptorsFromDi()) // Configura el HttpClient con interceptores
  ]
};

// Arranca la aplicación con `bootstrapApplication` y el componente autónomo raíz

