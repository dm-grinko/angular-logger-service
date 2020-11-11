import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerService } from './services/logger.service';
import { LoggerProvider } from './services/logger.provider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LoggerService,
      useClass: LoggerProvider
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
