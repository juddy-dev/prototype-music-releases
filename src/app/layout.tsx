//REACT
import React, {
  ReactNode
} from "react";

//INTERNAL COMPONENTS
import AppWrappers from "./AppWrappers";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {

  //CONTEXT
  
  //USEEFFECT

  //TOASTS
  
  //VARIABLES
  
  //STATES

  //FUNCTIONS
  
  return (
    <html lang="en">
      <body id={"root"}>
        <AppWrappers>{children}</AppWrappers>
      </body>
    </html>
  );
};
