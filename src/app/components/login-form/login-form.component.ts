import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  formTitle:string = "Sign In"

  newCustomer:boolean = false

  newCustomerText:string = "New Customer?"

  buttonText:string = "Sign In"

  userName:string | undefined
  password:string | undefined
  confirmPassword:string | undefined

  constructor() { }

  ngOnInit(): void {
  }

  registerNewCustomer():void{
    this.newCustomer = !this.newCustomer


    if(!this.newCustomer){
      this.newCustomerText ="New Customer?"
      this.formTitle = "Sign In"
      this.buttonText = "Sign In"
    }
    else{
      this.newCustomerText = "Already a Customer?"
      this.formTitle = "Sign Up"
      this.buttonText = "Sign Up"
    }
  }
}
