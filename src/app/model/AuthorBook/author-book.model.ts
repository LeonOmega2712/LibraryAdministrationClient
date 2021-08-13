import { Author } from '../Author/author.model';
import { Book } from '../Book/book.model';

export class AuthorBook {
  private _Id!: number;
  private _Author!: Author;
  private _Books!: Book[];

  constructor() {
  }

  get Id(): number {
    return this._Id;
  }

  set Id(value: number) {
    this._Id = value;
  }

  get Author(): Author {
    return this._Author;
  }

  set Author(value: Author) {
    this._Author = value;
  }

  get Books(): Book[] {
    return this._Books;
  }

  set Books(value: Book[]) {
    this._Books = value;
  }
}
