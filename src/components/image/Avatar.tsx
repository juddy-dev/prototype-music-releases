'use client'

//CHAKRA
import { 
  chakra, 
  useColorMode 
} from "@chakra-ui/system";

//REACT
import { ComponentProps } from "react";

//INTERNAL COMPONENTS
import { Image } from "./Image";

type AvatarImageProps = Partial<
    ComponentProps<typeof Image> & {
        showBorder?: boolean;
    }
>;

export function Avatar({
    src,
    showBorder,
    alt = '',
    style,
    ...props
}: AvatarImageProps) {
  //CONTEXT
  
  //USEEFFECT

  //TOASTS
  
  //VARIABLES
  const { colorMode } = useColorMode();
    
  //STATES

  //FUNCTIONS

  return (
    <Image
      {...props}
      {...(showBorder
        ? {
          border: "2px",
          borderColor: colorMode === "dark" 
            ? "navy.700" 
            : "white",
          }
        : {})}
      alt={alt}
      objectFit={"fill"}
      src={src}
      style={{ ...style, borderRadius: "50%" }}
    />
  );
};

export const ChakraAvatar = chakra(Avatar, {
  shouldForwardProp: (prop) =>
    ["width", "height", "src", "alt", "layout"].includes(prop),
});
