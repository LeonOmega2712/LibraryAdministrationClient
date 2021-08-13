export class Book {
  public id: number = 0;
  public title!: string;
  public yearPublished!: string;
  public pageQuantity!: number;
  public stockQuantity!: number;
  public idAuthor: number = 0;

  constructor() {
  }
}
