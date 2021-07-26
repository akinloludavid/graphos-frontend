import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { PostType } from 'src/types/userType';

@Component({
  selector: 'app-myfeed',
  templateUrl: './myfeed.component.html',
  styleUrls: ['./myfeed.component.css'],
})
export class MyfeedComponent implements OnInit {
  allPosts: any[] = [];
  constructor(private service: CrudService, private router: Router) {}
  imgUrl =
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';
  isLoading = true;
  ngOnInit(): void {
    this.service.getPosts().subscribe(
      (data: any) => {
        this.allPosts = data.posts;
        console.log(data);
        this.isLoading = false;
      },
      (error) => {
        console.log(error.message);
        this.isLoading = false;
      }
    );
  }

  readFullPost(post: PostType) {
    this.router.navigate([`/feeds/${post._id}`]);
  }

  likeAPost(post: PostType) {
    this.service.likePost(post).subscribe((post) => {
      console.log(post);
    });
  }
  bookMark(post:PostType){
    this.service.bookMarkPost(post).subscribe(p=>{
      console.log(p)
    })
  }
  handleSearch(x: any) {
    let value = x.value.toLowerCase();
    const copy = [...this.allPosts];

    let results = copy.filter((p: PostType) =>
      p.title.toLowerCase().includes(value)
    );
    this.allPosts = results;
  }
}
