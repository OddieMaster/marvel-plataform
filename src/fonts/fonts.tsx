import { createGlobalStyle } from 'styled-components';
import MarvelRegularFont from './types/MarvelRegular-Dj83.ttf';

declare module '*.ttf';
declare module '*.otf';

export const MarvelRegular = createGlobalStyle`
 @font-face {
    font-family: Font Name;
    font-style: normal;
    font-weight: 400;
    src: url(${MarvelRegularFont});
  }

`
