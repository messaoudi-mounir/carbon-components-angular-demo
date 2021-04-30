import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-radio",
  templateUrl: "./radio.component.html",
  styleUrls: ["./radio.component.scss"]
})
export class RadioComponent implements OnInit {
  genderData = ["male", "female"];
  genders = this.formBuilder.control("", Validators.required);
  submitted = false;

  genderModel = "";

  genderData1 = [
    { caption: "male", val: 0 },
    { caption: "female", val: 1 }
  ];
  // genderModel1 = {};
  genderModel1 = 0;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.genderModel = "female";
    // this.genderModel1 = { caption:"female", val: 1};
    this.genderModel1 = 1;
  }

  toggleRadioState() {
    this.genders.reset({ value: this.genders.value, disabled: !this.genders.disabled });
  }
}
