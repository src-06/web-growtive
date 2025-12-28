
export interface Users {
  current_page: number
  data: User[]
  from: number
  last_page: number
}

export interface Link {
  active: boolean
  label: string
  page: number
  url: string
}

export interface User {
  id: number
  name: string
  email: string
  role: string
  email_verified_at: string | null
  created_at: string
  updated_at: string
}
