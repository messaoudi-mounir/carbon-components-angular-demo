import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  isParentOpen = false;
  isChildOpen = false;
  isGrandChildOpen = false;

  constructor() { }

  ngOnInit() {
  }

  openParentModal() {
    this.isParentOpen = true;
  }

  closeParentModal() {
    this.isParentOpen = false;
  }

  openChildModal() {
    this.isChildOpen = true;
  }

  closeChildModal() {
    this.isChildOpen = false;
  }

  openGrandChildModal() {
    this.isGrandChildOpen = true;
  }

  closeGrandChildModal() {
    this.isGrandChildOpen = false;
  }


}