import { ThemeConfig, extendTheme } from '@chakra-ui/react';
import { Montserrat } from 'next/font/google';

const font = Montserrat({
  subsets: ['latin-ext'],
  display: 'swap',
});

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};
export const theme = extendTheme({
  fonts: {
    heading: `${font.style.fontFamily}, sans-serif`,
    body: `${font.style.fontFamily}, sans-serif`,
  },
  config,
});
