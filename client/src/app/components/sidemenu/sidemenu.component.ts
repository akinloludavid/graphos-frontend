import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPen, faCompass, faBookmark, faBars,faTags, faSearch, faUser,faBell } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css'],
})
export class SidemenuComponent implements OnInit {
  faPen = faPen;
  faCompass = faCompass;
  faBars = faBars;
  faTags = faTags;
  faSearch = faSearch;
  faUser = faUser;
  faBell = faBell;
  faBookmark = faBookmark;
  username!:string
  show=true
  constructor(private router:Router) {}
  userProfile:string | any
  ngOnInit(): void {

    this.userProfile = JSON.parse(localStorage.getItem('graphos-userprofile') as string)
    this.username = this.userProfile?.username
  }

  logOut(){
    localStorage.removeItem('graphos-token');
    localStorage.removeItem('graphos-userprofile');
    this.router.navigate(['/'])
  }
}
