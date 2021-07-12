
import { Component, OnInit } from '@angular/core';
import { SignUp } from '../models/Sign-up';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
 
  model: SignUp = new SignUp();


 constructor() { }

  ngOnInit(): void {
  }

  submitUser(){
    console.log(this.model);
  }
}
