import { Author } from '../Author/author.model';
import { Book } from '../Book/book.model';

export class AuthorBook {
  public id!: number;
  public author!: Author;
  public books!: Book[];

  constructor() {
  }


}
