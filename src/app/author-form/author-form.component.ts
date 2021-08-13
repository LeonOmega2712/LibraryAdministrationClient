import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthorBook} from '../model/AuthorBook/author-book.model';
import {Author} from "../model/Author/author.model";
import {Book} from "../model/Book/book.model";

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

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      Name: ['', Validators.required,],
      DayBirthDate: ['', Validators.required,],
      MonthBirthDate: ['', Validators.required,],
      YearBirthDate: ['', Validators.required,],
      OriginCountry: ['', Validators.required,],
      BookTitle: ['', Validators.required,],
      BookPublishingYear: ['', Validators.required,],
      BookPageQuantity: ['', Validators.required,],
      BookStockQuantity: ['', Validators.required,]
    })
  }

  register() {
    this.author.Name = this.registerForm.value.Name;
    this.author.Birthdate =
      `${this.registerForm.value.YearBirthDate}-${this.registerForm.value.MonthBirthDate}-${this.registerForm.value.DayBirthDate}`;
    this.author.OriginCountry = this.registerForm.value.OriginCountry
    console.log(this.author);

    this.book.Title = this.registerForm.value.BookTitle;
    this.book.YearPublished = this.registerForm.value.BookPublishingYear;
    this.book.PageQuantity = this.registerForm.value.BookPageQuantity;
    this.book.StockQuantity = this.registerForm.value.BookStockQuantity;
    console.log(this.book);
  }
}
