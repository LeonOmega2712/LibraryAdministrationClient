import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthorBook} from '../model/AuthorBook/author-book.model';
import {Author} from "../model/Author/author.model";
import {Book} from "../model/Book/book.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {formatNumber} from "@angular/common";
import {toNumbers} from "@angular/compiler-cli/src/diagnostics/typescript_version";

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {

  registerForm!: FormGroup;
  authorBook: AuthorBook = new AuthorBook();
  author: Author = new Author();
  book: Book = new Book();
  booksList: any[] = [];
  authorBooksList: any;

  constructor(private fb: FormBuilder, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      // Author
      Name: ['', Validators.required,],
      DayBirthDate: ['', Validators.required,],
      MonthBirthDate: ['', Validators.required,],
      YearBirthDate: ['', Validators.required, ],
      OriginCountry: ['', Validators.required,],

      // Book
      BookTitle: ['', Validators.required,],
      BookPublishingYear: ['', Validators.required, ],
      BookPageQuantity: ['', Validators.required,],
      BookStockQuantity: ['', Validators.required,]
    });
  }

  yearStringCorrection(year: number): string {
    let yearFormatted: string = year.toString();
    while(yearFormatted.length<4)
      yearFormatted = `0${yearFormatted}`;
      return yearFormatted;
  }

  register() {
    this.author.name = this.registerForm.value.Name;

    let month: string = this.registerForm.value.MonthBirthDate < 10 ? `0${this.registerForm.value.MonthBirthDate}` : `${this.registerForm.value.MonthBirthDate}`;
    let day: string = this.registerForm.value.DayBirthDate < 10 ? `0${this.registerForm.value.DayBirthDate}` : `${this.registerForm.value.DayBirthDate}`;

    this.author.birthdate = `${this.yearStringCorrection(this.registerForm.value.YearBirthDate)}-${month}-${day}`;
    this.author.originCountry = this.registerForm.value.OriginCountry

    this.book.title = this.registerForm.value.BookTitle;
    this.book.yearPublished = `${this.yearStringCorrection(this.registerForm.value.BookPublishingYear)}-01-01`;
    this.book.pageQuantity = this.registerForm.value.BookPageQuantity;
    this.book.stockQuantity = this.registerForm.value.BookStockQuantity;

    this.booksList.push(this.book);

    this.authorBook.author = this.author;
    this.authorBook.books = this.booksList;

    console.log(this.authorBook);
    console.log(JSON.stringify(this.authorBook));

    this.postAuthorBook(this.authorBook);
    console.log(this.authorBooksList);
  }

  postAuthorBook(authorBook: AuthorBook) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    this.http.post(`https://localhost:44327/api/AuthorBook`, JSON.stringify(this.authorBook), httpOptions).subscribe(response => {
      this.authorBooksList = response;
    }, error => {
      console.log(error);
    });
  }
}
