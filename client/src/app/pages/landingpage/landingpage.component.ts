import { Component, OnInit } from '@angular/core';
import { faInstagram, faTwitter, faFacebook, faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css'],
})
export class LandingpageComponent implements OnInit {
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faGithub = faGithub;
  faYoutube = faYoutube;
  faLinkedin = faLinkedin;
  isLoggedIn = true
  constructor() {}

  ngOnInit(): void {
    const token = localStorage.getItem('graphos-token');
    if(!token){
      this.isLoggedIn=false
    }
    else{
      this.isLoggedIn=true
    }

  }
}
