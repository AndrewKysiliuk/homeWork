import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClientService} from '../HttpClientService';

@Injectable({
  providedIn: 'root'
})
export class GalleryItemResolveService implements Resolve<{}> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<{}> {
    return this.httpService.getById(route.params.id);
  }

  constructor(private httpService: HttpClientService) {
  }
}
