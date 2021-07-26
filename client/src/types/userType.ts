export interface UserModel{
  firstname:string
  lastname: string
  username?:string
  gender:string
  email:string
  password:string,
  bio?:string,
  _id?:string
  avatar?:string

}

export interface LoginDetail{
  email:string
  password:string
}

export interface PostType{
  _id:string
  title:string
  subtitle:string
  content:string
  tags?:string[]
  likesCount?: number
  likes?:string[]
  owner?:any
  createdAt:string
  updatedAt:string
  creator?:Record<string,any>
  bookmarks:string[]
}
