export class Book {
  private _Id: number;
  private _Title: string;
  private _YearPublished: Date;
  private _PageQuantity: number;
  private _StockQuantity: number;
  private _IdAuthor: number;

  constructor(Id: number, Title: string, YearPublished: Date, PageQuantity: number, StockQuantity: number, IdAuthor: number) {
    this._Id = Id;
    this._Title = Title;
    this._YearPublished = YearPublished;
    this._PageQuantity = PageQuantity;
    this._StockQuantity = StockQuantity;
    this._IdAuthor = IdAuthor;
  }

  get Id(): number {
    return this._Id;
  }

  set Id(value: number) {
    this._Id = value;
  }

  get Title(): string {
    return this._Title;
  }

  set Title(value: string) {
    this._Title = value;
  }

  get YearPublished(): Date {
    return this._YearPublished;
  }

  set YearPublished(value: Date) {
    this._YearPublished = value;
  }

  get PageQuantity(): number {
    return this._PageQuantity;
  }

  set PageQuantity(value: number) {
    this._PageQuantity = value;
  }

  get StockQuantity(): number {
    return this._StockQuantity;
  }

  set StockQuantity(value: number) {
    this._StockQuantity = value;
  }

  get IdAuthor(): number {
    return this._IdAuthor;
  }

  set IdAuthor(value: number) {
    this._IdAuthor = value;
  }
}
