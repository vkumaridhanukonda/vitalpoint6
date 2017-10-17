import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private router: Router,private user:UserService) { }

  ngOnInit() {
  }
  loginUser(e) {
    var userName = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    if (userName == "admin" && password == "admin") {
      this.user.serUserLoggedIn();
      this.router.navigate(['dashboard']);
    }
  }
}
