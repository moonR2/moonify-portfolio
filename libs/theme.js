import { color, extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      bg: mode('#F7F3EE', '#2C2621')(props)
    }
  })
};

const components = {
  Heading: {
    variants: {
      'section-title': props => ({
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginButtom: 4,
        color: mode('#BF3F36', '#F8D668')(props)
      })
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#FF675C')(props),
      textUnderlineOffset: 3
    })
  },
  Text: {
    variants: {
      title: props => ({
        fontSize: 20,
        fontWeight: 'bold',
        color: mode('#BF3F36', '#F8D668')(props)
      })
    }
  }
};

const fonts = {
  heading: 'Karla',
  body: 'Quicksand'
};

const colors = {
  glassTeal: '#88ccca',
  primaryYellow: '#F8D668',
  primaryBlue: '#4DADD5'
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
};

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
  colors
});

export default theme;
