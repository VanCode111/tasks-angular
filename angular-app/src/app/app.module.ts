import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PinkTextDirective } from './directives/pink-text.directive';
import { CamelTextPipe } from './pipes/camel-text.pipe';

@NgModule({
  declarations: [AppComponent, PinkTextDirective, CamelTextPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
