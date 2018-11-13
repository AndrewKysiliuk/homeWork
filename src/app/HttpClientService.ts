import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pet} from './Pet';

@Injectable()

export class HttpClientService {

  constructor(private http: HttpClient) {
  }

  private httpUrl = 'http://localhost:3000/gallery';

  httpGet(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.httpUrl);
  }

  newRecord(val: Pet): Observable<{}> {
      return this.http.post(this.httpUrl, val);
  }

  delRecord(id: number): Observable<{}> {
    const delUrl = `${this.httpUrl}/${id}`;
    return this.http.delete(delUrl);
  }
  getById(id: number) {
    return this.http.get<Pet>(`${this.httpUrl}/${id}`);
  }
}
