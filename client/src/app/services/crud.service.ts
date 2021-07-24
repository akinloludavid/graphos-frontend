import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostType } from 'src/types/userType';
import { Observable } from 'rxjs';


const token = localStorage.getItem('graphos-token')
const config = {
  headers: new HttpHeaders({
    'Content-type':'application/json',
    'Authorization': `Bearer ${token}`
  })
}
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private blogUrl = 'http://localhost:8000'
  constructor(private http:HttpClient) { }

  createAPost(blogPost:PostType):Observable<PostType>{
    return this.http.post<PostType>(`${this.blogUrl}/posts`, blogPost, config)
  }
  getPosts(){
    return this.http.get(`${this.blogUrl}/allposts`)
  }

  getOnePost(id:string){
    return this.http.get(`${this.blogUrl}/posts/${id}`)
  }
}
