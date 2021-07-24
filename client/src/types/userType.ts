export interface UserModel{
  firstname:string
  lastname: string
  username?:string
  gender:string
  email:string
  password:string
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
  creator?:Record<string,any>
}
