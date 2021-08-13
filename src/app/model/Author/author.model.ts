export class Author {
  private _Id!: number;
  private _Name!: string;
  private _Birthdate!: string;
  private _OriginCountry!: string;


  constructor() {
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

  get Birthdate(): string {
    return this._Birthdate;
  }

  set Birthdate(value: string) {
    this._Birthdate = value;
  }

  get OriginCountry(): string {
    return this._OriginCountry;
  }

  set OriginCountry(value: string) {
    this._OriginCountry = value;
  }
}
