
export interface Users {
  current_page: number
  data: User[]
  from: number
  last_page: number
}

export interface User {
  id: number
  name: string
  email: string
  role: string
}

export interface PaginateCharts {
  current_page: number
  data: Charts[]
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
