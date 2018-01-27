import { Component, OnInit } from '@angular/core';
import {Event as NavigationEvent, Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public isAuthentificated: boolean = true;

  public constructor(private router: Router) {
    router.events.forEach((event: NavigationEvent) => {
      if (window.location.href.indexOf('login') > 0) {
        this.isAuthentificated = false;
      }
    });
  }
  ngOnInit() {
    if (window.location.href.indexOf('login') > 0) {
      this.isAuthentificated = false;
    }
  }

}
