export const AUTH_KEY = "kjusys-auth";

const VALID_USER = "p_26csst01@kristujayanti.com";
const VALID_PASS = "RT#9lmvo";

export function checkCredentials(username: string, password: string) {
  return username.trim().toLowerCase() === VALID_USER && password === VALID_PASS;
}

export function isSignedIn() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(AUTH_KEY) === "1";
}

export function signIn() {
  window.localStorage.setItem(AUTH_KEY, "1");
}

export function signOut() {
  window.localStorage.removeItem(AUTH_KEY);
}
