import {Component, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'LibraryAdministrationClient';
  authorBooks: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAuthorsAndBooks();
  }

  getAuthorsAndBooks(author?: string) {
    this.http.get('https://localhost:44327/api/AuthorBook').subscribe(response => {
      this.authorBooks = response;
    }, error => {
      console.log(error);
    });
  }
}
