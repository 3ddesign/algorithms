import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../_shared/services/auth.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  public constructor(private _authService: AuthService) {
  }

  public ngOnInit(): void {
    this._authService.login();
  }
}
