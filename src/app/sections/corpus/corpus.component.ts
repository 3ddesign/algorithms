import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corpus',
  templateUrl: './corpus.component.html',
  styleUrls: ['./corpus.component.scss']
})
export class CorpusComponent implements OnInit {

  public constructor() { }

  public ngOnInit(): void {
  }

  public checkItem(item: any): void {
    item.classList.toggle('hidden');
  }
}
