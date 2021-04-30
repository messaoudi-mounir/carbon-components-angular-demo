import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

 orderForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      userEmail: ['', Validators.required, Validators.pattern(/\S+@\S+\.\S+/)]
    });
  }

}