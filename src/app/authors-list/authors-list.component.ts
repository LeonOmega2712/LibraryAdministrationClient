import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit {

  authorBooks: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAuthorsAndBooks('')
  }

  getAuthorsAndBooks(author: string) {
    this.http.get('https://localhost:44327/api/AuthorBook').subscribe(response => {
      this.authorBooks = response;
    }, error => {
      console.log(error);
    });
  }
}
