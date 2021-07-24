import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor
    (private route:ActivatedRoute,
     private service:CrudService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id = params['postid']
    })
    this.service.getOnePost(this.id).subscribe((data:any)=>{
      this.blogPost = data.post;
    })
  }

}
