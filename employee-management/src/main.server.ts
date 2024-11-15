import { platformServer } from '@angular/platform-server';
import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';
import { AppServerModule } from './app/app.server.module'; 
import { environment } from './environments/environment'; 

if (environment.production) {
    enableProdMode();
  }

const bootstrap = () => platformServer().bootstrapModule(AppModule);

export default bootstrap;

enableProdMode();

// Bootstrap the Angular Universal app
platformServer().bootstrapModule(AppModule)
  .catch(err => console.error('Angular Universal server-side rendering error:', err));

// Enable production mode if the environment is production

