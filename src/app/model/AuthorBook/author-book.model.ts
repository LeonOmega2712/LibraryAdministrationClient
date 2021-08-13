import { Author } from '../Author/author.model';
import { Book } from '../Book/book.model';

export class AuthorBook {
  public id: number = 0;
  public author!: Author;
  public books!: Book[];

  constructor() {
  }


}
