import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  hasTitle: boolean = false;
  name:string = '';
  username: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  changeTitle() {
    this.hasTitle = !this.hasTitle;
  }

}
