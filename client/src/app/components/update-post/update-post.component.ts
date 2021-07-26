import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { PostType } from 'src/types/userType';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {

  constructor(private service: CrudService, private route:ActivatedRoute, private router:Router) { }
  id!:string
  currentPost!:PostType
  newPost!:any
  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      this.id = param.postid
      console.log(param)
    })
    this.service.getOnePost(this.id).subscribe((data:any)=>{
      console.log(data)
      this.currentPost = data.post
    })

  }
  updatePost(currentPost:PostType){
    this.newPost = {
      "title":currentPost.title,
      "subtitle":currentPost.subtitle,
      "content":currentPost.content,
      "creator":currentPost.creator,
      "createdAt":currentPost.createdAt,
      "updatedAt":currentPost.updatedAt,
      "tags":currentPost.tags,
      "likesCount":currentPost.likesCount,
      "likes":currentPost.likes,
      "_id":this.id
    }

    this.service.updatePost(this.newPost).subscribe(newpost=>{
      this.router.navigate(['/feeds', this.newPost._id])
    }, error =>{
      console.log(error.message)
    })
  }
}
