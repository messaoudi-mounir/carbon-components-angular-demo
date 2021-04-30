import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  skills = ['HTML','CSS','JavaScript']
  appraisalForm = this.formBuilder.group({
    appraisals: this.initAppraisal()
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  initAppraisal() {
    return this.formBuilder.array(this.skills.map(skill => this.formBuilder.group({
      comment: ['I am good at ' + skill]
    })));
  }

  onSelected(status: string) {
    alert(status);
  }
}