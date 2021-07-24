import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http'
import { SignupformComponent } from './components/signupform/signupform.component';
import { LoginformComponent } from './components/loginform/loginform.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MyfeedComponent } from './components/myfeed/myfeed.component';
import { CreateBlogComponent } from './components/create-blog/create-blog.component';
import { BlogcardComponent } from './components/blogcard/blogcard.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { OnepostComponent } from './components/onepost/onepost.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    SidemenuComponent,
    WelcomeComponent,
    SignupformComponent,
    LoginformComponent,
    MyfeedComponent,
    CreateBlogComponent,
    BlogcardComponent,
    NotfoundComponent,
    OnepostComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatFormFieldModule,
    HttpClientModule,
    NgxSkeletonLoaderModule.forRoot({animation:'pulse'}),
    RouterModule.forRoot([
      { path: '', component: LandingpageComponent },
      { path: 'signup', component: SignupformComponent },
      { path: 'login', component: LoginformComponent },
      { path: 'feeds', component: MyfeedComponent },
      { path: 'createpost', component: CreateBlogComponent },
      {path:'feeds/:postid', component:OnepostComponent},
      { path: '**', component: NotfoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
