import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-storage',
  templateUrl: './local-storage.component.html',
  styleUrls: ['./local-storage.component.scss']
})
export class LocalStorageComponent implements OnInit {
  name: string = '';
  localStorageValue: any;
  constructor() { }

  ngOnInit(): void {
  }

  public setItem(key: string, value: any): void {
    localStorage.setItem(key, value);
  }

  public getItem(key: string): void {
    let val = localStorage.getItem(key);
    if(val) {
      alert(val)
      this.localStorageValue =  val;
    }

  }

  public clearItem(key: string) {
    localStorage.removeItem(key);
  }

  public clearAll() {
    localStorage.clear();
  }



}
