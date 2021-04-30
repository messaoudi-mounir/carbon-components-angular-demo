import { Component, OnInit, Input, Renderer2 } from '@angular/core';
import { Step } from "./step.model";

@Component({
  selector: 'app-step-progress-bar',
  templateUrl: './step-progress-bar.component.html',
  styleUrls: ['./step-progress-bar.component.scss']
})
export class StepProgressBarComponent implements OnInit {

tempSteps = [];
  currentIndex = -1;

  @Input() steps: Step[];

  @Input() narrowerView = false;

  private _current = "";
  @Input()
  get current(): string {
    return this._current;
  }

  set current(current: string) {
    if (!this.tempSteps.length) {
      this.constructTempSteps();
    }

    if (!current) {
      for (let step of this.tempSteps) {
        step.state = "incomplete";
      }
      this._current = "";
      this.currentIndex = -1;
      return;
    }

    if (current === "*") {
      for (const step of this.tempSteps) {
        step.state = "complete";
      }
      this._current = "*";
       this.currentIndex = this.tempSteps.length;
      return;
    }

    const index = this.tempSteps.findIndex(step => step.id === current);
    if (index === -1) {
      return;
    }

    let updateLevel1 = false; // update current level1 to current state
    for (let i = index - 1; i > -1; i--) {
      this.tempSteps[i].state = "complete";
      if (
        !updateLevel1 &&
        this.tempSteps[index].level === 2 &&
        this.tempSteps[i].level === 1
      ) {
        this.tempSteps[i].state = "current";
        updateLevel1 = true;
      }
    }
    this.tempSteps[index].state = "current";
    this.currentIndex = index;
    this._current = current;
    let offset = 1;
    if (this.tempSteps[index].level === 1 && this.tempSteps[index].children) {
      this.tempSteps[index + 1].state = "current";
      this.currentIndex = index + 1;
      this._current = this.tempSteps[index + 1].id;
      offset = 2;
    }
    for (let i = index + offset; i < this.tempSteps.length; i++) {
      this.tempSteps[i].state = "incomplete";
    }
  }

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  constructTempSteps() {
    for (const step of this.steps) {
      if (step.children) {
        step.level = 1;
        const tempChildren = step.children;
        tempChildren.forEach(step => (step.level = 2));
        delete step.childeren;
        this.tempSteps = this.tempSteps.concat(step, ...tempChildren);
      } else {
        step.level = 1;
        this.tempSteps.push(step);
      }
    }
  }

  previousStep() {
    const prevIndex = this.currentIndex - 1;
    if (prevIndex > 0) {
      if (this.tempSteps[prevIndex].level === 1 && this.tempSteps[prevIndex].children) {
        return this.tempSteps[prevIndex - 1].id;
      } else {
        return this.tempSteps[prevIndex].id;
      }
    } else {
      return "";
    }
  }

  nextStep() {
    const nextIndex = this.currentIndex + 1;
    if (nextIndex < this.tempSteps.length) {
      return this.tempSteps[nextIndex].id;
    } else {
      return "*";
    }
  }

  toggleMenu(event) {
    if (event.target.parentNode.classList.contains("collapsed")) {
      this.renderer.removeClass(event.target.parentNode, 'collapsed');
      // this.renderer.removeClass(event.target.nextSibling, 'pei-chevron-down');
      // this.renderer.addClass(event.target.nextSibling, 'pei-chevron-up');
    } else {
      this.renderer.addClass(event.target.parentNode, 'collapsed');
      // this.renderer.removeClass(event.target.nextSibling, 'pei-chevron-up');
      // this.renderer.addClass(event.target.nextSibling, 'pei-chevron-down');
    }
  }

}