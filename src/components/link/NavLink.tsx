'use client';

//REACT
import {
  CSSProperties,
  PropsWithChildren,
  useMemo,
} from "react";

//NETX JS
import NextLink, { 
  LinkProps as NextLinkProps 
} from "next/link";

export type NavLinkProps = NextLinkProps &
  PropsWithChildren & {
    styles?: CSSProperties;
  };

//CONTEXT

//USEEFFECT

//TOASTS

//VARIABLES

//STATES

//FUNCTIONS
function NavLink({ children, styles, ...props }: NavLinkProps) {
  const memoizedStyles = useMemo(
    () => ({
      ...styles,
    }),
    [styles],
  );

  return (
    <NextLink 
      style={memoizedStyles} 
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default NavLink;
