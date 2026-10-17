export type LoginRequest = {
  username: string
  password: string
}

export type LoginResponse = {
  user_display_name: string
  user_nicename: string
  user_email: string
  token: string
}

export type User = {
  id: number
  name: string
  slug: string
}