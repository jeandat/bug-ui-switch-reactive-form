import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UiSwitchModule } from 'ngx-ui-switch';
import { FooComponent } from 'src/app/foo.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, FooComponent],
  imports: [BrowserModule, ReactiveFormsModule, UiSwitchModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
