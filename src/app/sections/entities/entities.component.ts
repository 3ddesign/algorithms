import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss']
})
export class EntitiesComponent implements OnInit {

  public constructor() { }

  public ngOnInit(): void {
  }

  public checkItem(item: any): void {
    item.classList.toggle('hidden');
  }
}
