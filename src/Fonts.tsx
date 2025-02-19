//REACT
import React from "react";

export default function Fonts() {
  const prefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
            @font-face {
              font-family: 'Rubik';
              font-style: normal;
              font-weight: 200;
              font-display: swap;
              src: url('${
                prefix + '/fonts/Rubik/Rubik-Light.ttf'
              }) format('truetype');
            }

            @font-face {
              font-family: 'Rubik';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url('${
                prefix + '/fonts/Rubik/Rubik-Regular.ttf'
              }) format('truetype');
            }
            
            @font-face {
              font-family: 'Rubik';
              font-style: normal;
              font-weight: 500;
              font-display: swap;
              src: url('${
                prefix + '/fonts/Rubik/Rubik-Medium.ttf'
              }) format('truetype');
            }
            
            @font-face {
              font-family: 'Rubik';
              font-style: normal;
              font-weight: 700;
              font-display: swap;
              src: url('${
                prefix + '/fonts/Rubik/Rubik-Bold.ttf'
              }) format('truetype');
            }

            @font-face {
              font-family: 'Rubik';
              font-style: normal;
              font-weight: 900;
              font-display: swap;
              src: url('${
                prefix + '/fonts/Rubik/Rubik-ExtraBold.ttf'
              }) format('truetype');
            }
          `,
      }}
    />
  );
}
