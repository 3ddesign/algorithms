import {Inject, Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PropertyService {

  public constructor( private http: Http) {
  }

  public getTasksList(): Observable<any> {
    const token: string = localStorage.getItem('access_token');
    const headers: any = new Headers({'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`});
    const options: any = {headers};
    return this.http.get(`http://test-annotate.linalgo.com/api/tasks`, options)
      .map((res: any) => {
        return res.json();
      })
      .catch((err: any) => Observable.of(err));

  }

}
