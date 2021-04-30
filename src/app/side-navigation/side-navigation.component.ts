import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

currentNavId = '';

  constructor() { }

  ngOnInit() {
  }

  onClickNavItem(event): void {
    if (!event.target.closest('a')) { return; }
    this.currentNavId = event.target.closest('ibm-sidenav-item').id;
  }

}