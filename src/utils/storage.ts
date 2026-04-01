const TOKEN_KEY = "tradeb_token";
const USER_KEY = "tradeb_user";

export function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function setUser(user: unknown) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function getUser<T = any>(): T | null {
  const raw = localStorage.getItem(USER_KEY);

  if (!raw) return null;

  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function removeUser() {
  localStorage.removeItem(USER_KEY);
}

export function clearAuthStorage() {
  removeToken();
  removeUser();
}
