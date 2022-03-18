import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  private user: any = {
    firstName: 'Ahmet',
    lastName: 'Altun',
    job: 'Software Developer',
    age: 31,
    pictureUrl: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  };

  public inputType: string = 'text';
  public placeHolder: string = 'Property Binding ile Placeholder :)';
  public inputTitle: string = 'Title değeride property binding ile geldi';
  public canEditable: boolean = false;

  public get User() { return this.user; }

  public get FirstName() {return this.user.firstName; }
  public set FirstName(e: any) {
    this.User.firstName = e;
  }

  constructor() { }

  public changeEditable(): void {
    this.canEditable = !this.canEditable;
  }

  ngOnInit(): void {
  }

}


