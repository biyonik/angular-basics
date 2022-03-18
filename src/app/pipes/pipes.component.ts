import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  public lipsum: string = 'Lorem ipSuM DoLOr sİt AMeT conseCTetUr AdiPIsİcing elit. Tenetur, nemo?';
  public cash: number = 1500;
  constructor() { }

  ngOnInit(): void {
  }

}
