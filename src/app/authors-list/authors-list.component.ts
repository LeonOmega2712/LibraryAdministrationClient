import { Component, Input } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.css']
})
export class AuthorsListComponent {

  // authorBooks: any;
  constructor(private http: HttpClient) { }

  @Input() authorBooks: any;

}
