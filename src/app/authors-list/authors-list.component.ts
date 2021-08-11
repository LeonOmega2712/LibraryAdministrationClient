import { Component, OnInit } from '@angular/core';
import { AuthorBook } from "../model/AuthorBook/author-book.model";

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
