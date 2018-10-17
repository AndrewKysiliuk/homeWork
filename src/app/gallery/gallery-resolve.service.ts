import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Observable} from 'rxjs';
import { HttpClientService} from '../HttpClientService';

@Injectable({
  providedIn: 'root'
})
export class GalleryResolveService implements Resolve<{}> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{}> {
    return this.httpService.httpGet();
  }

  constructor(private httpService: HttpClientService) { }
}
