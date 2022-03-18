import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlackListValidator } from 'src/libs';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  public registerForm: FormGroup = new FormGroup({});
  constructor() { }

  ngOnInit(): void {
    this.resetForm();
  }

  saveForm(formsValue: FormGroup) {
    console.log(formsValue);

  }

  resetForm() {
    this.registerForm = new FormGroup({
      username: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
          BlackListValidator('ü')
        ],
        asyncValidators: [
          
        ]
      }),
      age: new FormControl(0)
    })
  }

}
