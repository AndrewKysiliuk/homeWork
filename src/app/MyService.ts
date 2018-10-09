import {Injectable} from '@angular/core';
import {Pet} from './gallery/gallery.component';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()

export class MyService {

  constructor(private http: HttpClient) {
  }

  private httpUrl = 'http://localhost:3000/gallery';

  httpGet(): Observable<{}> {
    return this.http.get(this.httpUrl);
  }

  /*  initLocalStorage() {
      galleryItems.forEach((value, index) => {
        localStorage.setItem(`${value.id}`, JSON.stringify(value));
        console.log(`${value.id}`);
      });
    }

    init(): void {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const data = JSON.parse(localStorage.getItem(key));
        if (data) {
          this.gallery.push(data);
        }
      }
    }

     getData() {
      this.httpGet().subscribe()
    }
    */

  newRecord(val: Pet): Observable<{}> {
      return this.http.post(this.httpUrl, val);
  }

  delRecord(id: number): Observable<{}>{
    const delUrl = `${this.httpUrl}/${id}`;
    return this.http.delete(delUrl);
  }
}
