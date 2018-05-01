import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { MockService } from '../mock.service';

interface register_interface{
  name: string,
  author: string,
  ISBN: string,
  description: string,
  path: string
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private my_service: MockService) { }
  name
  author
  ISBN
  description
  path
  book_reg: register_interface = {
    name: " ",
    author: "",
    ISBN:"",
    description: "",
    path:""
  };
  error=""
  ngOnInit() {
    let reg_data = localStorage.getItem("reg_data")
    this.book_reg = JSON.parse(reg_data);
  }
  register() {
    if(this.book_reg.name === "" || this.book_reg.author === ""){
      this.error = "Book name and Author are compulsory";
    } else 
    if (this.book_reg.ISBN == ""){
      this.error = "ISBN is required";
    }
    else if(this.book_reg.description.length < 32){
      this.error ="Description must contain atleast 32 characters!"
    }
      else if (this.book_reg.path == "") {
      this.error = "Please select a valid path!";
    } else {
   console.log(" You have succesfully registered "  + " by " + this.book_reg.author)
    this.my_service.getData('http://localhost:8000/submit').subscribe(
      result => {
        console.log(result)
      }, error => {
        console.log(error)
      }
    )
    
    }
  }
}
