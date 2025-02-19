//CHAKRA
import { mode } from "@chakra-ui/theme-tools";

export const globalStyles = {
  colors: {
    brand: {
      50: '#FCE8E7',
      100: '#F7C3C1',
      200: '#F29E9B',
      300: '#EE7976',
      400: '#ED6663',
      500: '#D65B58',
      600: '#BF504D',
      700: '#A94542',
      800: '#933A38',
      900: '#7D2F2D',
    },
    brandScheme: {
      50: '#FCE8E7',
      100: '#F7C3C1',
      200: '#F29E9B',
      300: '#EE7976',
      400: '#ED6663',
      500: '#D65B58',
      600: '#BF504D',
      700: '#A94542',
      800: '#933A38',
      900: '#7D2F2D',
    },
    brandTabs: {
      50: '#FCE8E7',
      100: '#F7C3C1',
      200: '#F29E9B',
      300: '#EE7976',
      400: '#ED6663',
      500: '#D65B58',
      600: '#BF504D',
      700: '#A94542',
      800: '#933A38',
      900: '#7D2F2D',
    },
    brandOrange: {
      50: '#FFE9DC',
      100: '#FFD1B6',
      200: '#FFBA91',
      300: '#FFA372',
      400: '#E69368',
      500: '#CC825C',
      600: '#B37251',
      700: '#996247',
      800: '#80523D',
      900: '#664333',
    },
    brandPeach: {
      50: '#FCE8E7',
      100: '#F7C3C1',
      200: '#F29E9B',
      300: '#EE7976',
      400: '#ED6663',
      500: '#D65B58',
      600: '#BF504D',
      700: '#A94542',
      800: '#933A38',
      900: '#7D2F2D',
    },
    secondaryGray: {
      100: '#E0E5F2',
      200: '#E1E9F8',
      300: '#F4F7FE',
      400: '#E9EDF7',
      500: '#8F9BBA',
      600: '#A3AED0',
      700: '#707EAE',
      800: '#707EAE',
      900: '#1B2559',
    },
    red: {
      100: '#FEEFEE',
      500: '#EE5D50',
      600: '#E31A1A',
    },
    blue: {
      50: '#EFF4FB',
      500: '#3965FF',
    },
    orange: {
      100: '#FFF6DA',
      500: '#FFB547',
    },
    green: {
      100: '#E6FAF5',
      500: '#01B574',
      900: '#01a468',
    },
    navy: {
      50: '#D1E4F2',
      100: '#A3C9E5',
      200: '#76AFD9',
      300: '#4A95CC',
      400: '#0F4C81',
      500: '#0D4373',
      600: '#0B3A65',
      700: '#092F56',
      800: '#072647',
      900: '#051C39',
    },
    gray: {
      100: '#FAFCFE',
    },
    background: {
      100: '#FFFFFF',
      900: '#1B262C',
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        overflowX: 'hidden',
        bg: mode('background.100', 'background.900')(props),
        fontFamily: 'Rubik',
        letterSpacing: '-0.5px',
      },
      input: {
        color: 'gray.700',
      },
      html: {
        fontFamily: 'Rubik',
      },
    }),
  },
};
