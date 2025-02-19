'use client'

//CHAKRA
import { 
  useStyleConfig, 
  chakra, 
  forwardRef 
} from "@chakra-ui/react";

//THEME
import { CustomCardProps } from "theme/theme";

const CustomCard = forwardRef<CustomCardProps, 'div'>((props, ref) => {
  const { size, variant, ...rest } = props;
  const styles = useStyleConfig('Card', { size, variant });

  //CONTEXT
  
  //USEEFFECT

  //TOASTS
  
  //VARIABLES
  
  //STATES

  //FUNCTIONS

  return <chakra.div ref={ref} __css={styles} {...rest} />;
});

export default CustomCard;
