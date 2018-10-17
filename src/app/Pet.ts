export class Pet {
  id: number;
  url: string;
  title: string;

  constructor (Id: number = null, Url: string = '', Title: string = '') {
    this.id = Id;
    this.url = Url;
    this.title = Title;
  }
}
