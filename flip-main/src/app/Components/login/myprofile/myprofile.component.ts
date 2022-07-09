import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
//we will break into 3 ways 
/*
1.apply valition role to the 
*/
  constructor( private fb:FormBuilder) { }
registrationForm2=this.fb.group({
fname:['Hema',Validators.required],
sname:[''],
password:[''],
confirmPassword:[''],
mobile:[''],
address:this.fb.group({
  city:[''],
  state:[''],
  postalCode:['']
})
})

  ngOnInit(): void {
  }

}
