import { Component, OnInit } from '@angular/core';
import { MatFormField, MatLabel} from '@angular/material/form-field';
import { Router } from '@angular/router';
import { UseraccountService } from 'src/app/services/useraccount.service';
import { UserModel } from 'src/types/userType';
@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {
  constructor(private signUpService:UseraccountService, private router:Router) { }

  ngOnInit(): void {
  }
  signUp(x:UserModel){
    this.signUpService.createAccount(x).subscribe(user=>{
      this.router.navigate(['/login'])
      console.log(user)
    }, error =>{
      console.log(error.message)
    })
  }
}
