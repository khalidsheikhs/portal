const CSRF_NONCE_KEY = "csrf_nonce"

export const csrfNonceSession = {
  get: () => sessionStorage.getItem(CSRF_NONCE_KEY),

  set: (nonce: string) => {
    sessionStorage.setItem(CSRF_NONCE_KEY, nonce)
  },

  clear: () => {
    sessionStorage.removeItem(CSRF_NONCE_KEY)
  },
}