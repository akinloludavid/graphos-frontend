import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  constructor(private createPostService:CrudService) { }

  ngOnInit(): void {
  }
  createPost(blog:any){
    this.createPostService.createAPost(blog).subscribe(b=>{
      console.log(b)
    }, error=>{
      console.log(error.message)
    })
  }

}
