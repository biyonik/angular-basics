import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.scss']
})
export class FirstChildComponent implements OnInit {
  @Input('nameValue') public nameValue: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
