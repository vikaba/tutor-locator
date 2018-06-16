import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TutorSearchComponent } from './tutor-search/tutor-search.component';
import {FormsModule} from '@angular/forms';
import {SearchServiceClient} from './services/tutorsearch.service.client';

@NgModule({
  declarations: [
    AppComponent,
    TutorSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    SearchServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
