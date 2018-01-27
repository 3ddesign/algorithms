import {Component, OnInit, Inject} from '@angular/core';
import {PropertyService} from '../../_shared/services/property.service';
import {AuthService} from '../../_shared/services/auth.service';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public isViewBlock: boolean = false;

  API_URL: string = 'http://test-annotate.linalgo.com/api';
  message: string;

  public constructor(public authHttp: AuthHttp) {}


  public ngOnInit(): void  {
    this.securedPing();
  }

  public securedPing(): void {
    this.message = '';
    this.authHttp.get(`${this.API_URL}/tasks`)
      .map(res => res.json())
      .subscribe(
        data => this.message = data.message,
        error => this.message = error
      );
    console.log(this.message);
  }

  public changeView(): void {
     this.isViewBlock = !this.isViewBlock;
  }
}
