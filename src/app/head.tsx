//REACT
import React from "react";

export default function RootHead() {

  //CONTEXT
  
  //USEEFFECT

  //TOASTS
  
  //VARIABLES
  
  //STATES

  //FUNCTIONS

  return <>
	<link rel="apple-touch-icon" href="/logo192.png" />
	<link rel="manifest" href="/manifest.json" />
	<link
	  rel="shortcut icon"
	  type="image/x-icon"
	  href={process.env.NEXT_PUBLIC_BASE_PATH || '' + '/favicon.ico'}
	/>
	  <title>Music Release</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
	<meta http-equiv="content-security-policy"
	  content="default-src 'self' *.veriff.me *.veriff.com;
	  script-src 'self' *.veriff.me *.veriff.com *.hotjar.com *.probity.io;
	  img-src blob: 'self' *.probity.io;
	  frame-src 'self' *.hotjar.com;
	  connect-src 'self' *.veriff.com *.veriff.me *.probity.io;
	  style-src 'self' *.veriff.com *.veriff.me;"/>
  </>
};