import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name="anonymous";
  constructor(private user:UserService) { }

  ngOnInit() {
    this.name=this.user.userName;
  }

}
