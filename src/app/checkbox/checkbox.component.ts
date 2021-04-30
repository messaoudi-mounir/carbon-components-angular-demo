import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  skillData= ['jQuery', 'ES 6&7', 'React'];
  skills = this.formBuilder.array([false, true, false]);

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}