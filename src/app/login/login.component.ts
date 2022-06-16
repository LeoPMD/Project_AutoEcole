import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm!:FormGroup

  constructor(private formBuilder:FormBuilder, private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      username: [null,[Validators.required]],
      password: [null, [Validators.required]]
    },
    {
      updateOn: "blur"
    })
  }

  onSubmit()
  {
    this.router.navigate(["/accueil"])
  }
}
