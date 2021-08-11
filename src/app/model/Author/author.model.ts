export class Author {
  private _Id: number;
  private _Name: string;
  private _Birthdate: Date;
  private _OriginCountry: string;


  constructor(Id: number, Name: string, Birthdate: Date, OriginCountry: string) {
    this._Id = Id;
    this._Name = Name;
    this._Birthdate = Birthdate;
    this._OriginCountry = OriginCountry;
  }

  get Id(): number {
    return this._Id;
  }

  set Id(value: number) {
    this._Id = value;
  }

  get Name(): string {
    return this._Name;
  }

  set Name(value: string) {
    this._Name = value;
  }

  get Birthdate(): Date {
    return this._Birthdate;
  }

  set Birthdate(value: Date) {
    this._Birthdate = value;
  }

  get OriginCountry(): string {
    return this._OriginCountry;
  }

  set OriginCountry(value: string) {
    this._OriginCountry = value;
  }
}
