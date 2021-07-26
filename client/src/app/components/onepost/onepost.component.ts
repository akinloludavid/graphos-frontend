import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { CrudService } from 'src/app/services/crud.service';
import { PostType } from 'src/types/userType';

@Component({
  selector: 'app-onepost',
  templateUrl: './onepost.component.html',
  styleUrls: ['./onepost.component.css']
})
export class OnepostComponent implements OnInit {
  blogPost!:PostType
  id!:string
  show=true
  showIcon = false
  faPen = faPen

  constructor
    (private route:ActivatedRoute,
    private router: Router,
     private service:CrudService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id = params['postid']
    })
    this.service.getOnePost(this.id).subscribe((data:any)=>{
      this.blogPost = data.post;
      this.show = false
      let profile = JSON.parse(localStorage.getItem('graphos-userprofile') as string)
      if(this.blogPost.creator){
        if(profile._id === this.blogPost.creator['ID']){
          this.showIcon = true
        }else {
          this.showIcon = false
        }

      }
    })
  }

  editPost(blogPost:PostType){
    this.router.navigate(['post/edit', blogPost._id])
  }
}
