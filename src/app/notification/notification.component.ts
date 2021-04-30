import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notificationConfig = {
		type: 'info',
		title: 'Sample notification',
		message: 'add a path mapping for the new library. The path mapping is needed to use the library in an app, but can be disabled here to simplify development.',
  };

  constructor() { }

  ngOnInit() {
  }

  setWarning() {
    this.notificationConfig = { title: 'warning', };
  }

  setSuccess() {
    this.notificationConfig = { title: 'success' };
  }

}