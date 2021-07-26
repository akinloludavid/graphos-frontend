import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  constructor(private createPostService:CrudService, private router:Router) { }
  ngOnInit(): void {
  }
  createPost(blog:any){
    this.createPostService.createAPost(blog).subscribe(b=>{
      console.log(b)
      this.router.navigate(['/feeds'])
    }, error=>{
      console.log(error.message)
    })
  }

}
