import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { UseraccountService } from 'src/app/services/useraccount.service';
import { PostType } from 'src/types/userType';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserprofileComponent implements OnInit {
  myposts!: PostType[];
  isLoading = true;
  constructor(private userservice:UseraccountService, private service: CrudService, private router: Router) {}
  currentUser!: Record<string, any>;

  user = JSON.parse(
    localStorage.getItem('graphos-userprofile') as string
  );
  ngOnInit(): void {
    this.currentUser = this.user;
    this.service.getCurrentUserPost(this.user._id).subscribe((data: any) => {
      this.myposts = data.posts;
      this.isLoading = false;
    }, error =>{
      console.log(error.message)
    });
  }

  readFullPost(post: PostType) {
    this.router.navigate([`/feeds/${post._id}`]);
  }

  updateProfile(user: any) {
    this.userservice.updateUserProfile(this.user).subscribe(newUser=>{
      console.log(newUser)
    }, error=>{
      console.log(error.message)
    })
  }

  uploadImage(image:any){
    console.log(image.value)
    this.user.imgUrl = image.value
    this.userservice.uploadProfilePicture(this.user).subscribe(img =>{
      console.log(img)
    })
  }
  logOut() {
    localStorage.removeItem('graphos-token');
    localStorage.removeItem('graphos-userprofile');
    this.router.navigate(['/']);
  }
}
