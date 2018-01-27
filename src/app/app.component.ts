import {Component, OnInit} from '@angular/core';
import {Event as NavigationEvent, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isAuthentificated: boolean = true;

  public constructor(private router: Router) {
    router.events.forEach((event: NavigationEvent) => {
      if (window.location.href.indexOf('login') > 0) {
        this.isAuthentificated = false;
      }
    });
  }

  public ngOnInit(): void {

  }

}
