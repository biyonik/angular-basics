import { Component, OnInit, Input } from '@angular/core';
import { IgxNavigationDrawerComponent, IgxNavigationService } from 'igniteui-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(public drawer: IgxNavigationService) { }

  private title: string = 'Angular Temelleri';

  get Title() {return this.title; }

  ngOnInit(): void {
  }

}
