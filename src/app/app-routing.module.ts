import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorFormComponent } from "./author-form/author-form.component";
import { AuthorsListComponent } from "./authors-list/authors-list.component";

const routes: Routes = [
  {path: 'authorList', component: AuthorsListComponent},
  {path: 'authorForm', component: AuthorFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
