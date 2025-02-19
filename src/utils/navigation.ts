//INTERNAL COMPONENTS
import { IRoute } from "types/navigation";

// NextJS Requirement
export const isWindowAvailable = () => typeof window !== 'undefined';

export const findCurrentRoute = (
  routes: IRoute[],
  pathname: string,
): IRoute | undefined | null => {
  if (!isWindowAvailable()) return null;

  for (let route of routes) {
    if (!!route.items) {
      const found = findCurrentRoute(route.items, pathname);
      if (!!found) return found;
    }
    if (pathname?.match(route.path) && route) return route;
  }
};

export const findCurrentPrimaryRoute = (
  routes: IRoute[],
  pathname: string,
): IRoute | undefined | null => {
  if (!isWindowAvailable()) return null;

  for (let route of routes) {
    if (pathname?.match(route.path) && route) return route;
  }
};

export const getActiveRoute = (routes: IRoute[], pathname: string): string => {
  const route = findCurrentRoute(routes, pathname);
  return route?.name || 'N/A';
};

export const getActiveRoutePreviousPage = (routes: IRoute[], pathname: string): string => {
  const route = findCurrentRoute(routes, pathname);
  return route?.previous || '';
};

export const getActivePrimaryRoute = (routes: IRoute[], pathname: string): string => {
  const route = findCurrentPrimaryRoute(routes, pathname);
  return route?.name || 'N/A';
};

export const getActiveNavbar = (
  routes: IRoute[],
  pathname: string,
): boolean => {
  const route = findCurrentRoute(routes, pathname);
  return !!route && !!route.secondary ? route.secondary : false;
};

export const getActiveNavbarText = (
  routes: IRoute[],
  pathname: string,
): string | boolean => {
  return getActiveRoute(routes, pathname) || false;
};
