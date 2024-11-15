import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
// Define the configuration for bootstrap if required
const appConfig = {
  providers: [provideAnimationsAsync()
    // Add any providers you need here
  ]
};

// Bootstrap the AppComponent with the configuration
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error('Application bootstrap failed:', err));
