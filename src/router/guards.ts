import { RouteLocationNormalized, NavigationGuardNext } from "vue-router";
import { store } from "@/store";

/**
 * Protects routes that only authenticated users are allowed to visit
 */
export function preventForUnauthenticated(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const isForAuthenticatedOnly = !to.meta.forNonAuthenticated;
  const isLoggedIn: boolean = store.getters['auth/isLoggedIn'];

  if (isForAuthenticatedOnly && !isLoggedIn) {
    return next("/auth/signin");
  }

  return next();
}

/**
 * Prevents authenticated user from entering routes
 * that shouldn't be accessible for them
 * (e.g. "Sign in" and "Sign up" pages)
 */
export function preventForAuthenticated(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const isForNonAuthenticated = to.meta.forNonAuthenticated;
  const isLoggedIn: boolean = store.getters['auth/isLoggedIn'];

  if (isForNonAuthenticated && isLoggedIn) {
    return next(from.fullPath);
  }

  return next();
}

