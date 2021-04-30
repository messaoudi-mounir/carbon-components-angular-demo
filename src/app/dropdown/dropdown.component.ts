import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"]
})
export class DropdownComponent implements OnInit {
  // the following value prop is custom prop for the sake of convinience
  courseData = [
    { content: "JavaScript", value: 0 },
    { content: "ES6 & ES7", value: 1 },
    { content: "React", value: 2 },
    { content: "Vue.js", value: 3 }
  ];
  courseModel = {content: "ES6 & ES7", value: 1, selected: true};
  courseData2 = [];


  constructor() {
      this.courseData2 = [
    { content: "JavaScript", value: 0 },
    { content: "ES6 & ES7", value: 1 },
    { content: "React", value: 2 },
    { content: "Vue.js", value: 3 }
  ];
  }

  ngOnInit() {}

  onSelected(e) {
    console.log("selected:");
    console.log(e);
  }

  onSelect(e) {
    console.log("select:");
    console.log(e);
  }
}
