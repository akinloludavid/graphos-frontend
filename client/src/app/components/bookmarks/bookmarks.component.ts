import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { PostType } from 'src/types/userType';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css'],
})
export class BookmarksComponent implements OnInit {
  bookmarkedPosts!: PostType[];
  constructor(private service: CrudService, private router: Router) {}

  isLoading = true;
  ngOnInit(): void {
    this.service.getPosts().subscribe((data: any) => {
      const user = JSON.parse(
        localStorage.getItem('graphos-userprofile') as string
      );
      const userId = user?._id;
      let blogs = data.posts;
      this.bookmarkedPosts = blogs.filter((blog: any) =>
        blog.bookmarks.includes(userId)
      );
      this.isLoading = false;
      console.log(this.bookmarkedPosts);
    });
  }

  readFullPost(post: PostType) {
    this.router.navigate([`/feeds/${post._id}`]);
  }

  handleSearch(x: any) {
    let value = x.value.toLowerCase();
    const copy = [...this.bookmarkedPosts];

    let results = copy.filter((p: PostType) =>
      p.title.toLowerCase().includes(value)
    );
    this.bookmarkedPosts = results;
  }
}
