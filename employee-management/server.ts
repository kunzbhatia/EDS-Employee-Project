import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import { platformServer } from '@angular/platform-server';
import { AppServerModule } from './src/app/app.server.module'; // Import AppServerModule for SSR
import { environment } from './src/environments/environment'; // Ensure environment is correctly imported
import { enableProdMode, ApplicationRef } from '@angular/core'; // Import ApplicationRef from Angular core

// Enable production mode if the environment is production
if (environment.production) {
  enableProdMode();
}

export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Serve static files from the /browser folder
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    // Use platformServer to bootstrap the AppServerModule for SSR
    commonEngine
      .render({
        bootstrap: async () => {
          // Bootstrapping the AppServerModule
          const ngModuleRef = await platformServer().bootstrapModule(AppServerModule);
          // Return the ApplicationRef from NgModuleRef
          return ngModuleRef.injector.get(ApplicationRef);
        },
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
