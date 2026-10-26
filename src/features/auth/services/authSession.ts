
const AUTH_SESSION_KEY = "isLoggedIn"

export const authSession = {
  set(): void {
    sessionStorage.setItem(AUTH_SESSION_KEY, "true")
  },

  get(): boolean {
    return sessionStorage.getItem(AUTH_SESSION_KEY) === "true"
  },

  clear(): void {
    sessionStorage.removeItem(AUTH_SESSION_KEY)
  },
}