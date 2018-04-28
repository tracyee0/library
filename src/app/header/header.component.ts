import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

interface user_login_interface {
  staffId: String,
  password: String
};
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }
  staffId;
  pwd;
  user_login: user_login_interface = {
    staffId: "",
    password: ""
  };

  error = "";

  ngOnInit() {
  }
  validateform(){
    if (this.staffId == "001" && this.pwd == "smartlib"){
      alert("We are too much!")
      this.router.navigateByUrl("register")
    
    }
    else{
      this.error="invalid staff ID or password"
    }
    }
}
