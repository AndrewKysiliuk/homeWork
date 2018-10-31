import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Observable} from 'rxjs';
import { HttpClientService} from '../HttpClientService';
import {Pet} from '../Pet';

@Injectable({
  providedIn: 'root'
})
export class GalleryResolveService implements Resolve<Pet[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pet[]> {
    return this.httpService.httpGet();
  }

  constructor(private httpService: HttpClientService) { }
}
