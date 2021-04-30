import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-datepicker",
  templateUrl: "./datepicker.component.html",
  styleUrls: ["./datepicker.component.css"]
})
export class DatepickerComponent implements OnInit {
  options: any = {
    label: "label",
    size: "xl",
    value: "10/19/2019",
    placeholder: "placeholder",
    disabled: false
  };
  constructor() {}

  ngOnInit() {}
}
