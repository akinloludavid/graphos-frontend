import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faBookmark, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { PostType } from 'src/types/userType';
@Component({
  selector: 'app-blogcard',
  templateUrl: './blogcard.component.html',
  styleUrls: ['./blogcard.component.css'],
})
export class BlogcardComponent {
  @Input() post!: PostType;
  @Input() imgUrl!: string;
  @Output() onLikePost: EventEmitter<PostType> = new EventEmitter();
  @Output() onBookmarkPost: EventEmitter<PostType> = new EventEmitter();
  @Output() onReadMore: EventEmitter<any> = new EventEmitter();
  faThumbsUp = faThumbsUp;
  faBookmark = faBookmark;
  isActive = false;
  bookmarkActive=false;

  likePost(post: PostType) {
    this.isActive = !this.isActive;
    this.onLikePost.emit(post);
  }

  bookMarkPost(post: PostType) {
    this.bookmarkActive = !this.bookmarkActive
    this.onBookmarkPost.emit(post);
  }

  readMore(post: any) {
    console.log(post);
    this.onReadMore.emit(post);
  }

  dateConvert(x: string) {
    return new Date(x).toLocaleDateString();
  }
}
