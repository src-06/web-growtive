
export interface PaginatedProps<T> {
  current_page: number
  data: T[]
  from: number
  last_page: number
}

export interface Charts {
  id: number
  instagram: number
  tiktok: number
  instagram_tiktok: number
  endorsement: number
  created_at: string
}

export interface Article {
  id_article: string
  id_user: number
  thumbnail: string
  user: User
  title: string
  body: string
  created_at: string
  updated_at: string
}

export interface Testimonial {
  id: number
  profile: string
  name: string
  company: string
  testimonial: string
}

export interface User {
  id: number
  name: string
  email: string
  role: string
}

export interface About {
  id: number
  profile_owner: string
  profile_company: string
  description: string
  visi: string
  misi: string
  goals: {
    id: number
    id_about: number
    title: string
    text: string
  }[]
}
