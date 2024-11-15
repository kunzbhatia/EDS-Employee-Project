// src/app/app.server.module.ts
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module'; // Import the main AppModule
import { AppComponent } from './app.component'; // Import your root component

@NgModule({
  imports: [
    AppModule, // Import your main app module
    ServerModule, // Add the ServerModule to make it work with SSR
  ],
})

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent]
  })
export class AppServerModule {}
