import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {

  public name='hema';
public hasError=false;
public isSpecial=true;
  constructor(private fb:FormBuilder) { }
registrationForm:FormGroup=this.fb.group({
  email:['',Validators.required],
  password:['',Validators.required],
  repeatPassword:['',Validators.required]
})
  ngOnInit(): void {
  }

  public func(){
    console.log("22==",this.registrationForm.value)
  }

}
