import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  NgForm,
  FormGroup,
  FormArray,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.css"]
})
export class SelectComponent implements OnInit {
  startDayModel = "5";

  dayData = [
    { name: "Sunday", value: 0 },
    { name: "Monday", value: 1 },
    { name: "Tuesday", value: 2 },
    { name: "wednesday", value: 3 },
    { name: "Thursday", value: 4 },
    { name: "Friday", value: 5 },
    { name: "Saturday", value: 6 }
  ];
  
  startDay1 = this.formBuilder.control(5);

  dayData2 = [
    "Sunday",
    "Monday",
    "Tuesday",
    "wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  startDay2 = this.formBuilder.control("");

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {

  }

}
