import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
//there are three steps of creating reactive angular forms 
/*
1.define html form in the component form 
2.define user model in component class 
3.use the directtives provided by reactive forms module to associate model with view
 */
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  registrationForm =new FormGroup({
    username:new FormControl('Hema'),
    password:new FormControl(''),
    confirmPassword: new FormControl(''),
    address:new FormGroup({
      city:new FormControl(''),
      state:new FormControl(''),
      postalCode:new FormControl('') 
    })
   });

 loadApiData(){
  this.registrationForm.setValue({//using setValue is maintain sctrict structure//patchValue doesnot maintain those things 
    username:"Hema",
    password:"reddy",
    confirmPassword:'test',
    address:{
      city:'Hyderabed',
      state:'Telangana',
      postalCode:'500074',
    }
  })
 }


  ngOnInit(): void {
  }

}
