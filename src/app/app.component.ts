import {Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'LibraryAdministrationClient';
  authorBooksList: any;
  author: any = '';

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    await this.getAuthorsAndBooks(this.author);
  }

  getAuthorsAndBooks(author?: string) {
    this.http.get(`https://localhost:44327/api/AuthorBook?authorsName=${author}`).subscribe(response => {
      this.authorBooksList = response;
    }, error => {
      console.log(error);
    });
  }
}
