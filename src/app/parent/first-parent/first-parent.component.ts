import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-parent',
  templateUrl: './first-parent.component.html',
  styleUrls: ['./first-parent.component.scss']
})
export class FirstParentComponent implements OnInit {
  public name: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
