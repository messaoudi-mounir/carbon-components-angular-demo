import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "../services";
import { User } from "../../shared/models";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
  currentUser: User;

  constructor(private router: Router, private authService: AuthService) {
    this.authService.currentUser.subscribe(x => {
      this.currentUser = x;
    });
  }

  ngOnInit() {}

  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
}