
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
  user: User
  title: string
  body: string
  created_at: string
  updated_at: string
}

export interface User {
  id: number
  name: string
  email: string
  role: string
}

export interface PaginatedProps<T> {
  current_page: number
  data: T[]
  from: number
  last_page: number
}
