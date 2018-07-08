import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-test-req',
  templateUrl: './test-req.component.html',
  styleUrls: ['./test-req.component.css']
})
export class TestReqComponent implements OnInit {
loginForm : FormGroup;

  constructor(public FormBuilder:FormBuilder) { 

  }

  ngOnInit() {
    this.loginForm=this.FormBuilder.group({
      username:['',[Validators.required]]
    });
    // this.loginForm = new FormGroup({
    //   user: new FormControl()
   }
  

}
