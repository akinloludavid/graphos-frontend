import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UseraccountService } from 'src/app/services/useraccount.service';
import { LoginDetail } from 'src/types/userType';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private loginService:UseraccountService, private router:Router) { }

  ngOnInit(): void {
  }
  signIn(user:LoginDetail){
    this.loginService.signIn(user).subscribe((resp:any)=>{
      console.log(resp)
      localStorage.setItem('graphos-token', resp.token)
      localStorage.setItem('graphos-userprofile', JSON.stringify(resp.user))
      this.router.navigate(['/feeds'])
    }, error=>{
      console.log(error.message)
    })
  }


}
