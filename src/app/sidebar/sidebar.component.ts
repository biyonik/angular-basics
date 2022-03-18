import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxNavigationDrawerComponent } from 'igniteui-angular';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @ViewChild(IgxNavigationDrawerComponent, {static: true})
  public drawer!: IgxNavigationDrawerComponent;

  public navItems = [
    {name: 'home', text: 'Home', route: 'home'},
    {name: 'git-merge', text: 'Role', route: 'role'},
    {name: 'verified-account', text: 'User', route:'user'},
    {name: 'verified-account', text: 'Data-Binding', route:'data-binding'},
    {name: 'verified-account', text: 'Storage', route:'storage'},
    {name: 'verified-account', text: 'Directives', route:'directives'},
    {name: 'verified-account', text: 'Pipes', route:'pipes'},
    {name: 'verified-account', text: 'Parents', route:'parent'},
    {name: 'verified-account', text: 'Forms', route:'forms'},
  ];

  public selected: string = 'Home';

  public navigate(item: any): void {
    this.selected = item.text;
    this.drawer.close();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
