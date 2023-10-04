import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  signupModel= new User('Tajinder','username@domain.com','123456','venturepact',true);
  onSubmit(){
    console.log(this.signupModel);
  }
  ngOnInit(): void {
  }

}
