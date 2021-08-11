import { Author } from '../Author/author.model';
import { Book } from '../Book/book.model';

export class AuthorBook {
  Id: number;
  Author: Author;
  Books: Book[];
}
