import { Component, OnInit, ViewChild } from "@angular/core";
import { StepProgressBarComponent } from "./step-progress-bar/step-progress-bar.component";

@Component({
  selector: "app-progress-indicator",
  templateUrl: "./progress-indicator.component.html",
  styleUrls: ["./progress-indicator.component.scss"]
})
export class ProgressIndicatorComponent implements OnInit {
  steps = [
    {
      text: "First step",
      state: ["complete"]
    },
    {
      text: "Second step",
      state: ["current"]
    },
    {
      text: "Third step",
      state: ["incomplete"]
    },
    {
      text: "Fourth step",
      state: ["incomplete", "error"]
    },
    {
      text: "Fifth step",
      state: ["incomplete"],
      disabled: true
    }
  ];

  @ViewChild(StepProgressBarComponent)
  private stepProgressBar: StepProgressBarComponent;

  steps2 = [
    {
      id: "html",
      text: "HTML",
      children: [
        {
          id: "html-intro",
          text: "Introductory"
        },
        {
          id: "html-inter",
          text: "Intermediate"
        },
        {
          id: "html-adv",
          text: "Advanced"
        }
      ]
    },
    {
      id: "css",
      text: "CSS",
      children: [
        {
          id: "css-intro",
          text: "Introductory"
        },
        {
          id: "css-inter",
          text: "Intermediate"
        },
        {
          id: "css-adv",
          text: "Advanced"
        }
      ]
    },
    {
      id: "js",
      text: "JS",
      children: [
        {
          id: "js-intro",
          text: "Introductory"
        },
        {
          id: "js-inter",
          text: "Intermediate"
        },
        {
          id: "js-adv",
          text: "Advanced"
        }
      ]
    },
    {
      id: "photoshop",
      text: "PhotoShop"
    },
    {
      id: "sketch",
      text: "Sketch"
    },
    {
      id: "invision",
      text: "InVision"
    }
  ];
  routes = {
    "": "/start",
    "html-intro": "/html/semantic-elements",
    "html-inter": "/html/form",
    "html-adv": "/html/svg",
    "css-intro": "/css/selector",
    "css-inter": "/css/responsive-design",
    "css-adv": "/css/scss",
    "js-intro": "/js/jquery",
    "js-inter": "/js/es6",
    "js-adv": "/js/nodejs",
    "photoshop": "/photoshop",
    "sketch": "/sketch",
    "invision": "/invision",
    "*": "/end"
  };
  currentId = "";
  current = "";
  isNarrowerView = false;

  constructor() {}

  ngOnInit() {}

    previous() {
    this.current = this.stepProgressBar.previousStep();
    setTimeout(() => {
      // this.router.navigate([this.routes[this.stepProgressBar.current]]);
    }, 0);
  }

  next() {
    this.current = this.stepProgressBar.nextStep();
    setTimeout(() => {
      // this.router.navigate([this.routes[this.stepProgressBar.current]]);
    }, 0);
  }

  toggleLayout() {
    this.isNarrowerView = !this.isNarrowerView;
  }
}
