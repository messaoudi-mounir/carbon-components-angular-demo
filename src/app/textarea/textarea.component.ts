import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {
   commentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.commentForm = this.formBuilder.group({
      username: [''],
      comment: ['']
    });
  }

  enterHandler(event) {
    if (event.target.nodeName !== 'TEXTAREA') {
      event.preventDefault();
    }
  }

  onSubmit() {
    alert('The form will be submitted');
  }

}