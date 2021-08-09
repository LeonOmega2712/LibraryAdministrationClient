import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsListComponent } from './authors-list/authors-list.component';
import { AuthorFormComponent } from './author-form/author-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsListComponent,
    AuthorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
