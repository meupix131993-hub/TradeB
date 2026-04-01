export function getToken() {
  return localStorage.getItem('tradeb_token')
}

export function isAuthenticated() {
  return !!getToken()
}

export function logout() {
  localStorage.removeItem('tradeb_token')
  window.location.href = '/'
}
