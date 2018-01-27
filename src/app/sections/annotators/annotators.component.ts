import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annotators',
  templateUrl: './annotators.component.html',
  styleUrls: ['./annotators.component.scss']
})
export class AnnotatorsComponent implements OnInit {

  public constructor() { }

  public ngOnInit(): void {
  }

  public checkItem(item: any): void {
    item.classList.toggle('hidden');
  }
}
