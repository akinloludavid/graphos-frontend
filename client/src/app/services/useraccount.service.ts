import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginDetail, UserModel } from 'src/types/userType';
import { Observable, ObservableLike } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}
const token = localStorage.getItem('graphos-token');

const config = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    Authorization: `Bearer ${token}`,
  }),
};

@Injectable({
  providedIn: 'root',
})

export class UseraccountService {
  private accountUrl = 'http://localhost:8000/user';

  constructor(private http: HttpClient) {}

  createAccount(values:UserModel):Observable<UserModel>{
    return this.http.post<UserModel>(`${this.accountUrl}/signup`, values, httpOptions)
  }

  signIn(values:LoginDetail):Observable<LoginDetail>{
    return this.http.post<LoginDetail>(`${this.accountUrl}/login`, values, httpOptions)
  }

  updateUserProfile(user:UserModel):Observable<UserModel>{
    return this.http.put<UserModel>(`${this.accountUrl}/update/${user._id}`, user, config)
  }

  uploadProfilePicture(user:UserModel):Observable<UserModel>{
    return this.http.put<UserModel>(`${this.accountUrl}/uploadavatar/${user._id}`, user, config)
  }
}
