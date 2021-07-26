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
import { MatTabsModule } from '@angular/material/tabs';

import { HttpClientModule } from '@angular/common/http'
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
import { UpdatePostComponent } from './components/update-post/update-post.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
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
    UpdatePostComponent,
    BookmarksComponent,
    UserprofileComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTabsModule,
    HttpClientModule,
    NgxSkeletonLoaderModule.forRoot({ animation: 'progress' }),
    RouterModule.forRoot([
      { path: '', component: LandingpageComponent },
      { path: 'signup', component: SignupformComponent },
      { path: 'login', component: LoginformComponent },
      { path: 'feeds', component: MyfeedComponent },
      { path: 'mybookmarks', component:BookmarksComponent},
      { path: 'createpost', component: CreateBlogComponent },
      { path: 'feeds/:postid', component: OnepostComponent },
      { path: 'post/edit/:postid', component: UpdatePostComponent },
      { path: 'user-profile', component:UserprofileComponent},
      { path: '**', component: NotfoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
